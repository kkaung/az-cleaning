import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import AccordionList from '@/components/accordion-list';

const getFAQs = (location?: string) => {
    return [
        {
            question:
                'Do you offer any guarantees or warranties on your carpet cleaning services?',
            answer: `Yes, we stand behind our work and offer a satisfaction guarantee on all our carpet cleaning services in Wollongong. If you're not completely satisfied with the results, we'll re-clean the area free of charge.`,
        },
        {
            question: 'What types of carpets and rugs can you clean?',
            answer: 'Our carpet cleaners can clean all types of carpets and rugs, including synthetic fibers, natural fibers, berber, plush, patterned, and area rugs. We tailor our solutions and techniques to the specific carpet material and construction for safe and effective cleaning.',
        },
        {
            question:
                'What methods do you use for carpet cleaning in Wollongong?',
            answer: `We use a combination of hot water extraction (also known as steam cleaning) and encapsulation techniques for deep carpet cleaning in Wollongong. Hot water extraction flushes out dirt and debris, while encapsulation helps lift stubborn stains and oils from the carpet fibers.`,
        },
        {
            question:
                'How long does it take for carpets to dry after cleaning?',
            answer: 'Typically, carpets take between 6-8 hours to fully dry after a professional cleaning. However, the drying time can vary depending on factors like the carpet type, the amount of soiling, humidity levels, and airflow in the area.',
        },
        {
            question:
                'How often should I have my carpets professionally cleaned?',
            answer: `For most residential properties, it's recommended to have carpets professionally cleaned at least once a year. However, high-traffic areas or homes with pets may require more frequent cleaning every 6-9 months to maintain a clean and hygienic environment.`,
        },
        {
            question: 'Can I get a same-day booking?',
            answer: 'No assurance for same-day bookings, but we often meet the request depending on the day.',
        },
        {
            question:
                'Do you offer carpet stain removal services in Wollongong?',
            answer: 'Yes, we specialize in carpet stain removal in Wollongong. Our technicians are trained to treat a wide range of stains, including pet stains, food and beverage spills, makeup, and more. We use eco-friendly, professional-grade products to effectively remove tough stains.',
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
