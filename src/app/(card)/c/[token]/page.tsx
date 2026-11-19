import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BusinessCard } from "@/components/card/BusinessCard";
import { getCard } from "@/constants/cards";

type PageProps = {
  params: Promise<{ token: string }>;
};

export const metadata: Metadata = {
  title: "Card",
  description: "Digital business card",
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
  const card = getCard(token);

  if (!card || !card.active) {
    notFound();
  }

  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-10">
      <BusinessCard card={card} />
    </main>
  );
}
