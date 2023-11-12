import { ApiFetcherResolver } from "../types";

export const fetchResolver: ApiFetcherResolver = async (options) => {
  let requestUrl = options?.baseURL || "http://localhost:3000";

  if (options.url) {
    requestUrl = `${requestUrl}${options.url}`;
  }

  if (options.searchParams) {
    const searchParams = new URLSearchParams(options.searchParams);
    requestUrl = `${requestUrl}?${searchParams}`;
  }
  const requestsWithBody: RequestInit["method"][] = ["POST"];

  const requestParams: RequestInit = {
    method: options.method || "GET",
  };

  const shouldAttachBody =
    options?.body && requestsWithBody.includes(requestParams.method);

  if (shouldAttachBody) {
    requestParams.body = JSON.stringify(options.body);
  }

  const response = await fetch(requestUrl, requestParams);
  const data = await response.json();
  return { data, status: response.status };
};
