import { Image } from 'expo-image'
import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
  bottom: 72px;
  left: 0;
  z-index: 1;
  
  width: 95%;
  height: 60px;

  border-radius: 8px;
  padding: 8px;
  margin-left: 10px;

  background-color: #6e663f;
`

export const Left = styled.View`
  width: 15%;
  height: 100%;
`

export const SongImage = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 4px;
`

export const Center = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;

  width: 60%;
  height: 100%;

  gap: 2px;
  padding-left: 8px;

  overflow: hidden;
`

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 25%;
  height: 100%;

  padding-right: 10px;
`
