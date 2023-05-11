import React, { useEffect, useMemo, useState } from 'react'
import SongCard from './SongCard'
import { Audio } from 'expo-av'
import { Container } from './styles'
import { Song } from '../../../../models/Song/types'
import { Text } from '../../../../components'
import { ActivityIndicator } from 'react-native'

const SONGS_API_URL = 'https://shazam-core.p.rapidapi.com/v1/charts/world'

const SongList = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [sound, setSound] = useState<Audio.Sound | null>(null)

  const playAudio = async (uri: string) => {
    if (sound !== null) {
      await sound.stopAsync()
      await sound.unloadAsync()
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri })
    setSound(newSound)
    await newSound.playAsync()
  }

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true)
      try {
        const response = await fetch(SONGS_API_URL, {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
            'x-rapidapi-key': 'b1902d28e9msh9cf4e4e7699e1b0p17d643jsnceeafe5e1780'
          }
        })

        const data = await response.json()

        setSongs(data)
        setError(false)
      } catch (e: any) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchSongs()
  }, [])

  const placeholder = useMemo(() => {
    if (loading) return <ActivityIndicator />
    if (error) return <Text size={32} weight={400}>❌ Ops</Text>

    return null
  }, [loading, error])

  const handleRenderSongCards = () => {
    return songs.map((song: any) => ( // TODO: remove any
      <SongCard
        key={song.key}
        song={song}
        playAudio={async () => await playAudio(song.hub.actions[1].uri)}
      />
    ))
  }
  return (
    <Container>
      {placeholder ?? handleRenderSongCards()}
    </Container>
  )
}

export default SongList
