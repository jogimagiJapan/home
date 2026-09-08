import type { Metadata } from "next";
import Image from "next/image";
import { WaveMark } from "@/components/concept/WaveMark";
import { PageIntro } from "@/components/layout/PageIntro";
import { Frame } from "@/components/layout/Frame";
import { siteConfig } from "@/constants/siteConfig";

export const metadata: Metadata = {
  title: "Concept — SEW THE SOUND",
  description: siteConfig.concept.lead,
};

export default function ConceptPage() {
  const { concept } = siteConfig;

  return (
    <main>
      <figure className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[16/9]">
        <Image
          src={concept.image.src}
          alt={concept.image.alt}
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
      </figure>

      <PageIntro
        label={concept.title}
        title={concept.subtitle}
        lead={concept.lead}
      />

      <Frame className="pb-20 sm:pb-32">
        <ol className="flex max-w-[38rem] flex-col gap-20 sm:gap-28">
          {concept.waves.map((wave) => (
            <li key={wave.number}>
              <WaveMark kind={wave.mark} />
              <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-muted">
                {wave.number}  /  {wave.en}
              </p>
              <h2 className="mt-4 text-xl font-medium leading-snug sm:text-2xl">
                {wave.title}
              </h2>
              <p className="mt-2 text-[14px] text-muted">{wave.trigger}</p>
              <p className="mt-8 text-[15px] leading-[2] text-muted sm:text-base">
                {wave.background}
              </p>
              <p className="mt-6 text-[15px] leading-[2] text-muted sm:text-base">
                {wave.characteristic}
              </p>
            </li>
          ))}
        </ol>

        <article className="mt-24 max-w-[38rem] border-t border-line pt-16 sm:mt-32">
          <h2 className="text-xl font-medium leading-snug sm:text-2xl">
            {concept.synthesis.title}
          </h2>
          <p className="mt-6 text-[15px] leading-[2] text-muted sm:text-base">
            {concept.synthesis.content}
          </p>
          <ul className="mt-12 flex flex-col gap-4 border-t border-line pt-8">
            {concept.synthesis.threads.map((thread) => (
              <li
                key={thread.en}
                className="flex items-baseline justify-between gap-6"
              >
                <span className="font-sans text-[13px] tracking-[0.16em]">
                  {thread.en}
                </span>
                <span className="text-[13px] text-muted">{thread.ja}</span>
              </li>
            ))}
          </ul>
        </article>
      </Frame>
    </main>
  );
}
