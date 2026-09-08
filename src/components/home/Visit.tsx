import Link from "next/link";
import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";

export function Visit() {
  const { process, concept, order, profile } = siteConfig.links;

  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Frame>
        <p className="max-w-[34em] text-[15px] leading-[2] text-muted sm:text-base">
          {siteConfig.statements.body}
        </p>

        <div className="mt-14 flex flex-col gap-8 sm:mt-16">
          <Link
            href={process.url}
            className="group flex max-w-md flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-sans text-[13px] tracking-[0.16em]">
              {process.title}
            </span>
            <span className="text-[13px] text-muted transition-colors group-hover:text-ink">
              {process.description}
            </span>
          </Link>
          <Link
            href={concept.url}
            className="group flex max-w-md flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-sans text-[13px] tracking-[0.16em]">
              {concept.title}
            </span>
            <span className="text-[13px] text-muted transition-colors group-hover:text-ink">
              {concept.description}
            </span>
          </Link>
          <Link
            href={profile.url}
            className="group flex max-w-md flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <span className="font-sans text-[13px] tracking-[0.16em]">
              {profile.title}
            </span>
            <span className="text-[13px] text-muted transition-colors group-hover:text-ink">
              ディレクターの声
            </span>
          </Link>
        </div>

        <a
          href={order.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 inline-flex border border-ink px-8 py-3 font-sans text-[12px] tracking-[0.22em] transition-colors hover:bg-ink hover:text-paper"
        >
          {order.title}
        </a>
      </Frame>
    </section>
  );
}
