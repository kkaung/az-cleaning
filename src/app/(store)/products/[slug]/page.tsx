import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { siteConfig } from '@/configs/site';
import { env } from '@/env.mjs';
import { absoluteUrl, formatPrice } from '@/lib/utils';
import { allProducts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import type { Graph, Product } from 'schema-dts';

interface ProductPageProps {
    params: {
        slug: string;
    };
}

async function getProductFromParams(params: ProductPageProps['params']) {
    const slug = params.slug as string;

    const product = allProducts.find(product => product.slugAsParams === slug);
    if (!product) return null;
    return product;
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const product = await getProductFromParams(params);

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('title', product!.title);
    ogUrl.searchParams.set('type', 'Product');
    ogUrl.searchParams.set('mode', 'dark');

    return {
        metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
        title: `${product!.title} - ${siteConfig.name}`,
        description: product!.description,
        alternates: {
            canonical: product!.slug,
        },
    };
}

export default async function Page({ params }: ProductPageProps) {
    const product = await getProductFromParams(params);

    const ProductSchema: Product = {
        '@type': 'Product',
        name: product!.title,
        description: product!.description,
        image: absoluteUrl('/images/logo.png'),
        brand: {
            '@type': 'Brand',
            name: siteConfig.title,
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            bestRating: '5',
            worstRating: '1',
            ratingValue: product!.ratingValue,
            ratingCount: product!.ratingCount,
        },
    };

    const graphSchemas: Graph = {
        '@context': 'https://schema.org',
        '@graph': [ProductSchema],
    };

    return (
        <>
            <Shell className="pb-12 md:pb-14">
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Store', href: '/products' },
                        { title: product!.title, href: product!.slug },
                    ]}
                    dottable={false}
                />
                <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                    <AspectRatio
                        className="border rounded-xl max-w-xl h-[500px] flex items-center justify-center"
                        ratio={16 / 9}
                    >
                        <Image
                            width={400}
                            height={500}
                            src={product?.image!}
                            alt={product?.title!}
                        />
                    </AspectRatio>
                    <div className="flex w-full flex-col gap-4 md:w-3/4">
                        <div className="space-y-2">
                            <h2 className="line-clamp-1 text-2xl font-bold">
                                {product?.title}
                            </h2>
                            <p className="text-base text-muted-foreground">
                                {formatPrice(Number(product!.price))}
                            </p>
                        </div>
                        <Separator className="my-1.5" />
                        <div className="flex items-center justify-between">
                            {/* <Rating rating={Math.round(product.rating / 5)} />
                        <UpdateProductRatingButton
                            productId={product.id}
                            rating={product.rating}
                        /> */}
                        </div>
                        <Separator className="mt-5" />
                        <Button>Add To Cart</Button>
                        <Separator className="mt-5" />
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            defaultValue="description"
                        >
                            <AccordionItem
                                value="description"
                                className="border-none"
                            >
                                <AccordionTrigger>Description</AccordionTrigger>
                                <AccordionContent>
                                    {product!.description ??
                                        'No description is available for this product.'}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Separator className="md:hidden" />
                    </div>
                </div>
            </Shell>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(graphSchemas),
                }}
                strategy="afterInteractive"
            />
        </>
    );
}
