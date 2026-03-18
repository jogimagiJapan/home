import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/home/Hero";
import { LinkCard } from "@/components/home/LinkCard";
import { SocialFooter } from "@/components/home/SocialFooter";
import { siteConfig } from "@/constants/siteConfig";
import { WorksSlideshow } from "@/components/home/WorksSlideshow";
import fs from "fs";
import path from "path";
import Image from "next/image";

// Function to fetch images Server-Side
function getWorkImages() {
  const worksDir = path.join(process.cwd(), "public", "works");
  try {
    if (fs.existsSync(worksDir)) {
      const files = fs.readdirSync(worksDir);
      return files
        .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map((file) => `/works/${file}`);
    }
  } catch (error) {
    console.error("Error reading works directory:", error);
  }
  return [];
}

export default function Home() {
  const workImages = getWorkImages();

  return (
    <Container>
      <header className="flex justify-center mb-4 pt-4">
        {/* Logo Section */}
        <div className="relative w-40 h-16 sm:w-48 sm:h-20 flex items-center justify-center">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>
      <Hero />
      
      <main className="flex flex-col gap-4 mt-2 mb-8">
        {siteConfig.links.map((link, i) => (
          <LinkCard
            key={link.id}
            index={i}
            title={link.title}
            description={link.description}
            url={link.url}
          />
        ))}
      </main>

      <WorksSlideshow images={workImages} />

      <SocialFooter />
    </Container>
  );
}
