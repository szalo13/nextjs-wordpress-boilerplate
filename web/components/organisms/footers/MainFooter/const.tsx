import {
  COMPANY_EMAIL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from "../../../../app/const";
import { ROUTES } from "../../../../app/routes";
import { SocialIconType } from "../../../atoms/SocialMediaIcon/const";

export const FOOTER = {
  nav: [ROUTES.HOME, ROUTES.CONTACT, ROUTES.PRIVACY_POLICY, ROUTES.BLOG],
  experts: {
    sectionName: "Experts in",
    items: [
      { name: "Strategy" },
      { name: "Design" },
      { name: "Development" },
      { name: "Automation" },
      { name: "Advertising" },
    ],
  },
  office: {
    sectionName: "Office",
    descriptionComponent: (
      <>
        We are Digital Nomads working all over the world. Our current office is
        located in <b>Wrocław, Poland</b>
      </>
    ),
  },
  email: COMPANY_EMAIL,
  social: {
    sectionName: "Follow",
    items: [
      {
        name: "LinkedIn",
        href: LINKEDIN_URL,
        icon: SocialIconType.Linkedin,
      },
      {
        name: "Facebook",
        href: FACEBOOK_URL,
        icon: SocialIconType.Facebook,
      },
      {
        name: "WhatsApp",
        href: WHATSAPP_URL,
        icon: SocialIconType.WhatsApp,
      },
      {
        name: "Telegram",
        href: TELEGRAM_URL,
        icon: SocialIconType.Telegram,
      },
      {
        name: "Instagram",
        href: INSTAGRAM_URL,
        icon: SocialIconType.Instagram,
      },
    ],
  },
};
