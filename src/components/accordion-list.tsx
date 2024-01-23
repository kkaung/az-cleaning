'use client';

import { cn } from '@/lib/utils';
import React, { useState, type HTMLAttributes } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

interface AccordionListProps extends HTMLAttributes<HTMLElement> {
    items: { question: string; answer: string }[];
}

export default function AccordionList({ items, ...props }: AccordionListProps) {
    const [tab, setTab] = useState('');

    return (
        <Accordion
            type="single"
            collapsible
            value={tab}
            onValueChange={setTab}
            className={cn(props.className)}
        >
            {items.map((item, idx) => {
                const isActive = `${idx}` === tab;

                return (
                    <AccordionItem key={idx} value={`${idx}`}>
                        <AccordionTrigger className="text-base">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent
                            forceMount
                            hidden={`${idx}` !== tab}
                            className="text-base"
                        >
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
