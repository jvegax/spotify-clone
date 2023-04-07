import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

type DetailScreenProps = {
  id: string;
};

export type ScreensParams = {
  Home: undefined;

  Search: undefined;

  Library: undefined;
  PlayListDetails: DetailScreenProps;
};

export type PlayListDetailsRouteProps = NativeStackScreenProps<
  ScreensParams,
  'PlayListDetails'
>;

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;

export type Props = {};
