import {
  ApiFetcher,
  ApiFetcherResolver,
  ApiFetcherDefaultOptions,
  ApiFetcherMethodOptions,
} from "./types.ts";

const withDefaultParams = <
  ReqQuery = Record<string, string>,
  ReqBody = Record<string, string>,
>(
  options: ApiFetcherMethodOptions<ReqQuery, ReqBody>,
  defaultOptions: ApiFetcherDefaultOptions,
  method: ApiFetcherMethodOptions["method"]
) => {
  const requestSearchParams = options?.searchParams || {};

  const newOptions: ApiFetcherMethodOptions<{ apikey: string }, ReqBody> = {
    ...options,
    baseURL: defaultOptions.baseURL,
    searchParams: { ...requestSearchParams, apikey: defaultOptions.apiKey },
    method,
  };
  return newOptions;
};

export const apiFetcher = (params: {
  resolver: ApiFetcherResolver;
  defaultOptions: ApiFetcherDefaultOptions;
}): ApiFetcher => {
  const { resolver, defaultOptions } = params;

  const get: ApiFetcher["get"] = async (options) => {
    return resolver(withDefaultParams(options, defaultOptions, "GET"));
  };

  const remove: ApiFetcher["delete"] = async (options) => {
    return resolver(withDefaultParams(options, defaultOptions, "DELETE"));
  };

  const post: ApiFetcher["post"] = async (options) => {
    return resolver(withDefaultParams(options, defaultOptions, "POST"));
  };

  return { get, post, delete: remove };
};
