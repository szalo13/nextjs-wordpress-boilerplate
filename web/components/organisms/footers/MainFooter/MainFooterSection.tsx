import { memo } from "react";
import { FOOTER } from "./const";
import Link from "next/link";
import styles from "./MainFooterSection.module.css";
import SocialMediaIcon from "../../../atoms/SocialMediaIcon";

interface IMainNavigationRowPropTypes {}

const MainFooterSection = ({}: IMainNavigationRowPropTypes) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-12 gap-4 text-white text-lg font-normal">
      <div className="nav-col mb-12 lg:col-span-2">
        {FOOTER.nav.map((navItem) => (
          <a className={styles.link} key={navItem.path} href={navItem.path}>
            {navItem.name}
          </a>
        ))}
      </div>
      <div className="col-experts mb-12 lg:col-span-3">
        <h3 className={styles.sectionName}>{FOOTER.experts.sectionName}</h3>
        {FOOTER.experts.items.map((item) => (
          <p key={item.name} className={styles.listElement}>
            {item.name}
          </p>
        ))}
      </div>
      <div className="col-experts mb-12 lg:col-span-3 pr-12">
        <h3 className={styles.sectionName}>{FOOTER.office.sectionName}</h3>
        <p className={styles.about}>{FOOTER.office.descriptionComponent}</p>
      </div>
      <div className="contact mb-12 lg:col-span-4 md:text-right">
        <h3 className={styles.sectionName}>{FOOTER.social.sectionName}</h3>
        <div className="social-icons-wrapper flex-row-reverse flex justify-items-end items-center mb-12 md:mb-16 lg:mb-20">
          {FOOTER.social.items.map((socialItem) => (
            <a key={socialItem.name} href={socialItem.href} className="ml-6">
              <SocialMediaIcon type={socialItem.icon} />
            </a>
          ))}
        </div>
        <div className="email-wrapper">
          <a
            className="text-2xl font-bold text-primary-500 hover:text-blue-600"
            href={`mailto:${FOOTER.email}`}
          >
            {FOOTER.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(MainFooterSection);
