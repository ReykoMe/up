import { API_KEY, BASE_URL } from "../api-config.ts";
import { apiFetcher } from "../apiFetcher";
import { fetchResolver } from "../apiFetcher/resolvers/fetch-resolver.ts";

export const fetcher = apiFetcher({
  resolver: fetchResolver,
  defaultOptions: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
});
