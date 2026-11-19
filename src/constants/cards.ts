export type CardConfig = {
  active: boolean;
  frontImage: string;
  backImage: string;
  links: {
    home: string;
    instagram: string;
    email: string;
  };
};

/**
 * NFC名刺の台帳。
 * 無効化: active を false にしてデプロイする。
 * 新規発行: 新しい token を追加する。
 */
export const cards = {
  cYApRqItwfcU: {
    active: true,
    frontImage: "/card/omote.png",
    backImage: "/card/ura.png",
    links: {
      home: "https://about.jogimagi.com",
      instagram: "https://www.instagram.com/jogimagi_official/",
      email: "mailto:hello@jogimagi.com",
    },
  },
} as const satisfies Record<string, CardConfig>;

export type CardToken = keyof typeof cards;

export function getCard(token: string): CardConfig | null {
  if (!(token in cards)) return null;
  return cards[token as CardToken];
}
