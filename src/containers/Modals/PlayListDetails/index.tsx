import React from 'react'
import { Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import type { PlayListDetailsRouteProps as Props } from '../../../navigator/types';

const PlayListDetails = () => {
  const { params } = useRoute<Props['route']>();
  const { id: playListId } = params;

  return (
    <Text>Playlist with id {playListId}</Text>
  )
}

export default PlayListDetails
