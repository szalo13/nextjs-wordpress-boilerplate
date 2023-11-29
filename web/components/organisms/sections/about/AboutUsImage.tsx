import classNames from 'classnames';
import Image from 'next/image';
import { memo } from 'react'
import styles from './AboutUsImage.module.css';
import FadeInAnimation from '../../../atoms/animations/FadeInAnimation.component';
import { HOME_PAGE_SECTIONS_IDS } from '../../../../app/const';

interface IAboutUsImagePropTypes {
  
}

const TEAM = [
  {
    name: "Kamil Szalek",
    jobTitle: "Software Developer",
    classNames: "member-right-wrapper",
    align: "left",
  },
  {
    name: "Olha Rieka",
    jobTitle: "Product Designer",
    classNames: "member-left-wrapper",
    align: "right",
  },
];

const AboutUsImage = ({
  
}: IAboutUsImagePropTypes) => {
  return (
    <div
      id={HOME_PAGE_SECTIONS_IDS.ABOUT_US}
      className="about-us-image w-fit relative"
    >
      <FadeInAnimation delay={0}>
        <Image
          width={380}
          height={380}
          src="/images/about-us.png"
          alt="About Us"
          className="about-us-img"
        />
      </FadeInAnimation>
      {TEAM.map((member, idx) => (
        <div
          key={member.name}
          className={classNames(["block absolute", styles[member.classNames]])}
        >
          <FadeInAnimation key={member.name} delay={(idx + 1) * 300}>
            <div
              key={member.name}
              className={classNames([
                "text-sm",
                styles.member,
                styles[`member-${member.align}`],
              ])}
            >
              <h5 className={styles["member-name"]}>{member.name}</h5>
              <h6 className={styles["job-title"]}>{member.jobTitle}</h6>
            </div>
          </FadeInAnimation>
        </div>
      ))}
    </div>
  );
}

export default memo(AboutUsImage);
