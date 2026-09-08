import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";

export function Statement() {
  return (
    <section className="py-20 sm:py-28">
      <Frame>
        <p className="font-sans text-[11px] tracking-[0.28em] text-muted">
          {siteConfig.name}
        </p>
        <h1 className="mt-5 max-w-[18em] text-[1.75rem] font-medium leading-[1.45] tracking-tight sm:text-[2.25rem]">
          {siteConfig.statements.main}
        </h1>
        <p className="mt-6 max-w-[36em] text-[15px] leading-[2] text-muted whitespace-pre-wrap sm:text-base">
          {siteConfig.statements.sub}
        </p>
      </Frame>
    </section>
  );
}
