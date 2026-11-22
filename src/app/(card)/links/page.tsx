import type { Metadata } from "next";
import { LinksBoard } from "@/components/card/LinksBoard";
import { linksPage } from "@/constants/linksPage";

export const metadata: Metadata = {
  title: "Links — つむぐね",
  description: "つむぐね公式サイト・Instagram・オンラインショップへのリンク",
};

export default function PublicLinksPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-12">
      <LinksBoard page={linksPage} />
    </main>
  );
}
