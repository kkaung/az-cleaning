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
            question: 'What is residental window cleaning?',
            answer: `Residential window cleaning in Wollongong refers to professional cleaning services offered to homeowners and residents for keeping their windows sparkling clean. Window cleaning companies in Wollongong specialize in providing comprehensive interior and exterior window cleaning for houses, apartments, and other residential properties.`,
        },
        {
            question: 'Are your cleaning teams professionals insured?',
            answer: 'Every member of our exceptional cleaning team is fully insured, safeguarding you and your property while delivering unparalleled cleaning solutions.',
        },
        {
            question: 'Can you remove and clean fly screens?',
            answer: `Regarding fly screen cleaning, please note that our current window cleaning service does not cover this aspect. If you require additional details or have specific inquiries about the scope of services, we kindly recommend reaching out to our customer service team during the booking process. They will be happy to provide further clarification.`,
        },
        {
            question: 'Are cleaning supplies provided?',
            answer: `Yes, ${siteConfig.name}'s professional teams provide all necessary cleaning supplies and equipment for a seamless and hassle-free experience.`,
        },
        {
            question: 'Is window cleaning included in your end of lease clean?',
            answer: `Yes, Our standard bond cleaning service includes thorough cleaning of all interior windows.`,
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
