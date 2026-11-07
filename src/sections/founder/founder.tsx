import Image from "next/image";
import type { FounderProps } from "@/src/types";
import { FOUNDER_TITLE_TYPOGRAPHY } from "@/src/typography";
import { ABOUT_BACKGROUND_COLOR, ABOUT_TEXT_COLOR } from "@/src/color";

function paragraphsOf(text: string) {
    return text
        .split(/\r?\n/)
        .map((p) => p.trim())
        .filter(Boolean);
}

export default function Founder({ founders }: FounderProps) {
    if (!founders?.length) return null;

    return (
        <section
            id="founder"
            className="pb-[120px] md:pb-[260px]"
            style={{ backgroundColor: ABOUT_BACKGROUND_COLOR }}
        >
            <div className="mx-auto max-w-[1320px] px-6 md:px-[60px]">
                <h2
                    className={`${FOUNDER_TITLE_TYPOGRAPHY} text-left md:relative md:top-11`}
                    style={{ color: ABOUT_TEXT_COLOR }}
                >
                    Founder
                </h2>
                <div className="mt-[120px] space-y-[112px] md:mt-[112px]">
                    {founders.map((founder) => (
                        <article
                            key={founder.name}
                            className="grid items-center gap-10 md:grid-cols-[522px_1fr] md:gap-x-[115px]"
                        >
                            <figure className="relative aspect-square w-full overflow-hidden md:w-[522px]">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    sizes="(min-width: 768px) 522px, 100vw"
                                    className="object-cover"
                                />
                                <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[6px] bg-[#E0E0E0] px-5 py-[10px] text-[16px] font-medium leading-[19px] text-[#141414] [font-family:var(--font-suisse,var(--font-hoves)),sans-serif] md:bottom-[24px]">
                                    <span>{founder.name} -</span>{" "}
                                    <span className="text-[#14141A]/70">{founder.position}</span>
                                </figcaption>
                            </figure>
                            <div className="flex max-w-[682px] flex-col gap-[21px]">
                                <h3 className="text-[20px] font-medium uppercase leading-[1.4] text-[#14141A] md:text-[36px] md:leading-[62px]">
                                    {founder.title}
                                </h3>
                                <div className="space-y-6 text-[20px] font-normal leading-[1.5] text-[#141414] md:text-[30px] md:leading-[44px]">
                                    {paragraphsOf(founder.description).map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}