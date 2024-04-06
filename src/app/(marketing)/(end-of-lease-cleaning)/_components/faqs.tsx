import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';

const getFAQs = (location?: string) => {
    return [
        {
            question: 'What is your Satisfaction Guarantee?',
            answer: `Our Satisfaction Guarantee is our promise of reliability to you. If you’re not satisfied with the cleaning service delivered, we’re committed to making it right. Here’s how it works:\n 1.Contact us within 24 hours post-cleaning to share your concerns or issues. \nFor end of lease/ move-in cleaning, a 72-hour window is available to report concerns. \n 3.We’ll arrange a complimentary re-clean on the next available business day, where our team will revisit your property to focus on your areas of concern.\n 4.If you’re still dissatisfied after the re-clean, we’ll reassess the situation. If we can’t resolve your concerns, a credit or refund will be issued to you accordingly.`,
        },
        {
            question: 'How long does a end of lease cleaning typically take?',
            answer: `The duration of a end of lease clean depends on the size of the property, but typically takes anywhere from 4-8 hours for an average-sized home. Our experienced teams work efficiently to provide a thorough, top-to-bottom clean in a timely manner.`,
        },
        {
            question: 'How many your cleaners will come to clean my house?',
            answer: `Our standard consists of a team of two cleaners, with the possibility of an additional team member joining as required. However, for smaller tasks such as Studio, 1BR, 2BR, or touch-up jobs, one person may be assigned.`,
        },
        {
            question: 'Are your cleaning teams professionals insured?',
            answer: 'Every member of our exceptional cleaning team is fully insured, safeguarding you and your property while delivering unparalleled cleaning solutions.',
        },
        {
            question: 'Can I get a receipt to show my real estate agent?',
            answer: 'Absolutely. Once your cleaning service has been completed and your card has been charged, a service receipt will automatically be emailed to you.',
        },
        {
            question: 'Can I stay home during the bond cleaning process?',
            answer: 'Certainly, you can remain at home during the deep cleaning process if you prefer. However, many clients choose to run errands or be out of the house to allow our experienced team to work uninterrupted and complete the job efficiently.',
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
