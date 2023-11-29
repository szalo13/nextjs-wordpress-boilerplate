export interface Route {
  name: string;
  path: string;
}

export const ROUTES: Record<string, Route> = {
  HOME: {
    name: "Home",
    path: "/",
  },
  CONTACT: {
    name: "Contact",
    path: "/#contact",
  },
  PRIVACY_POLICY: {
    name: "Privacy Policy",
    path: "/privacy-policy",
  },
  LOGOTYPES: {
    name: "Logotypes",
    path: "/logotypes",
  },
  BLOG: {
    name: "Blog",
    path: "/blog",
  },
};
