import Image from "next/image";
import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";

export function ProfileContent() {
  const { profile } = siteConfig;

  return (
    <main>
      <figure className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[16/9]">
        <Image
          src={profile.image.src}
          alt={profile.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </figure>

      <Frame className="py-20 sm:py-28">
        <p className="font-sans text-[11px] tracking-[0.28em] text-muted">
          {profile.title}
        </p>
        <h1 className="mt-5 max-w-[14em] text-[1.75rem] font-medium leading-[1.45] tracking-tight whitespace-pre-wrap sm:text-[2.25rem]">
          {profile.subtitle}
        </h1>

        <div className="mt-14 max-w-[38rem] border-t border-line pt-10">
          <p className="font-sans text-[13px] tracking-[0.16em]">
            {profile.director.name}
            <span className="ml-3 tracking-[0.2em] text-muted">
              {profile.director.kana}
            </span>
          </p>
          <p className="mt-6 text-[15px] leading-[2] text-muted sm:text-base">
            {profile.director.bio}
          </p>
        </div>

        <div className="mt-24 flex flex-col gap-20 sm:mt-32 sm:gap-28">
          {profile.sections.map((section) => (
            <article key={section.title} className="max-w-[38rem]">
              <h2 className="text-xl font-medium leading-snug sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-8 flex flex-col gap-6">
                {section.content.map((para) => (
                  <p
                    key={para}
                    className="text-[15px] leading-[2] text-muted sm:text-base"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Frame>
    </main>
  );
}
