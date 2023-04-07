import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FilterField } from 'components/Filter/FilterItem/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ScreensParams {}
  }
}

type DetailScreenProps = {
  id: string;
};

type FilterDetailsProps = {
  title: FilterField;
};

export type ScreensParams = {
  Home: undefined;
  CharacterDetails: DetailScreenProps;
  CharacterFilter: undefined;
  CharacterFilterDetails: FilterDetailsProps;

  Library: undefined;
  EpisodeDetails: DetailScreenProps;
  EpisodeFilter: undefined;
  EpisodeFilterDetails: FilterDetailsProps;

  Search: undefined;
  LocationDetails: DetailScreenProps;
  LocationFilter: undefined;
  LocationFilterDetails: FilterDetailsProps;
};

export type CharacterDetailsRouteProps = NativeStackScreenProps<
  ScreensParams,
  'CharacterDetails'
>;

export type CharacterFilterDetails = NativeStackScreenProps<
  ScreensParams,
  'CharacterFilterDetails'
>;

export type LocationDetailsRouteProps = NativeStackScreenProps<
  ScreensParams,
  'LocationDetails'
>;

export type LocationFilterDetails = NativeStackScreenProps<
  ScreensParams,
  'LocationFilterDetails'
>;

export type EpisodeDetailsRouteProps = NativeStackScreenProps<
  ScreensParams,
  'EpisodeDetails'
>;

export type EpisodeFilterDetails = NativeStackScreenProps<
  ScreensParams,
  'EpisodeFilterDetails'
>;

export type MainStackScreenProps<ScreenName extends keyof ScreensParams> =
  NativeStackScreenProps<ScreensParams, ScreenName>;

export type Props = {};
