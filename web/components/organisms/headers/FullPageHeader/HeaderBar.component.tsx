import { memo } from 'react'
import { HEADER } from './const';

interface IBarPropTypes {
  children: any,
}

const HeaderBar = ({
  children,
}: IBarPropTypes) => {
  return (
    <div
      className="header-top-bar w-full w-theme mx-auto flex my-4 px-theme"
      style={{ minHeight: HEADER.LOGO_HEIGHT }}
    >
      {children}
    </div>
  );
}

export default memo(HeaderBar);
