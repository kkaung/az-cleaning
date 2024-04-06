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
            question: 'What is after builder cleaning?',
            answer: `After builder cleaning, also known as post-construction cleaning, is a specialized cleaning service that is performed once construction or renovation work is completed in a residential or commercial property. It involves a thorough cleaning process to remove all the dust, debris, and residue left behind by the construction activities.`,
        },
        {
            question: 'How long does after builder cleaning take?',
            answer: `The duration of after builder cleaning depends on the size of the property and the extent of construction work. A quick rule of thumb is to match the number of bedrooms with the estimated hours needed (e.g. 3 bedrooms would typically require around 3 hours)`,
        },
        {
            question: 'Are your cleaning teams professionals insured?',
            answer: 'Every member of our exceptional cleaning team is fully insured, safeguarding you and your property while delivering unparalleled cleaning solutions.',
        },
        {
            question: 'How many your cleaners will come to clean my house?',
            answer: `Our standard consists of a team of two cleaners, with the possibility of an additional team member joining as required. However, for smaller tasks such as Studio, 1BR, 2BR, or touch-up jobs, one person may be assigned.`,
        },
        {
            question: 'Are cleaning supplies provided?',
            answer: `Yes, ${siteConfig.name}'s cleaning teams provide all necessary cleaning supplies and equipment for a seamless and hassle-free experience.`,
        },
        {
            question: 'Can I get a same-day booking?',
            answer: 'No assurance for same-day bookings, but we often meet the request depending on the day.',
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
