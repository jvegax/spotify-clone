import { Song } from "./types";

export const MOCK_SONG: Song = {
    id: "1",
    type: "MUSIC",
    title: "The Astronaut",
    subtitle: "JIN",
    share: {
        subject: "The Astronaut - JIN",
        text: "I used Shazam to discover The Astronaut by JIN.",
        href: "https://www.shazam.com/track/636972694/the-astronaut",
        image: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
    },
    images: {
        background: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
        coverart: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
        coverarthq: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
    },
    player: {
        type: "APPLEMUSIC",
        uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a",
    },
}

