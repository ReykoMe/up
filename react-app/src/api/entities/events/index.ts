import { fetcher } from "../fetcher";
import {
  GetAllByClassificationIdResponse,
  GetAllByClassificationIdSearchVariables,
  GetByKeywordResponse,
  GetByKeywordSearchVariables,
  GetEventDetailsResponse,
} from "./types.ts";
import { ALL_EVENTS_ID } from "@store/entities/events/constants.ts";

export const getAllByClassificationId = async (
  classificationId = ALL_EVENTS_ID
) => {
  return fetcher.get<
    GetAllByClassificationIdResponse,
    GetAllByClassificationIdSearchVariables
  >({
    url: `/events`,
    searchParams: {
      classificationId,
      countryCode: "FI",
    },
  });
};

export const getByKeyword = async (keyword: string) => {
  return fetcher.get<GetByKeywordResponse, GetByKeywordSearchVariables>({
    url: `/events`,
    searchParams: {
      keyword,
      countryCode: "FI",
    },
  });
};

export const getEventDetails = async (eventId: string) => {
  return fetcher.get<GetEventDetailsResponse>({ url: `/events/${eventId}` });
};
