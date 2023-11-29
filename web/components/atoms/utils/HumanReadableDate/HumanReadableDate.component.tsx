import { memo } from "react";

interface IHumanReadableDatePropTypes {
  date: string | Date;
}

const HumanReadableDate = ({ date }: IHumanReadableDatePropTypes) => {
  // Create a Date object from the date string
  const dateObject = new Date(date);

  // Use toLocaleDateString to format the date in a human-readable form
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <span>{formattedDate}</span>;
};

export default memo(HumanReadableDate);
