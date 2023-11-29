import Head from "next/head";
import { memo } from "react";

interface SeoHeadProps {
  canonicalURL?: string;
  keywords?: string;
  metaDescription?: string;
  metaRobots?: string;
  metaTitle?: string;
  metaViewport?: string;
  structuredData?: object | null;
}

const SeoHead = ({
  canonicalURL,
  keywords,
  metaDescription,
  metaRobots,
  metaTitle,
  metaViewport,
  structuredData,
}: SeoHeadProps) => {
  return (
    <Head>
      {metaTitle && <title>{metaTitle}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {metaRobots && <meta name="robots" content={metaRobots} />}
      {metaViewport && <meta name="viewport" content={metaViewport} />}
      {canonicalURL && <link rel="canonical" href={canonicalURL} />}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
};

export default memo(SeoHead);
