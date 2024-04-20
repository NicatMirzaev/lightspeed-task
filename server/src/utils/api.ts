import { ProductResponse } from "../types";

const URL = process.env.ECWID_API_URL! + process.env.STORE_ID!;

export const getRecentlyUpdatedProducts: (
  count?: string
) => Promise<ProductResponse> = (count = "100") => {
  return fetch(
    URL +
      "/products?" +
      new URLSearchParams({
        responseFields: "count,items(id,price,sku,name,originalImage)",
        enabled: "true",
        limit: isNaN(Number(count)) || +count > 100 ? "100" : count,
        sortBy: "UPDATED_TIME_DESC",
      }),
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STORE_TOKEN}`,
      },
    }
  ).then((response) => response.json());
};
