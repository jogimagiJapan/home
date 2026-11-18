import { Frame } from "@/components/layout/Frame";
import { siteConfig } from "@/constants/siteConfig";

export function EventsList() {
  const { events } = siteConfig;

  return (
    <Frame className="pb-24 sm:pb-36">
      <header className="text-center">
        <h1 className="font-sans text-[11px] tracking-[0.28em] text-muted">
          {events.title}
        </h1>
      </header>

      <div className="mt-16 flex flex-col gap-20 sm:mt-20 sm:gap-28">
        {events.years.map((group) => (
          <section key={group.year}>
            <h2 className="mb-10 text-center font-mono text-[11px] tracking-[0.2em] text-muted sm:mb-12">
              {group.year}
            </h2>

            <ul className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <li key={`${group.year}-${item.title}-${item.date}`}>
                  <article className="mx-auto flex max-w-[18rem] flex-col items-center text-center">
                    <div
                      aria-hidden
                      className="mb-7 h-px w-16 bg-line sm:mb-8 sm:w-20"
                    />
                    <h3 className="text-[15px] font-medium leading-snug tracking-wide sm:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-[13px] tracking-[0.04em] text-ink sm:text-[14px]">
                      {item.date}
                    </p>
                    <p className="mt-2 font-sans text-[12px] tracking-[0.04em] text-muted sm:text-[13px]">
                      at {item.venue}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Frame>
  );
}
