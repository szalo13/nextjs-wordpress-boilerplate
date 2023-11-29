import env from "../../../env";

const { WORDPRESS_URL } = env;
const WORDPRESS_GRAPHQL_ENDPOINT = `${WORDPRESS_URL}?graphql`;

if (!WORDPRESS_URL) {
  throw new Error(
    "The WordPress URL is missing. Please check your environment variables."
  );
}

interface IGraphQlApiOptions {
  variables: any;
}

export const fetchGraphQlApi = async (
  query: string,
  { variables }: IGraphQlApiOptions
) => {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(WORDPRESS_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
};
