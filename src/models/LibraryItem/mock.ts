/* eslint-disable no-unused-vars */
export enum LibraryItemType {
    List = 'List',
    Album = 'Album',
    Podcast = 'Podcast',
    Playlist = 'Playlist',
    Artist = 'Artist',
    Downloads = 'Downloads',
}

export type LibraryItem = {
    id: string;
    image: string;
    title: string;
    type: LibraryItemType;
    author: string;
}

export const MOCK_LIBRARY_ITEM: LibraryItem = {
  id: '1',
  image: 'https://i.scdn.co/image/ab67706f00000003a0b5b1b2c1b5b1b2c1b5b1b2',
  title: 'Éxitos de la semana',
  type: LibraryItemType.List,
  author: 'Spotify'
}
