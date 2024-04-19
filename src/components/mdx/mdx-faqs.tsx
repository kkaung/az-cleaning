import React, { type HTMLAttributes } from 'react';

interface FAQsProps extends HTMLAttributes<HTMLElement> {
    items: { question: string; answer: string }[];
}

export default function FAQs({ items }: FAQsProps) {
    return (
        <div>
            {items.map((i, idx) => (
                <div key={idx}>
                    <h5>{i.question}</h5>
                    <p>{i.answer}</p>
                </div>
            ))}
        </div>
    );
}
