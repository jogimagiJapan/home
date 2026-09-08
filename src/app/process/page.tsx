import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/layout/PageIntro";
import { Frame } from "@/components/layout/Frame";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Process — SEW THE SOUND",
  description: siteConfig.process.lead,
};

export default function ProcessPage() {
  const { process } = siteConfig;

  return (
    <main>
      <figure className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[16/9]">
        <Image
          src={process.image.src}
          alt={process.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </figure>

      <PageIntro
        label={process.title}
        title={process.subtitle}
        lead={process.lead}
      />

      <Frame className="pb-20 sm:pb-32">
        <ol className="flex max-w-[38rem] flex-col gap-20 sm:gap-28">
          {process.steps.map((step) => (
            <li key={step.number}>
              <p className="font-mono text-[11px] tracking-[0.18em] text-muted">
                {step.number}  /  {step.en}
              </p>
              <h2 className="mt-4 text-xl font-medium leading-snug sm:text-2xl">
                {step.title}
              </h2>
              <p className="mt-2 text-[14px] text-muted">{step.subtitle}</p>
              <div className="mt-8 flex flex-col gap-6">
                {step.content.map((para) => (
                  <p
                    key={para}
                    className="text-[15px] leading-[2] text-muted sm:text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-24 flex max-w-[38rem] flex-col gap-16 border-t border-line pt-16 sm:mt-32 sm:gap-20">
          {process.notes.map((note) => (
            <article key={note.title}>
              <h2 className="text-xl font-medium leading-snug sm:text-2xl">
                {note.title}
              </h2>
              <p className="mt-6 text-[15px] leading-[2] text-muted sm:text-base">
                {note.content}
              </p>
            </article>
          ))}
        </div>
      </Frame>
    </main>
  );
}
