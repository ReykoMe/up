// Entity types

export type ClassificationItem = {
  id: string;
  name: string;
  locale: string;
  _embedded: {
    subgenres: Omit<ClassificationItem, "_embedded">[];
  };
};

// Methods types
export type GetAllClassificationsResponse = {
  segment: { _embedded: { genres: ClassificationItem[] } };
};
