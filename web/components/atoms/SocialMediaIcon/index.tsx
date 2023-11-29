"use client";

import { memo } from "react";
import WhatsApp from "./icons/whatsapp.svg";
import Facebook from "./icons/facebook.svg";
import Behance from "./icons/behance.svg";
import Dev from "./icons/dev.svg";
import Discord from "./icons/discord.svg";
import Figma from "./icons/figma.svg";
import Github from "./icons/github.svg";
import Gitlab from "./icons/gitlab.svg";
import Instagram from "./icons/instagram.svg";
import Linkedin from "./icons/linkedin.svg";
import Pinterest from "./icons/pinterest.svg";
import Snapchat from "./icons/snapchat.svg";
import Telegram from "./icons/telegram.svg";
import Tiktok from "./icons/tiktok.svg";
import Twitch from "./icons/twitch.svg";
import Twitter from "./icons/twitter.svg";
import Youtube from "./icons/youtube.svg";
import { SocialIconType } from "./const";

interface IindexPropTypes {
  type: SocialIconType;
  size?: number;
}

const ICON_MAP = {
  [SocialIconType.Facebook]: Facebook,
  [SocialIconType.Instagram]: Instagram,
  [SocialIconType.Linkedin]: Linkedin,
  [SocialIconType.Twitter]: Twitter,
  [SocialIconType.Pinterest]: Pinterest,
  [SocialIconType.Telegram]: Telegram,
  [SocialIconType.WhatsApp]: WhatsApp,
  [SocialIconType.Twitch]: Twitch,
  [SocialIconType.Tiktok]: Tiktok,
  [SocialIconType.Snapchat]: Snapchat,
  [SocialIconType.Youtube]: Youtube,
  [SocialIconType.Behance]: Behance,
  [SocialIconType.Dev]: Dev,
  [SocialIconType.Discord]: Discord,
  [SocialIconType.Figma]: Figma,
  [SocialIconType.Github]: Github,
  [SocialIconType.Gitlab]: Gitlab,
};

const SocialIcon = ({ type, size = 30 }: IindexPropTypes) => {
  const Icon = ICON_MAP[type] ? ICON_MAP[type] : null;

  return (
    <div className="social-icon">
      <Icon width={size} height={size} />
    </div>
  );
};

export default memo(SocialIcon);
