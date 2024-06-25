import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { siteConfig } from '@/configs/site';
import { type Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: `Careers`,
    description: `Join ${siteConfig.name}'s top cleaning team: great pay, flexibility & local jobs. Apply now for happier house cleaning work near you.`,
    alternates: {
        canonical: '/careers',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Careers', href: '/careers' },
                ]}
                dottable={false}
            />
            <PageHeader className="mx-auto">
                <PageHeaderHeading>
                    Join the {siteConfig.name} Team
                </PageHeaderHeading>
            </PageHeader>
            <div className="grid mx-auto w-full max-w-sm items-center gap-4">
                <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input title="Full Name" />
                </div>
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input title="Email" type="email" />
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input title="Phone" type="number" />
                </div>
                <div className="">
                    <Label htmlFor="address">Address</Label>
                    <Input className="block" id="address" />
                </div>
                <div className="">
                    <Label htmlFor="stay">
                        How long have you been in Australia?
                    </Label>
                    <Input className="block" id="stay" />
                </div>
                <div className="flex items-center gap-2">
                    <Switch id="transport" />
                    <Label htmlFor="transport">Do you have a car?</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">
                        I confirm my agreement to {siteConfig.name}&apos;s
                        <Link href="/privacy">Privacy Policy</Link>
                    </Label>
                </div>
                <Button>Submit</Button>
            </div>
        </Shell>
    );
}
