import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function HowWork({ location, ...props }: HowWorkProps) {
    const items = [
        {
            title: 'Book Online',
            description: 'Book your cleaning service online in 60 seconds.',
        },
        {
            title: 'We Clean',
            description: `Our expert cleaners in ${location} will come over & professionally clean your home.`,
        },
        {
            title: 'You Relax',
            description: 'Sit back, relax and enjor your sparkle clean home.',
        },
    ];

    return (
        <section
            id="how-works"
            aria-labelledby="how-works-heading"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto py-12'
            )}
            {...props}
        >
            <h2 className="font-extrabold text-4xl text-center">
                How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
                {items.map(item => (
                    <div key={item.title} className="space-y-2">
                        <div className="font-semibold text-lg">
                            {item.title}
                        </div>
                        <p className="text-muted-foreground">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
