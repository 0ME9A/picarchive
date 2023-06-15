import { keywords, openGraph, twitter } from "./src/_meta/webText";

export const metadata_template = {
    // Common metadata attributes
    generator: 'PicArchive',
    applicationName: 'PicArchive',
    referrer: 'origin-when-cross-origin',
    keywords: keywords([]),
    authors: [{ name: 'baliram singh' }],
    colorScheme: 'dark', // Assuming the default color scheme is light
    creator: 'baliram singh',
    publisher: 'picarchvie.vercel.app',
    formatDetection: {
        email: "baliramk505@gmail.com",
        address: false,
        telephone: false,
    },

    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
            'de-DE': '/de-DE',
        },
    },

    manifest: '/manifest.json',

    openGraph: openGraph({}),
    twitter: twitter(),

    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: 'google',
        yandex: 'yandex',
        yahoo: 'yahoo',
    },
    category: 'photography',
    tags: ['photo gallery', 'image collection', 'picture archive'],
    license: 'Creative Commons',
    location: 'India',
    year: 2023,
};
