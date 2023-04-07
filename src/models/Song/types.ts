export type Song = {
    id: string;
    type: string;
    title: string;
    subtitle: string;
    share: {
        subject: string;
        text: string;
        href: string;
        image: string;
    };
    images: {
        background: string;
        coverart: string;
        coverarthq: string;
    };
    player: {
        type: string;
        uri: string;

    };
};