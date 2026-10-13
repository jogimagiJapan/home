import { BrandLogos } from "@/components/layout/BrandLogos";
import { Frame } from "@/components/layout/Frame";
import { HeaderNav } from "@/components/layout/HeaderNav";

export function Header() {
  return (
    <header className="border-b border-line">
      <Frame className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3 sm:h-16 sm:py-0">
        <BrandLogos />
        <HeaderNav />
      </Frame>
    </header>
  );
}
