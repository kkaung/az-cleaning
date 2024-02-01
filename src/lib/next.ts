import { headers } from 'next/headers';
import { toTitleCase } from './utils';

export const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? '';
};

export const getPathname = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    return pathname;
};

export const getCityFromPath = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    const pathSegments = pathname.split('/');

    const splitted = pathSegments[1].split('-');

    let cityName: string;

    if (splitted[splitted.length - 2] !== 'cleaning') {
        const firstName = splitted[splitted.length - 2];
        const lastName = splitted[splitted.length - 1];

        cityName = toTitleCase(firstName + ' ' + lastName);
    } else {
        cityName = toTitleCase(pathSegments[1].split('-').pop()!);
    }

    return cityName !== undefined && cityName !== null && cityName !== ''
        ? cityName
        : 'Australia';
};
