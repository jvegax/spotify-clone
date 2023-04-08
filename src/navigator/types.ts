/* eslint-disable */
import { ParamListBase } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

interface DetailScreenProps {
  id: string
}

export interface ScreensParams extends ParamListBase {
  Home: undefined
  Search: undefined
  Library: undefined
  PlayListDetails: DetailScreenProps
}

export type PlayListDetailsRouteProps = NativeStackScreenProps<
ScreensParams,
'PlayListDetails'
>

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>

export interface Props {}
