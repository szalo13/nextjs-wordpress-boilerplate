"use client";

import Image from "next/image";
import { memo, useState } from "react";

interface IImageWithOverlayPropTypes {
  width: number;
  height: number;
  primaryImageSrc: string;
  hoverImageSrc: string;
  alt: string;
}

const HoverImage = ({ hoverImageSrc, alt }: IImageWithOverlayPropTypes) => {
  return (
    <Image
      className="absolute w-full h-full z-10 z-20 opacity-0 hover:opacity-100"
      src={hoverImageSrc}
      alt={alt}
      width={560}
      height={400}
    />
  );
};

const MemoHoverImage = memo(HoverImage);

const ImageWithOverlay = (props: IImageWithOverlayPropTypes) => {
  const { width, height, primaryImageSrc, alt } = props;
  // Preventing from loading images when not necessary
  const [alreadyHovered, setAlreadyHovered] = useState(false);

  return (
    <div className="relative w-full h-full" style={{ width, height }}>
      <Image
        className="absolute w-full h-full z-10"
        src={primaryImageSrc}
        alt={alt}
        width={560}
        height={400}
        onMouseEnter={() => setAlreadyHovered(true)}
      />
      {alreadyHovered && <MemoHoverImage {...props} />}
    </div>
  );
};

export default memo(ImageWithOverlay);
