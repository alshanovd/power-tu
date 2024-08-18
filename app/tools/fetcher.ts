export const apiUrl =
  "https://ec2-3-27-170-95.ap-southeast-2.compute.amazonaws.com:8000";

export function fetcher(...args: [RequestInfo | URL, RequestInit]) {
  return fetch(...args).then((res) => res.json());
}

export const SWRparams = {
  refreshWhenOffline: false,
  revalidateOnFocus: false,
  // revalidateOnMount: false,
  revalidateOnReconnect: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
};
