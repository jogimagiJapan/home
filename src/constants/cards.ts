export type CardLinks = {
  home: string;
  instagram: string;
  email: string;
};

export type BusinessCardPage = {
  kind: "card";
  active: boolean;
  frontImage: string;
  backImage: string;
  links: CardLinks;
};

export type LinkItem = {
  label: string;
  description: string;
  url: string;
  openLabel: string;
};

export type LinksPage = {
  kind: "links";
  active: boolean;
  title: string;
  subtitle?: string;
  logo?: string;
  items: readonly LinkItem[];
};

export type PrivatePage = BusinessCardPage | LinksPage;

/**
 * NFC / 非公開ページの台帳。
 * 無効化: active を false にしてデプロイする。
 * 新規発行: 新しい token を追加する。
 */
export const cards = {
  cYApRqItwfcU: {
    kind: "card",
    active: true,
    frontImage: "/card/omote.png",
    backImage: "/card/ura.png",
    links: {
      home: "https://about.jogimagi.com",
      instagram: "https://www.instagram.com/jogimagi_official/",
      email: "mailto:hello@jogimagi.com",
    },
  },
  xARAmx5P2c7p: {
    kind: "links",
    active: true,
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
  },
} as const satisfies Record<string, PrivatePage>;

export type CardToken = keyof typeof cards;

export function getCard(token: string): PrivatePage | null {
  if (!(token in cards)) return null;
  return cards[token as CardToken];
}
