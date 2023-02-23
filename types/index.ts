import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IconMap = {
  [key: string]: IconDefinition;
};

export interface Coords {
  longitude: Number;
  latitude: Number;
}

export interface ActivityDetail {
  activityDescription: string;
  activityName: string;
  locationName: string;
  locationType: string;
  vibe: string;
  coords?: Coords;
}

export interface ApiResponse {
  data: ActivityDetail;
}
