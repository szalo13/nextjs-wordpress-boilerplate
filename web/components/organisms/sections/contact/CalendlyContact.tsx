import { memo } from 'react'
import { buttonClasses } from "../../../atoms/buttons/Button";
import Link from 'next/link';
import { CALENDLY_URL } from '../../../../app/const';

interface ICalendlyContactPropTypes {
  
}

const CalendlyContact = ({
  
}: ICalendlyContactPropTypes) => {
  return (
    <div className="calendly-contact relative z-10 w-full text-center py-8 md:py-16 lg:py-32">
      <h2 className="section-title-lg">
        Let&apos;s talk about <br />
        Your project 👋
      </h2>
      <div className="pb:8 md:mb-12 lg:mb-16">
        <p className="paragraph-lg">
          Schedule a quick 15min call to discuss Your idea.
        </p>
      </div>
      <div className="flex justify-center">
        <a
          href={CALENDLY_URL}
          className={buttonClasses({ color: "secondary", size: "lg" })}
          target="_blank"
        >
          Schedule
        </a>
      </div>
    </div>
  );
}

export default memo(CalendlyContact);
