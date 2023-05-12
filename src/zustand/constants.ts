export interface Song {
  id: string
  type: string
  title: string
  author: string
  image: string
  uri: string
}

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    type: 'Song',
    title: 'Miley Cyrus - Party In The USA',
    author: 'Miley Cyrus',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/400x400cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3e/57/ef/3e57efa9-0572-82f5-0e92-ea5fef33982a/mzaf_14012893767887586921.plus.aac.ep.m4a'
  },
  {
    id: '2',
    type: 'Song',
    title: 'Calm Down - Rena',
    author: 'Rena',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/0e/bc/cb/0ebccb7c-af52-7962-7583-96d95e677f6d/718012c7-9b6a-4153-9334-54f84d2935e3_ami-identity-9e987f39368f9dd37966c136969aac14-2023-02-11T08-30-18.286Z_cropped.png/800x800cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a'
  },
  {
    id: '3',
    type: 'Song',
    title: 'Another Love',
    author: 'Tom Odell',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/ed/db/b0/eddbb0c4-e2e4-84ee-d6d5-10d31d8dff93/886443847828.jpg/400x400cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/01/7b/02/017b02d4-72fa-c4b6-23f6-07fcab8856b1/mzaf_8021395328775693245.plus.aac.ep.m4a'
  },
  {
    id: '4',
    type: 'Song',
    title: 'Miley Cyrus - Party In The USA',
    author: 'Miley Cyrus',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9e/80/c7/9e80c757-6994-4338-9e79-b92d5f75f788/196589561725.jpg/400x400cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3e/57/ef/3e57efa9-0572-82f5-0e92-ea5fef33982a/mzaf_14012893767887586921.plus.aac.ep.m4a'
  },
  {
    id: '5',
    type: 'Song',
    title: 'Calm Down - Rena',
    author: 'Rena',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/0e/bc/cb/0ebccb7c-af52-7962-7583-96d95e677f6d/718012c7-9b6a-4153-9334-54f84d2935e3_ami-identity-9e987f39368f9dd37966c136969aac14-2023-02-11T08-30-18.286Z_cropped.png/800x800cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a'
  },
  {
    id: '6',
    type: 'Song',
    title: 'Another Love',
    author: 'Tom Odell',
    image: 'https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/ed/db/b0/eddbb0c4-e2e4-84ee-d6d5-10d31d8dff93/886443847828.jpg/400x400cc.jpg',
    uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/01/7b/02/017b02d4-72fa-c4b6-23f6-07fcab8856b1/mzaf_8021395328775693245.plus.aac.ep.m4a'
  }

]
