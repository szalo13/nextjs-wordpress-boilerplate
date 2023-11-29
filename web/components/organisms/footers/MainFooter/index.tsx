import AgreementsAndSocialsRow from "./AgreementsAndSocialsRow";
import InfiniteLoopFooterSection from "./InfiniteLoopFooterSection";
import MainFooterSection from "./MainFooterSection";

export default function MainFooter() {
  return (
    <footer
      className="bg-black px-theme py-12"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <MainFooterSection />
      <AgreementsAndSocialsRow />
      <InfiniteLoopFooterSection />
    </footer>
  );
}
