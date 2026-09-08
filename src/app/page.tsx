import { Hero } from "@/components/home/Hero";
import { Statement } from "@/components/home/Statement";
import { Works } from "@/components/home/Works";
import { Visit } from "@/components/home/Visit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <Works />
      <Visit />
    </main>
  );
}
