export function fetcher(...args: [RequestInfo | URL, RequestInit]) {
  return fetch(...args).then((res) => res.json());
}
