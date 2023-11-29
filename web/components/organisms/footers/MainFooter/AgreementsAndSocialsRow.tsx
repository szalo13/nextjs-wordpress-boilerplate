import { memo } from "react";
import { COMPANY_NAME, LOGO_MAIN_BRIGHT } from "../../../../app/const";
import Image from "next/image";

interface IAgreementsAndSocialsRowPropTypes {}

const AgreementsAndSocialsRow = ({}: IAgreementsAndSocialsRowPropTypes) => {
  return (
    <div className="mt-8 flex flex-col-reverse md:flex-row-reverse pt-8 md:items-center md:justify-between">
      <p className="mt-8 text-md font-md text-white md:order-1 md:mt-0 mb-6 md:mb-0">
        &copy; {new Date().getFullYear()} {COMPANY_NAME}, Inc. All rights
        reserved.
      </p>
      <Image
        width={100}
        height={90}
        src={LOGO_MAIN_BRIGHT}
        alt={COMPANY_NAME}
      />
    </div>
  );
};

export default memo(AgreementsAndSocialsRow);
