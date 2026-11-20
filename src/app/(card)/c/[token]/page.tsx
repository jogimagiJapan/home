import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessCard } from "@/components/card/BusinessCard";
import { LinksBoard } from "@/components/card/LinksBoard";
import { getCard } from "@/constants/cards";

type PageProps = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: "Card",
  description: "Private landing page",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function CardPage({ params }: PageProps) {
  const { token } = await params;
  const page = getCard(token);

  if (!page || !page.active) {
    notFound();
  }

  if (page.kind === "links") {
    return (
      <main className="flex min-h-dvh items-center justify-center px-5 py-12">
        <LinksBoard page={page} />
      </main>
    );
  }

  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-10">
      <BusinessCard card={page} />
    </main>
  );
}
