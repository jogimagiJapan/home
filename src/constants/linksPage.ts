export type LinkItem = {
  label: string;
  description: string;
  url: string;
  openLabel: string;
};

export type LinksPageConfig = {
  title: string;
  subtitle?: string;
  logo?: string;
  items: readonly LinkItem[];
};

export const linksPage = {
  title: "つむぐね",
  subtitle: "Links",
  logo: "/logo_tsuugune.png",
  items: [
    {
      label: "Official Website",
      description: "つむぐね公式サイト",
      url: "https://about.jogimagi.com/",
      openLabel: "サイトを開く",
    },
    {
      label: "Instagram",
      description: "@tsumugune",
      url: "https://www.instagram.com/tsumugune?utm_source=qr",
      openLabel: "Instagramを開く",
    },
    {
      label: "Online Store",
      description: "つむぐねオンラインショップ",
      url: "https://tsumugune.jogimagi.com/",
      openLabel: "ショップを開く",
    },
  ],
} as const satisfies LinksPageConfig;
