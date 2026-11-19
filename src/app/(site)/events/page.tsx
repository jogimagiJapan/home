import type { Metadata } from "next";
import { EventsList } from "@/components/events/EventsList";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Events — SEW THE SOUND",
  description: siteConfig.events.lead,
};

export default function EventsPage() {
  return (
    <main className="pt-16 sm:pt-24">
      <EventsList />
    </main>
  );
}
