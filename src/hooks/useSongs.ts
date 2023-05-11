import { useState } from 'react'
import { Song, normalizeSong } from '../models/Song/types'

const SONGS_API_URL = 'https://shazam-core.p.rapidapi.com/v1/charts/world'

const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const normalizeSongs = (songs: any): Song[] => songs.map((song: any) => normalizeSong(song))

  const fetchSongs = async () => {
    setLoading(true)
    try {
      const response = await fetch(SONGS_API_URL, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
          'x-rapidapi-key': 'b1902d28e9msh9cf4e4e7699e1b0p17d643jsnceeafe5e1780' // You can try
        }
      })

      const data = await response.json()
      const normalizedSongs = normalizeSongs(data)

      setSongs(normalizedSongs)
      setError('')
    } catch (e: any) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return {
    songs,
    loading,
    error,
    fetchSongs
  }
}

export default useSongs
