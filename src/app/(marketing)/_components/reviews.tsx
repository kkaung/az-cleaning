import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import { headingVariants } from '@/components/page-header';
import { Icons } from '@/components/icons';
import Marquee from '@/components/magicui/marquee';

const reviews = [
    {
        name: 'Emily',
        location: '',
        body: 'RZ Cleaning Team did a great job on our apartment. Everything was spotless and we got 100% of our bond back. I would definitely recommend them for End of Lease cleaning.',
    },
    {
        name: 'Dora',
        body: 'Our Cleaners provided excellent cleaning for my end of lease. Reliable and friendly people. I would definitely reach out to them again!',
    },
    {
        name: 'Durden',
        body: 'I am very satisfied with the cleaning service. Brenda was extremely thorough, and my place is spotless! Highly recommend.',
    },
    {
        name: 'Jessie W',
        body: 'We booked the service for our end of lease cleaning and I couldn’t be happier. The flat is spotless and the service was amazing including the customer service before and after the cleaning. I will totally recommend RZ Cleaning.',
    },
    {
        name: 'Kelly',
        body: 'Vivi and the team arrived punctually, were very friendly, professional and did a great job. Highly recommend.',
    },
    {
        name: 'Nick',
        body: 'Very pleased with my end of lease clean from Angie and Yeimy. Great job and a reasonable price!',
    },
    {
        name: 'John',
        body: 'Amazing job unit was spotless really happy with the result would use for end of lease clean.',
    },
    {
        name: 'Nicole',
        body: 'Karen and Monica were booked at short notice to do our end-of-lease cleaning - they did a great job, would definitely recommend them!',
    },
    {
        name: 'Melanie',
        body: `I've used RZ Cleaning twice for lease end moving-out cleaning, and on both occasions they have been very open and communicative. The cleaning met all my expectations and would recommend them.`,
    },
    {
        name: 'Sarah',
        body: `Vivi and Robin did an amazing job cleaning the apartment for my end of lease. They were super helpful and responsive and sent a lot of photos after cleaning to ensure satisfaction.`,
    },
    {
        name: 'Peter M',
        body: `I have used many cleaning companies over the years and RZ Cleaning is the best I have found in Sydney.`,
    },
];

interface ReviewsProps extends HTMLAttributes<HTMLElement> {}

export default function Reviews({ ...props }: ReviewsProps) {
    return (
        <div style={{ width: '100%', overflowX: 'hidden' }}>
            <section
                id="reviews"
                aria-labelledby="reviews-heading"
                className={cn(
                    props.className,
                    'relative space-y-6 w-full overflow-hidden py-12'
                )}
            >
                <div className="space-y-12">
                    <div className="space-y-4 md:text-center">
                        <h2 className={cn(headingVariants({}))}>
                            <Balancer>What Our Customers Are Saying</Balancer>
                        </h2>
                    </div>
                    <div className="space-y-5">
                        <Marquee
                            pauseOnHover
                            className="transform-cpu [--duration:150s]"
                        >
                            {reviews.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
}

interface ReviewCardProps extends HTMLAttributes<HTMLElement> {
    name: string;
    body: string;
}

function ReviewCard({ name, body, ...props }: ReviewCardProps) {
    return (
        <div
            className={cn(
                props.className,
                'h-full w-60 min-w-[20rem] leading-tight border rounded-xl p-4 bg-secondary/50 ml-2'
            )}
        >
            <div className="flex justify-between">
                <div className="space-y-2">
                    <div>
                        <h6 className="font-medium">{name}</h6>
                        <p></p>
                    </div>
                    <p className="text-sm italic mt-4 text-primary/80">
                        &quot;{body}&quot;
                    </p>
                </div>
                <div>
                    <Icons.fullGoogle className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}
