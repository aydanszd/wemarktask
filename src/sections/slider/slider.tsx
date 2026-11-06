import Image from "next/image";
import star from "@/src/assets/_.svg";
import { SLIDER_BACKGROUND_COLOR, SLIDER_TEXT_COLOR } from "@/src/color";
import type { TextSliderProps } from "@/src/types";

function MarqueeRow({
    items,
    reverse = false,
}: {
    items: string[];
    reverse?: boolean;
}) {
    const group = (key: "a" | "b") => (
        <div
            key={key}
            aria-hidden={key === "b"}
            className="marquee-group"
        >
            {items.map((text, i) => (
                <span key={`${key}-${i}`} className="marquee-item">
                    <span>{text}</span>
                    <Image
                        src={star}
                        alt=""
                        aria-hidden="true"
                        width={23}
                        height={22}
                        className="h-[22px] w-[23px] shrink-0"
                    />
                </span>
            ))}
        </div>
    );

    return (
        <div
            aria-hidden="true"
            className="marquee-row flex h-[120px] items-center lg:h-[160px]"
        >
            <div
                className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
            >
                {group("a")}
                {group("b")}
            </div>
        </div>
    );
}

export default function Quotes({ textSlider }: TextSliderProps) {
    const items = Object.values(textSlider).filter((text) => text.trim());

    if (items.length === 0) return null;

    const secondRow = [...items.slice(1), items[0]];

    return (
        <section
            aria-label="Our values"
            className="w-full overflow-hidden border-y border-[#141414]/50"
            style={{ backgroundColor: SLIDER_BACKGROUND_COLOR, color: SLIDER_TEXT_COLOR }}
        >
            <span className="sr-only">{items.join(", ")}</span>
            <MarqueeRow items={items} />
            <div className="h-px bg-[#141414]/50" aria-hidden="true" />
            <MarqueeRow items={secondRow} reverse />
        </section>
    );
}