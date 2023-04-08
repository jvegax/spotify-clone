export enum SearchField {
  Music = 'Music',
  Podcast = 'Podcast',
  Artist = 'Artist',
  Album = 'Album',
  Playlist = 'Playlist',
  Song = 'Song',
  Audiobook = 'Audiobook',
}

export interface Props {
  type: SearchField
}
