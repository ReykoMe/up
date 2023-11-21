import { ClassificationItem } from "@api/entities/classifications/types.ts";

export type ApiPaginationPage = {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
};

export type ApiPagination = {
  page: ApiPaginationPage;
};

export type ApiNavigationLinks = {
  self: LinkItem;
  first?: LinkItem;
  last?: LinkItem;
  next?: LinkItem;
};

export type ApiNavigation = {
  _links: ApiNavigationLinks;
};

export type ApiResponse<T> = ApiPagination &
  ApiNavigation & {
    _embedded?: T;
  };

export type NestedClassificationItem = {
  primary: boolean;
  family: boolean;
} & Pick<ClassificationItem, "id" | "name">;

export type ImageItem = {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
  attribution?: string;
};

export type LinkItem = {
  href: string;
};

export type LocationCoordinates = {
  latitude: string;
  longitude: string;
};

export type UpcomingEvents = {
  "mfx-fi": number;
  _total: number;
  _filtered: number;
};

export type PlaceInfo = {
  area: {
    name: string;
  };
  address: {
    line1: string;
    line2?: string;
    line3?: string;
  };
  city: {
    name: string;
  };
  state: {
    stateCode: number;
    name: string;
  };
  country: {
    countryCode: string;
    name: string;
  };
  postalCode: string;
  location: LocationCoordinates;
};

export type AttractionItemLinks = Record<"self", LinkItem>;

export type AttractionItem = {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images: ImageItem[];
  classifications: NestedClassificationItem[];
  upcomingEvents: UpcomingEvents;
  _links: AttractionItemLinks;
};

export type VenueItemCity = {
  name: string;
};

export type VenueItemCountry = {
  name: string;
  countryCode: string;
};

export type VenueItemAddress = {
  line1: string;
};

export type VenueItemLinks = Record<"self", LinkItem>;

export type VenueItem = {
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  timezone: string;
  name: string;
  city: VenueItemCity;
  country: VenueItemCountry;
  address: VenueItemAddress;
  location: LocationCoordinates;
  upcomingEvents: UpcomingEvents;
  _links: VenueItemLinks;
};
