import { memo } from "react";
import ActiveHeaderComponent, {
  IActiveHeaderPropTypes,
} from "./ActiveHeader.component";
import HeaderBarComponent from "./HeaderBar.component";
import Image from "next/image";
import { COMPANY_NAME, LOGO_MAIN_DARK } from "../../../../app/const";
import { HEADER } from "./const";
import classNames from "classnames";
import styles from "./FullPageHeader.module.css";

export interface IFullPageHeaderPropTypes extends IActiveHeaderPropTypes {
  showLogo?: boolean;
  positioned?: "absolute" | "static";
}

const Header = ({
  showLogo = true,
  color = "black",
  positioned = "static",
}: IFullPageHeaderPropTypes) => {
  return (
    <header
      className={classNames([
        styles["header-static-space"],
        "header z-40 top-0 top-0 left-0 w-full theme-padding",
        { absolute: positioned === "absolute" },
      ])}
    >
      <HeaderBarComponent>
        <div className="w-full flex items-center justify-between">
          <div className="block">
            {showLogo && (
              <a href="/">
                <Image
                  src={LOGO_MAIN_DARK}
                  alt={`${COMPANY_NAME} logotype`}
                  width={HEADER.LOGO_HEIGHT}
                  height={HEADER.LOGO_HEIGHT}
                />
              </a>
            )}
          </div>
          <div className="flex items-center justify-end">
            <ActiveHeaderComponent color={color} />
          </div>
        </div>
      </HeaderBarComponent>
    </header>
  );
};

export default memo(Header);
