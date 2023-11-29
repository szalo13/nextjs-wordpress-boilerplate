import classNames from "classnames";
import { Playfair_Display } from "next/font/google";
import { memo } from "react";

interface IBlogContentRootLayoutPropTypes {
  children: React.ReactNode;
}

const plaifairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "900"],
});

const BlogContentRootLayout = ({
  children,
}: IBlogContentRootLayoutPropTypes) => {
  return (
    <div
      className={classNames(["blog-root-layout", plaifairDisplay.className])}
    >
      {children}
    </div>
  );
};

export default memo(BlogContentRootLayout);
