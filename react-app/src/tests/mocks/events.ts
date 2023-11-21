import { EventDetails, EventItem } from "@root/src/api/entities/events/types";

export const mockEventDetail: EventDetails = {
  _embedded: {
    venues: [
      {
        type: "exampleVenueType",
        id: "venueId123",
        test: false,
        url: "https://example.com/venue",
        locale: "en_US",
        timezone: "UTC",
        name: "Example Venue",
        city: {
          name: "CityName",
        },
        country: {
          name: "CountryName",
          countryCode: "CC",
        },
        address: {
          line1: "123 Example St",
        },
        location: {
          latitude: "12.3456",
          longitude: "-78.9101",
        },
        upcomingEvents: {
          "mfx-fi": 100,
          _total: 150,
          _filtered: 50,
        },
        _links: {
          self: {
            href: "https://example.com/venue/self",
          },
        },
      },
      // Additional venues if needed
    ],
  },

  dates: {
    timezone: "UTC",
    start: {
      dateTime: "2023-01-01T12:00:00Z",
      localDate: "2023-01-01",
      localTime: "12:00 PM",
    },
  },
  type: "exampleEventType",
  distance: "10 km",
  units: "kilometers",
  id: "eventId123",
  locale: "en_US",
  name: "Example Event",
  description: "This is an example event description.",
  additionalInfo: "Additional information about the event.",
  url: "https://example.com/event",
  images: [
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
    // Additional images if needed
  ],
  pleaseNote: "Please note that...",
  priceRanges: [
    {
      type: "standard including fees",
      currency: "EUR",
      min: 10.0,
      max: 18.0,
    },
    // Additional price ranges if needed
  ],
  promoter: {
    id: "promoterId123",
    name: "Example Promoter",
    description: "Event promoter description.",
  },
  promoters: [
    {
      id: "promoterId456",
      name: "Additional Promoter",
      description: "Additional promoter description.",
    },
    // Additional promoters if needed
  ],
  outlets: [
    {
      url: "https://example.com/outlet",
      type: "exampleOutletType",
    },
    // Additional outlets if needed
  ],
  productType: "exampleProductType",
  products: [
    {
      name: "Product Name",
      id: "productId123",
      url: "https://example.com/product",
      type: "exampleProductType",
    },
    // Additional products if needed
  ],
  ticketLimit: {
    infos: {
      category1: "10 tickets per person",
      category2: "5 tickets per person",
    },
    info: "Overall ticket limit information.",
  },
  classifications: [
    {
      primary: true,
      family: false,
      id: "classificationId123",
      name: "Primary Classification",
    },
    // Additional classifications if needed
  ],
  place: {
    area: {
      name: "Example Area",
    },
    address: {
      line1: "123 Example St",
      line2: "Suite 456",
      line3: "Floor 7",
    },
    city: {
      name: "CityName",
    },
    state: {
      stateCode: 42,
      name: "Example State",
    },
    country: {
      countryCode: "CC",
      name: "CountryName",
    },
    postalCode: "12345",
    location: {
      latitude: "12.3456",
      longitude: "-78.9101",
    },
  },
  externalLinks: {
    facebook: "https://www.facebook.com/example-event",
    twitter: "https://twitter.com/example-event",
  },
  test: false,
  aliases: ["Alias1", "Alias2"],
  localizedAliases: {
    en_US: "English Alias",
    es_ES: "Spanish Alias",
  },
  sales: {
    public: {
      startDateTime: "2023-01-01T10:00:00Z",
      endDateTime: "2023-01-05T18:00:00Z",
      startTBA: false,
      startTBD: false,
    },
    presales: [
      {
        name: "Presale 1",
        description: "Presale description 1",
        url: "https://example.com/presale1",
        startDateTime: "2023-01-01T08:00:00Z",
        endDateTime: "2023-01-01T22:00:00Z",
      },
      // Additional presales if needed
    ],
  },
  seatmap: {
    staticURL: "https://example.com/seatmap",
  },
};

export const mockEventItem: EventItem = {
  name: "Example Event",
  type: "exampleEventType",
  id: "eventId123",
  test: false,
  url: "https://example.com/event",
  locale: "en_US",
  images: [
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
    {
      ratio: "16:9",
      url: "https://example.com/image.jpg",
      width: 1920,
      height: 1080,
      fallback: false,
      attribution: "Photo by John Doe",
    },
  ],
  sales: {
    public: {
      startDateTime: "2023-01-01T10:00:00Z",
      endDateTime: "2023-01-05T18:00:00Z",
      startTBA: false,
      startTBD: false,
    },
    presales: [
      {
        name: "Presale 1",
        description: "Presale description 1",
        url: "https://example.com/presale1",
        startDateTime: "2023-01-01T08:00:00Z",
        endDateTime: "2023-01-01T22:00:00Z",
      },
    ],
  },
  classifications: [
    {
      primary: true,
      family: false,
      id: "classificationId123",
      name: "Primary Classification",
    },
  ],
  promoter: {
    id: "promoterId123",
    name: "Example Promoter",
    description: "Event promoter description.",
  },
  promoters: [
    {
      id: "promoterId456",
      name: "Additional Promoter",
      description: "Additional promoter description.",
    },
    // Additional promoters if needed
  ],
  priceRanges: [
    {
      type: "standard including fees",
      currency: "EUR",
      min: 10.0,
      max: 18.0,
    },
    // Additional price ranges if needed
  ],
  seatmap: {
    staticURL: "https://example.com/seatmap",
  },
  dates: {
    start: {
      noSpecificTime: false,
      timeTBA: false,
      dateTBA: false,
      dateTBD: false,
      dateTime: "2023-01-01T12:00:00Z",
      localDate: "2023-01-01",
      localTime: "12:00 PM",
    },
    status: {
      code: "exampleStatusCode",
    },
    spanMultipleDays: false,
  },
  _embedded: {
    venues: [
      {
        type: "exampleVenueType",
        id: "venueId123",
        test: false,
        url: "https://example.com/venue",
        locale: "en_US",
        timezone: "UTC",
        name: "Example Venue",
        city: {
          name: "CityName",
        },
        country: {
          name: "CountryName",
          countryCode: "CC",
        },
        address: {
          line1: "123 Example St",
        },
        location: {
          latitude: "12.3456",
          longitude: "-78.9101",
        },
        upcomingEvents: {
          "mfx-fi": 100,
          _total: 150,
          _filtered: 50,
        },
        _links: {
          self: {
            href: "https://example.com/venue/self",
          },
        },
      },
      // Additional venues if needed
    ],
    attractions: [
      {
        name: "AttractionName",
        type: "AttractionType",
        id: "attractionId123",
        test: false,
        url: "https://example.com/attraction",
        locale: "en_US",
        images: [
          {
            ratio: "16:9",
            url: "https://example.com/attraction-image.jpg",
            width: 1920,
            height: 1080,
            fallback: false,
            attribution: "Photo by Jane Doe",
          },
          // Additional images if needed
        ],
        classifications: [
          {
            primary: true,
            family: false,
            id: "attractionClassificationId123",
            name: "Attraction Primary Classification",
          },
          // Additional classifications if needed
        ],
        upcomingEvents: {
          "mfx-fi": 50,
          _total: 75,
          _filtered: 25,
        },
        _links: {
          self: {
            href: "https://example.com/attraction/self",
          },
        },
      },
      // Additional attractions if needed
    ],
  },
  _links: {
    self: {
      href: "https://example.com/event/self",
    },
    venues: [
      {
        href: "https://example.com/event/venues/0",
      },
      // Additional venue links if needed
    ],
    attractions: [
      {
        href: "https://example.com/event/attractions/0",
      },
      // Additional attraction links if needed
    ],
  },
};
