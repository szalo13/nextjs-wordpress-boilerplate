import Image from "next/image";
import { memo } from "react";
import AboutUsImage from "./AboutUsImage";

interface IAboutUsSectionPropTypes {}

const AboutUsSection = ({}: IAboutUsSectionPropTypes) => {
  return (
    <section className="about-us-section bg-gray-50">
      <div className="sm:py-12 md:py-16 lg:py-32">
        <div className="mx-auto items-center w-theme px-theme md:grid grid-cols-10">
          <div className="col-start-2 col-span-4 image-wrapper">
            <AboutUsImage />
          </div>
          <div className="col-span-4 text-wrapper mt-12 md:mt-0">
            <h2 className="section-title-md">
              Welcome in our <br />
              <span className="text-primary-500">digital world!</span>
            </h2>
            <p className="paragraph-md max-w-sm">
              We’ve gathered the most talented minds around to create some
              digital magic. Whether it’s web design, social media, or software
              development, we’re always pushing the boundaries of what’s
              possible. We live and breathe digital and are ready to take your
              brand to the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutUsSection);
