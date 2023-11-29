import WPApi from "wpapi";
import env from "../../../env";

const { WORDPRESS_URL } = env;
if (!WORDPRESS_URL) {
  throw new Error(
    "The WORDPRESS_URL is missing. Please check your environment variables."
  );
}

const wpApi = new WPApi({
  endpoint: `${WORDPRESS_URL}/wp-json`,
}) as WPApi;

export default wpApi;
