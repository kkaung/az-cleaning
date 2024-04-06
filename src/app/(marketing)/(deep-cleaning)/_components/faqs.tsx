import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';
import { siteConfig } from '@/configs/site';

const getFAQs = (location?: string) => {
    return [
        {
            question: 'What is a deep cleaning?',
            answer: `A deep cleaning from ${siteConfig.name} is a comprehensive, thorough cleaning process that goes beyond regular surface cleaning. It involves detailed attention to often-overlooked areas, ensuring a truly fresh and rejuvenated living or working space.`,
        },
        {
            question: 'How long does a deep clean typically take?',
            answer: `The duration of a deep clean depends on the size of the property, but typically takes anywhere from 4-8 hours for an average-sized home. Our experienced teams work efficiently to provide a thorough, top-to-bottom clean in a timely manner.`,
        },
        {
            question: 'How many your cleaners will come to clean my house?',
            answer: `Our standard consists of a team of two cleaners, with the possibility of an additional team member joining as required. However, for smaller tasks such as Studio, 1BR, 2BR, or touch-up jobs, one person may be assigned.`,
        },
        {
            question: 'Can I stay home during the deep cleaning process?',
            answer: 'Certainly, you can remain at home during the deep cleaning process if you prefer. However, many clients choose to run errands or be out of the house to allow our experienced team to work uninterrupted and complete the job efficiently.',
        },
        {
            question: `What is your cancellation policy?`,
            answer: 'For cancellations, please provide us with a 24-hour notice to avoid a late cancellation fee. Our cleaning teams’ schedules are meticulously planned, and cancellations within 24 hours of service result in lost work opportunities for them.',
        },
    ];
};

interface FAQsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function FAQs({ location = 'Sydney', ...props }: FAQsProps) {
    const faqs = getFAQs().map(i => {
        return { questionName: i.question, acceptedAnswerText: i.answer };
    });

    return (
        <>
            <section
                id="faqs"
                aria-labelledby="faqs-heading"
                className={cn(props.className, 'py-12')}
                {...props}
            >
                <div className="mx-auto max-w-4xl w-full space-y-6">
                    <h2 className={cn(headingVariants({}), 'text-center')}>
                        Frequently Asked Questions
                    </h2>
                    <AccordionList items={getFAQs(location)} />
                    <div className="text-center">
                        <Link
                            href="/frequently-asked-questions"
                            className="underline font-bold group hover:no-underline"
                        >
                            See All
                            <Icons.arrowRight
                                aria-hidden
                                className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                                strokeWidth={3}
                            />
                            <span className="sr-only">
                                See All Frequently Asked Questions
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
