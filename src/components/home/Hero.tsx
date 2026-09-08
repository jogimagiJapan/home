import { siteConfig } from "@/constants/siteConfig";

export function Hero() {
  return (
    <section>
      <figure className="relative h-[78vh] min-h-[420px] w-full overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.hero.src}
          className="h-full w-full object-cover"
        >
          <source src={siteConfig.hero.video} type="video/mp4" />
        </video>
      </figure>
    </section>
  );
}
