import { memo } from "react";
import Button from "../../../atoms/buttons/Button";
import ContactForm from "./ContactForm";
import SocialMediaIcon from "../../../atoms/SocialMediaIcon";
import { SocialIconType } from "../../../atoms/SocialMediaIcon/const";
import {
  HOME_PAGE_SECTIONS_IDS,
  TELEGRAM_URL,
  WHATSAPP_URL,
} from "../../../../app/const";
import FadeInAnimation from "../../../atoms/animations/FadeInAnimation.component";
import NoiseOverlayComponent from "../../../atoms/animations/GlitchOverlay/NoiseOverlay.component";
import CalendlyContact from "./CalendlyContact";

interface IContactSectionPropTypes {}

const ContactSection = ({}: IContactSectionPropTypes) => {
  return (
    <section
      id={HOME_PAGE_SECTIONS_IDS.CONTACT}
      className="contact-section relative bg-primary-500 text-white"
    >
      <NoiseOverlayComponent />
      <CalendlyContact />
      <div className="relative z-10 py-12 md:py-16 lg:py-32 px-theme">
        <div className="w-theme mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <h4 className="text-4xl font-bold pb-6">
              You don&apos;t like calls? Drop your questions here
            </h4>
            <h2 className="paragraph-md max-w-sm">
              Contact with us and a dedicated digital craftsman from our team
              will orchestrate a rendezvous with you to discuss your idea.
            </h2>
            <p className="text-lg font-semibold">Don’t like phone talks?</p>
            <p className="pb-10 text-lg font-semibold">
              Just drop your request:
            </p>
            <div className="flex items-center justify-items-start">
              <FadeInAnimation delay={300} duration={1000}>
                <Button
                  target="_blank"
                  href={TELEGRAM_URL}
                  className="mr-4 flex items-center pl-3 rounded-3xl rounded-es-none"
                >
                  <div className="mr-2">
                    <SocialMediaIcon size={24} type={SocialIconType.Telegram} />
                  </div>
                  Telegram
                </Button>
              </FadeInAnimation>
              <FadeInAnimation delay={600} duration={1000}>
                <Button
                  target="_blank"
                  href={WHATSAPP_URL}
                  className="mr-2 flex items-center pl-3 rounded-3xl rounded-es-none"
                >
                  <div className="mr-2">
                    <SocialMediaIcon size={24} type={SocialIconType.WhatsApp} />
                  </div>
                  Whats App
                </Button>
              </FadeInAnimation>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
