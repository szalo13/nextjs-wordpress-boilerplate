import { Metadata } from "next";
import ContactSection from "../components/organisms/sections/contact/ContactSection";
import MainLayout from "../layouts/MainLayout";
import { getMetadata } from "../utils/seo";

export const metadata: Metadata = getMetadata({});

export default function Home() {
  return (
    <MainLayout
      headerProps={{
        showLogo: false,
        color: "white",
        positioned: "absolute",
      }}
    >
      <ContactSection />
    </MainLayout>
  );
}
