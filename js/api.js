const BASE_URL = "https://api.npoint.io/";
export function fetchTransaction() {
  return fetch(BASE_URL + "38edf0c5f3eb9ac768bd").then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
