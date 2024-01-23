import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import BookOnlieImage from '/public/assets/images/book-online.png';
import WeCleanImage from '/public/assets/images/we-clean.png';
import YouRelaxImage from '/public/assets/images/you-relax.png';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {}

export default function HowWork({ ...props }: HowWorkProps) {
    return (
        <section
            id="how-works"
            aria-labelledby="how-works-heading"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto py-12 md:text-center'
            )}
            {...props}
        >
            <h2 className="font-extrabold text-4xl">How It Works</h2>
            <ul className="grid grid-cols-1 gap-6 grid-flow-row md:grid-cols-3">
                <li>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={BookOnlieImage}
                            className="md:mx-auto"
                            alt="Book Online"
                        />
                        <div className="space-y-3">
                            <p className="font-semibold text-lg">
                                1. Book Online
                            </p>
                            <p>
                                Book your Melbourne end lease cleaning service
                                online in 60 seconds.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={WeCleanImage}
                            className="mx-auto"
                            alt="We Clean"
                        />
                        <div className="space-y-3">
                            <p className="font-semibold text-lg">2. We Clean</p>
                            <p>
                                Our end lease cleaners in Melbourne will come
                                over & professionally clean your home.
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex space-y-2 gap-4 sm:gap-6 md:flex-col md:gap-4">
                        <Image
                            width={150}
                            height={150}
                            src={YouRelaxImage}
                            alt="Book Online"
                            className="mx-auto"
                        />
                        <div className="space-y-3">
                            <p className="font-semibold text-lg">
                                3. You Relax
                            </p>
                            <p>
                                Sit back, relax and have your rental bond
                                returned.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
}
