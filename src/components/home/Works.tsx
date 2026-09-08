import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";
import { cn } from "@/utils/cn";

function Caption({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <figcaption
      className={cn(
        "mt-3 font-mono text-[10px] tracking-[0.12em] text-muted sm:text-[11px]",
        className
      )}
    >
      {children}
    </figcaption>
  );
}

export function Works() {
  const [feature, pairA, pairB, wide, pairC, pairD] = siteConfig.works;

  return (
    <section className="pb-20 sm:pb-32">
      <Frame>
        <p className="mb-10 font-sans text-[11px] tracking-[0.28em] text-muted">
          Works
        </p>
      </Frame>

      <figure>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-line/40 sm:aspect-[5/6]">
          <Image
            src={feature.src}
            alt={feature.alt}
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
          />
        </div>
        <Caption className="px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-1080px)/2))]">
          {feature.caption}
        </Caption>
      </figure>

      <Frame className="mt-16 grid gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-10">
        {[pairA, pairB].map((work) => (
          <figure key={work.src}>
            <div className="relative aspect-[4/5] overflow-hidden bg-line/40">
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="eager"
              />
            </div>
            <Caption>{work.caption}</Caption>
          </figure>
        ))}
      </Frame>

      <figure className="mt-16 sm:mt-20">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-line/40">
          <Image
            src={wide.src}
            alt={wide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
          />
        </div>
        <Caption className="px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-1080px)/2))]">
          {wide.caption}
        </Caption>
      </figure>

      <Frame className="mt-16 grid gap-12 sm:mt-20 sm:grid-cols-2 sm:gap-10">
        {[pairC, pairD].map((work) => (
          <figure key={work.src}>
            <div className="relative aspect-[4/5] overflow-hidden bg-line/40">
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                loading="eager"
              />
            </div>
            <Caption>{work.caption}</Caption>
          </figure>
        ))}
      </Frame>
    </section>
  );
}
