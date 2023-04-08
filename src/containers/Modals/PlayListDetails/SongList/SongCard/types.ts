
export interface Props {
  song: any // TODO: remove any replace with Song
  playAudio: () => Promise<void>
}
