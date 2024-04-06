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
            question: 'What types of ovens do you clean?',
            answer: `We clean all types of household ovens, including electric, gas, fan-forced, and self-cleaning ovens. We also clean stove tops, range hoods, BBQ grills, and other cooking appliances.`,
        },
        {
            question: 'How long does the cleaning process take?',
            answer: `The length of the cleaning process depends on the size and condition of the oven, but it typically takes between 1-2 hours for a standard household oven.`,
        },
        {
            question: 'Are your cleaning teams professionals insured?',
            answer: 'Every member of our exceptional cleaning team is fully insured, safeguarding you and your property while delivering unparalleled cleaning solutions.',
        },
        {
            question: 'Do you offer any guarantees?',
            answer: `We guarantee that our professional oven cleaning service will leave your oven looking like new, or we will re-clean it for free. We also offer a satisfaction guarantee on all our services.`,
        },
        {
            question: 'Are cleaning supplies provided?',
            answer: `Yes, ${siteConfig.name}'s professional teams provide all necessary cleaning supplies and equipment for a seamless and hassle-free experience.`,
        },
        {
            question: 'How do I book a cleaning?',
            answer: `You can book an oven cleaning service by calling our office or filling out the online booking form on our website. We'll schedule a convenient appointment time for one of our technicians to come to your home.`,
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
