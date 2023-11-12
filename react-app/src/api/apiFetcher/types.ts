export type ApiFetcherResponse<Res = unknown> = {
  data: Res;
  status: number;
};

export type ApiFetcherDefaultOptions = {
  baseURL: string;
  apiKey: string;
};

export type ApiFetcherMethodOptions<
  ReqQuery = Record<string, string>,
  ReqBody = Record<string, string>,
> = {
  url: string;
  baseURL?: string;
  headers?: string;
  searchParams?: ReqQuery;
  body?: ReqBody;
  method?: "GET" | "DELETE" | "POST";
};

export type ApiFetcherResolver = <
  ResData,
  ReqQuery = Record<string, string>,
  ReqBody = Record<string, string>,
>(
  options: ApiFetcherMethodOptions<ReqQuery, ReqBody>
) => Promise<ApiFetcherResponse<ResData>>;

export type ApiFetcher = {
  get: <ResData, ReqQuery = Record<string, string>>(
    options: ApiFetcherMethodOptions<ReqQuery>
  ) => Promise<ApiFetcherResponse<ResData>>;

  delete: <ResData, ReqQuery = Record<string, string>>(
    options: ApiFetcherMethodOptions<ReqQuery>
  ) => Promise<ApiFetcherResponse<ResData>>;

  post: <
    ResData,
    ReqQuery = Record<string, string>,
    ReqBody = Record<string, string>,
  >(
    options: ApiFetcherMethodOptions<ReqQuery, ReqBody>
  ) => Promise<ApiFetcherResponse<ResData>>;
};
