import {
  ImageItem,
  NestedClassificationItem,
  PlaceInfo,
  LinkItem,
  AttractionItem,
  VenueItem,
  ApiResponse,
} from "../../types";

// Entity types
export type EventDetailsProductItem = {
  name: string;
  id: string;
  url: string;
  type: string;
};

export type EventDetailsOutletItem = {
  url: string;
  type: string;
};

export type EventDetailsAccessibility = {
  info: string;
};

export type EventDetailsTicketLimit = {
  infos: Record<string, string>;
  info: string;
};

export type EventDetailsSalesPresalesItem = {
  name: string;
  description: string;
  url: string;
  startDateTime: string;
  endDateTime: string;
};

export type EventDetailsSalesPublic = {
  startDateTime: string;
  endDateTime: string;
  startTBA: boolean;
  startTBD: boolean;
};

export type EventDetailsSales = {
  public: EventDetailsSalesPublic;
  presales?: EventDetailsSalesPresalesItem[];
};

export type EventDetailsPriceRangeItem = {
  type: "standard including fees";
  currency: "EUR";
  min: 10.0;
  max: 18.0;
};

export type EventDetails = {
  _embedded: {
    venues: VenueItem[];
  };
  dates: {
    timezone: string;
    start: {
      dateTime: string;
      localDate: string;
      localTime: string;
    };
  };

  type: string;
  distance: string;
  units: string;
  id: string;
  locale: string;
  name: string;
  description: string;
  additionalInfo: string;
  url: string;
  images: ImageItem[];
  pleaseNote: string;
  priceRanges: EventDetailsPriceRangeItem[];
  promoter: EventPromoter;
  promoters: EventPromoter[];
  outlets: EventDetailsOutletItem[];
  productType: string;
  products: EventDetailsProductItem[];
  ticketLimit: EventDetailsTicketLimit;
  classifications: NestedClassificationItem[];
  place: PlaceInfo;
  externalLinks: Record<string, string>;
  test: boolean;
  aliases: string[];
  localizedAliases: Record<string, string>;
  sales: EventDetailsSales;
  seatmap?: {
    staticURL: string;
  };
};

export type EventItemLinks = {
  self: LinkItem;
} & Partial<Record<"venues" | "attractions", LinkItem[]>>;

export type EventDateStart = {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
};

export type EventItemDatesStatus = {
  code: string;
};

export type EventItemDates = {
  start: EventDateStart;
  status: EventItemDatesStatus;
  spanMultipleDays: false;
};

export type EventPromoter = {
  id: string;
  name: string;
  description?: string;
};

export type EventItemEmbedded = {
  venues: VenueItem[];
  attractions: AttractionItem[];
};

export type EventItem = Pick<
  EventDetails,
  | "name"
  | "type"
  | "id"
  | "test"
  | "url"
  | "locale"
  | "images"
  | "sales"
  | "classifications"
  | "promoter"
  | "promoters"
  | "priceRanges"
  | "seatmap"
> & {
  dates: EventItemDates;
  _embedded: EventItemEmbedded;
  _links: EventItemLinks;
};

//Method types
export type GetAllByClassificationIdResponse = ApiResponse<{
  events: EventItem[];
}>;
export type GetAllByClassificationIdSearchVariables = {
  classificationId: string;
  countryCode: string;
};

export type GetByKeywordResponse = ApiResponse<{ events: EventItem[] }>;
export type GetByKeywordSearchVariables = {
  keyword: string;
  countryCode: string;
};

export type GetEventDetailsResponse = EventDetails;
