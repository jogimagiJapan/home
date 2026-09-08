import { Frame } from "@/components/layout/Frame";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  return (
    <header className="border-b border-line">
      <Frame className="flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-3 py-3 sm:h-16 sm:py-0">
        <Logo />
        <HeaderNav />
      </Frame>
    </header>
  );
}
