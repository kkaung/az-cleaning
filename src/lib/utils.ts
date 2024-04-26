import { env } from '@/env.mjs';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

export function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
}

export function unslugify(str: string) {
    return str.replace(/-/g, ' ');
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function toSentenceCase(str: string) {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}

export function isMacOs() {
    if (typeof window === 'undefined') return false;

    return window.navigator.userAgent.includes('Mac');
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export function absoluteUrl(path: string) {
    return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatPrice(
    price: number | string,
    options: Intl.NumberFormatOptions = {}
) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: options.currency ?? 'USD',
        notation: options.notation ?? 'compact',
        ...options,
    }).format(Number(price));
}
