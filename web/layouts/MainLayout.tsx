import { memo } from "react";
import MainFooter from "../components/organisms/footers/MainFooter";
import "../app/globals.css";
import FullPageHeader, {
  IFullPageHeaderPropTypes,
} from "../components/organisms/headers/FullPageHeader/FullPageHeader";

interface IMainLayoutPropTypes {
  children: any;
  headerProps?: IFullPageHeaderPropTypes;
}

const MainLayout = ({ children, headerProps }: IMainLayoutPropTypes) => {
  return (
    <>
      <main className="lg:min-h-screen">
        <FullPageHeader {...headerProps} />
        {children}
        <MainFooter />
      </main>
    </>
  );
};

export default memo(MainLayout);
