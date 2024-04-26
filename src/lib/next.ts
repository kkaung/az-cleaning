import { headers } from 'next/headers';
import { toTitleCase } from './utils';

export const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? '';
};

export const checkIPForGooglebot = async () => {
    const headersList = headers();

    const ip =
        headersList.get('x-forwarded-for') ||
        headersList.get('x-real-ip') ||
        (headersList.get('remoteAddress') as string);

    const res = await fetch(
        'https://developers.google.com/search/apis/ipranges/googlebot.json'
    );

    const data = await res.json();

    const googlebotRanges: string[] = data.prefixes
        .filter((f: any) => !f.ipv6Prefix)
        .map((p: any) => p.ipv4Prefix);

    const isGooglebot: boolean = googlebotRanges.some(range => {
        const [subnet, bits] = range.split('/');
        const mask: number = (1 << (32 - parseInt(bits, 10))) - 1;
        const subnetInt: number = ipToInt(subnet);
        const ipInt: number = ipToInt(ip);
        return (subnetInt & mask) === (ipInt & mask);
    });

    console.log(`Is request from Googlebot? ${isGooglebot}`);

    return isGooglebot;
};

const ipToInt = (ip: string): number => {
    return (
        ip
            .split('.')
            .reduce(
                (result, octet) => (result << 8) + parseInt(octet, 10),
                0
            ) >>> 0
    );
};

export const checkUserAgentForGooglebot = () => {
    const headersList = headers();

    const userAgent = headersList.get('user-agent')!;

    const isGooglebot = /Googlebot/i.test(userAgent);

    return true;

    return isGooglebot;
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
