import Image from "next/image";
import type { HeroBannerProps } from "@/src/types";

export default function Banner({ title, image }: HeroBannerProps) {
    const lines = title
        .split(/\r?\n/)
        .map((line) => line.replace(/\s+/g, " ").trim())
        .filter(Boolean);
    const offsets = [
        "translate-x-0 md:translate-x-0 md:ml-[4.31%]",
        "translate-x-[8vw] md:translate-x-0 md:ml-[24.1%]",
        "translate-x-[16vw] md:translate-x-0 md:ml-[39.24%]",
    ];
    return (
        <section className="relative h-175 w-full overflow-hidden md:h-225">
            <Image
                src={image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />

            <div className="relative z-10 mx-auto h-full w-[calc(100%-3rem)] max-w-[1320px] pt-50 md:pt-75">
                <h1 className="text-center text-[36px] font-normal uppercase leading-[43px] tracking-[-0.02em] text-[#E0E0E0] md:text-left md:text-[clamp(2.5rem,8.056vw,116px)] md:leading-[1.0517] md:whitespace-nowrap">
                    {lines.map((line, i) => (
                        <span key={i} className={`mx-auto block w-fit md:mx-0 ${offsets[i % offsets.length]}`}>
                            {line}
                        </span>
                    ))}
                </h1>
            </div>
        </section>
    );
}