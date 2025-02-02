import { Helmet } from "react-helmet";
import logo from "../img/elvis logo.png";

interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
  canonical?: string;
  locale?: string; // Language and region, e.g., "en_CA"
}

export const addMetaData = ({
  title = "Elvis Okolosio | Frontend Developer",
  description = "Elvis is a seasoned developer focused on frontend web development.",
  path = "",
  keywords = "Web design and development",
  locale = "en_CA",
}: MetaProps) => {
  const canonical = `${process.env.REACT_APP_WEB_URL}/${path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elvis Okolosio",
    url: canonical,
    logo: logo,
    description: description,
    sameAs: [
      " ",
      " ",
      " ",
    ],
  };

  return (
    <Helmet>
      {/* Primary Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta property="og:site_name" content="Elvis Okolosio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Metadata */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:site" content="@ZorgFinancial" /> */}

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};
