import { fetcher } from "../fetcher";
import { GetAllClassificationsResponse } from "@api/entities/classifications/types.ts";

export const getAllClassifications = async () => {
  return fetcher.get<GetAllClassificationsResponse>({
    url: "/classifications/KZFzniwnSyZfZ7v7nJ",
  });
};
