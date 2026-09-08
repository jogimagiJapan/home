import { Frame } from "@/components/layout/Frame";

interface PageIntroProps {
  label: string;
  title: string;
  lead?: string;
}

export function PageIntro({ label, title, lead }: PageIntroProps) {
  return (
    <Frame className="py-20 sm:py-28">
      <p className="font-sans text-[11px] tracking-[0.28em] text-muted">{label}</p>
      <h1 className="mt-5 max-w-[14em] text-[1.75rem] font-medium leading-[1.45] tracking-tight sm:text-[2.25rem]">
        {title}
      </h1>
      {lead ? (
        <p className="mt-6 max-w-[36em] text-[15px] leading-[2] text-muted sm:text-base">
          {lead}
        </p>
      ) : null}
    </Frame>
  );
}
