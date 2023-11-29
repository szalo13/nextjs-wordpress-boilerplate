import Image from "next/image";
import { memo } from "react";

export interface IAvatarPropTypes {
  url: string;
  alt: string;
  size?: number;
}

const Avatar = ({ url, alt, size = 70 }: IAvatarPropTypes) => {
  return (
    <Image
      width={size}
      height={80}
      className="rounded-full"
      src={url}
      alt={alt}
    />
  );
};

export default memo(Avatar);
