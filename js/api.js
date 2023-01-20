const BASE_URL = "https://api.npoint.io/";
export async function fetchTransaction() {
  const response = await fetch(BASE_URL + "38edf0c5f3eb9ac768bd");
  if (response.ok) {
    const initialInfo = response.json();
    return initialInfo;
  }
  throw new Error(response.statusText);
}


//  received a request - json