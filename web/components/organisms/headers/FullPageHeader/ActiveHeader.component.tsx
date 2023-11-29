"use client";

import { memo, useState } from "react";
import { HEADER } from "./const";
import {
  COMPANY_NAME,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  LOGO_MAIN_DARK,
} from "../../../../app/const";
import MenuIcon from "./icons/menu_icon.svg";
import CloseIcon from "./icons/menu_close_icon.svg";
import styles from "./FullPageHeader.module.css";
import SocialMediaIcon from "../../../atoms/SocialMediaIcon";
import { SocialIconType } from "../../../atoms/SocialMediaIcon/const";
import { buttonClasses } from "../../../atoms/buttons/Button";
import Image from "next/image";
import HeaderBarComponent from "./HeaderBar.component";
import classNames from "classnames";

const SOCIAL_MEDIA_ICONS = [
  { url: FACEBOOK_URL, type: SocialIconType.Facebook },
  { url: INSTAGRAM_URL, type: SocialIconType.Instagram },
  { url: LINKEDIN_URL, type: SocialIconType.Linkedin },
];

export interface IActiveHeaderPropTypes {
  color?: "white" | "black";
}

const Logotype = () => (
  <a href="/">
    <Image
      src={LOGO_MAIN_DARK}
      alt={`${COMPANY_NAME} logotype`}
      width={HEADER.LOGO_HEIGHT}
      height={HEADER.LOGO_HEIGHT}
    />
  </a>
);

const HeaderActive = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="header-active flex flex-col justify-between z-50 fixed bg-secondary-500 top-0 top-0 left-0 w-full h-screen theme-padding">
      <HeaderBarComponent>
        <div className="w-full flex align-items-center justify-between">
          <Logotype />
          <div className="cursor-pointer text-white flex items-center">
            <CloseIcon onClick={onClose} />
          </div>
        </div>
      </HeaderBarComponent>
      <div className="max-w-xl mx-auto">
        <ul className="header-nav-items-wrapper text-lg font-black">
          {HEADER.HEADER_ITEMS.map((item, index) => (
            <li key={index}>
              <a
                onClick={onClose}
                className={styles["active-nav-link"]}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <HeaderBarComponent>
        <div className="w-full flex flex-col md:flex-row align-items-center justify-between">
          <div className="social-media-icons w-full justify-center text-white flex items-center md:justify-start md:w-fit">
            {SOCIAL_MEDIA_ICONS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="social-media-icon flex items-center mr-4"
              >
                <SocialMediaIcon type={item.type} size={30} />
              </a>
            ))}
          </div>
          <div className="contact flex items-center">
            <span className="w-fit text-semibold text-white hidden md:flex align-items-center">
              Tell us your idea
            </span>
            <span className={styles.separator}></span>
            <div className="flex justify-center w-full md:w-fit pt-4 md:pt-0">
              <a
                onClick={onClose}
                href={HEADER.CONTACT_HREF}
                className={classNames([buttonClasses({}), "w-full md:w-fit"])}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </HeaderBarComponent>
    </div>
  );
};

const ActiveHeader = ({ color = "black" }: IActiveHeaderPropTypes) => {
  const [open, setOpen] = useState(false);

  if (open) return <HeaderActive onClose={() => setOpen(false)} />;

  return (
    <>
      <div
        className={classNames([
          "cursor-pointer flex items-center",
          color === "white" ? "text-white" : "text-black",
        ])}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </div>
    </>
  );
};

export default memo(ActiveHeader);
