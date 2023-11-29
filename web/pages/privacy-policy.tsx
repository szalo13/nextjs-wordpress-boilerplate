import { memo } from "react";
import MainLayout from "../layouts/MainLayout";
import { COMPANY_NAME, COMPANY_OWNER_EMAIL } from "../app/const";
import { Metadata } from "next";
import { getMetadata } from "../utils/seo";

interface IPagePropTypes {}

export const metadata: Metadata = getMetadata({
  title: `${COMPANY_NAME} - Privacy Policy`,
});

const PrivacyPolicyPage = ({}: IPagePropTypes) => {
  return (
    <MainLayout>
      <div className="my-24 w-theme p-theme mx-auto elementor-text-editor elementor-clearfix">
        <ol>
          <li>
            <strong>INTRODUCTION</strong>
          </li>
        </ol>
        <p>
          {COMPANY_NAME} (“we”, “us”, “our”) respects your privacy and is
          committed to protecting your personal data. This Privacy Policy will
          inform you about how we treat your personal data when you visit our
          website (regardless of where you visit from), tell you about your
          privacy rights, and how the law protects you.
        </p>
        <p>
          Please use the Glossary to understand the meaning of some of the terms
          used in this privacy policy.
        </p>
        <ol>
          <li>
            <strong>IMPORTANT INFORMATION AND WHO WE ARE</strong>
          </li>
        </ol>
        <p>
          <strong>Purpose of this Privacy Policy</strong>
        </p>
        <p>
          This Privacy Policy aims to provide you with information on how Let’s
          Remote collects and processes your personal data through your use of
          this website, including any data you may provide through this website.
        </p>
        <p>
          This website is not intended for children and we do not knowingly
          collect data related to children.
        </p>
        <p>
          It is important that you read this privacy policy together with any
          other privacy notice on our website so that you are fully aware of how
          and why we are using your data.
        </p>
        <p>
          <strong>Data Controller</strong>
        </p>
        <p>
          {COMPANY_NAME} is the data controller and responsible for your
          personal data.
        </p>
        <p>
          We have appointed a data protection officer (DPO) who is responsible
          for overseeing questions in relation to this privacy policy. If you
          have any questions about this privacy policy, please contact the DPO
          using the details set out below.
        </p>
        <p>
          <strong>Contact Details</strong>
        </p>
        <p>Our full details are:</p>
        <p>
          Full name of legal entity:
          <br />
          <b>{COMPANY_NAME} Name of DPO</b>: Kamil,&nbsp;<b>Email address</b>:
          {COMPANY_OWNER_EMAIL}
        </p>
        <ol>
          <li>
            <strong>THE DATA WE COLLECT ABOUT YOU</strong>
          </li>
        </ol>
        <p>
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul>
          <li>
            Identity Data: Includes first name, last name, username or similar
            identifier.
          </li>
          <li>
            Contact Data: Includes billing address, delivery address, email
            address and telephone numbers.
          </li>
          <li>
            Technical Data: Includes internet protocol (IP) address, your login
            data, browser type and version, time zone setting and location,
            operating system and platform, and other technology on the devices
            you use to access this website.
          </li>
          <li>
            Usage Data: Includes information about how you use our website,
            products and services.
          </li>
          <li>
            Marketing and Communications Data: Includes your preferences in
            receiving marketing from us and our third parties and your
            communication preferences.
          </li>
        </ul>
        <ol>
          <li>
            <strong>HOW WE USE YOUR PERSONAL DATA</strong>
          </li>
        </ol>
        <p>
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul>
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>
          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
        <ol>
          <li>
            <strong>DISCLOSURES OF YOUR PERSONAL DATA</strong>
          </li>
        </ol>
        <p>
          We may share your personal data with the parties set out below for the
          purposes set out in this privacy policy.
        </p>
        <ul>
          <li>
            Service providers who provide IT and system administration services.
          </li>
          <li>
            Professional advisers including lawyers, bankers, auditors and
            insurers who provide consultancy, banking, legal, insurance and
            accounting services.
          </li>
          <li>
            Authorities who require reporting of processing activities in
            certain circumstances.
          </li>
        </ul>
        <ol>
          <li>
            <strong>DATA SECURITY</strong>
          </li>
        </ol>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorized way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject to
          a duty of confidentiality.
        </p>
        <ol>
          <li>
            <strong>DATA RETENTION</strong>
          </li>
        </ol>
        <p>
          We will only retain your personal data for as long as necessary to
        </p>
      </div>
    </MainLayout>
  );
};

export default memo(PrivacyPolicyPage);
