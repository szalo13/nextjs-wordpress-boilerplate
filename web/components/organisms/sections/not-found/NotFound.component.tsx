import { memo } from "react";
import Button from "../../../atoms/buttons/Button";

interface INotFoundPropTypes {
  title: string;
  description: string;
  buttonLabel?: string;
  redirectUrl?: string;
  showRedirectButton?: boolean;
}

const NotFound = ({
  title,
  description,
  buttonLabel,
  redirectUrl,
  showRedirectButton = true,
}: INotFoundPropTypes) => {
  if (showRedirectButton && (!redirectUrl || !buttonLabel)) {
    throw new Error(
      "If you want to show a redirect button, you must provide both a redirectUrl and a buttonLabel"
    );
  }

  return (
    <div className="max-w-xl mx-auto w-full px-4 md:px-8 my-24">
      <h1 className="text-7xl font-black my-8">{title}</h1>
      <p className="text-lg">{description}</p>
      {showRedirectButton && (
        <Button color="black" className="mt-8" href={redirectUrl}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default memo(NotFound);
