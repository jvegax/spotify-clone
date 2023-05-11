export interface Song {
  id: string
  type: string
  title: string
  author: string
  image: string
  uri: string
}

const DEFAULT_IMG = 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg'

const DEFAULT_URI = 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a'

export const normalizeSong = (song: any): Song => {
  return {
    id: song.key,
    type: song.type ?? 'Song',
    title: song.title ?? 'Unknown',
    image: song.share.image ?? DEFAULT_IMG,
    author: song.artists[0].alias ?? 'Unknown',
    uri: song.hub.actions[1].uri ?? DEFAULT_URI
  }
}
