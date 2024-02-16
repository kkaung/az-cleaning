import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import FeaturedImage from '/public/assets/images/guarantee.jpeg';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

interface GuranteeProps extends HTMLAttributes<HTMLElement> {}

export default function Gurantee({ ...props }: GuranteeProps) {
    return (
        <section
            id="gurantee"
            aria-labelledby="gurantee-heading"
            className={cn(
                props.className,
                'p-12 bg-secondary flex flex-col max-h-[500px] items-center gap-12 rounded-lg md:flex-row'
            )}
        >
            <Image
                width={500}
                height={500}
                src={FeaturedImage}
                alt=""
                className="rounded-xl hidden md:block"
            />
            <div className="flex-1 space-y-4">
                <h2 className={cn(headingVariants({}))}>
                    72 Hours Bond Back Guarantee
                </h2>
                <p className="text-primary/80">
                    Book your cleaning service with absolute confidence. Our
                    professional end-of-lease cleaning comes with a 100% Bond
                    Return assurance, ensuring peace of mind. Secure your bond
                    cleaning in Melbourne effortlessly online in just 60
                    seconds.
                </p>
                <Link href="" className={cn(buttonVariants({}))}>
                    Book My Cleaning
                </Link>
            </div>
        </section>
    );
}
