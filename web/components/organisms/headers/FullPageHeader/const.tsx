import { HOME_PAGE_SECTIONS_IDS } from "../../../../app/const";
import { BLOG_POSTS_ROUTE } from "../../../../modules/blog/routes";

const CONTACT_HREF = `/#${HOME_PAGE_SECTIONS_IDS.CONTACT}`;
const LOGO_HEIGHT = 50;
const HEADER_ITEMS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: `#${HOME_PAGE_SECTIONS_IDS.ABOUT_US}`,
  },
  {
    name: "Projects",
    href: `#${HOME_PAGE_SECTIONS_IDS.PROJECTS}`,
  },
  {
    name: "Contact",
    href: CONTACT_HREF,
  },
  {
    name: "Blog",
    href: BLOG_POSTS_ROUTE("1"),
  },
];

export const HEADER = {
  LOGO_HEIGHT,
  HEADER_ITEMS,
  CONTACT_HREF,
};