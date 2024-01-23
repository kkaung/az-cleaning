import { headers } from 'next/headers';

export const getPathname = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    return pathname;
};
