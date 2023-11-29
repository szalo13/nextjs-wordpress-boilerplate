import { memo } from "react";
import MainLayout from "../layouts/MainLayout";
import NotFoundComponent from "../components/organisms/sections/not-found/NotFound.component";

interface I404PropTypes {}

const Page404 = ({}: I404PropTypes) => {
  return (
    <MainLayout>
      <NotFoundComponent
        title="We lost this page"
        description="We searched high and low but couldn't find what you're looking for. Let's find a better place for you to go."
        buttonLabel="Go to homepage"
        redirectUrl="/"
      />
    </MainLayout>
  );
};

export default memo(Page404);
