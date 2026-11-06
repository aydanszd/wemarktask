import { Suspense } from "react";
import Link from "next/link";
import AboutSlider from "@/src/ui/swiper/slider";
import type { AboutProps } from "@/src/types";
import { ABOUT_BACKGROUND_COLOR, ABOUT_TEXT_COLOR } from "@/src/color";
import { ABOUT_TITLE_TYPOGRAPHY } from "@/src/typography";

export default function About({ title, description, images }: AboutProps) {
    const titleLines = title
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter(Boolean);

    const paragraphs = description
        .split(/\r?\n/)
        .map((p) => p.trim())
        .filter(Boolean);
    return (
        <section
            id="about"
            className="pb-30 pt-20 md:pb-62.5 md:pt-37.5"
            style={{ backgroundColor: ABOUT_BACKGROUND_COLOR }}
        >
            <div className="mx-auto max-w-360 px-6 md:px-15">
                <div className="flex items-end justify-between">
                    <h2
                        className={ABOUT_TITLE_TYPOGRAPHY}
                        style={{ color: ABOUT_TEXT_COLOR }}
                    >
                        {titleLines.map((line, i) => (
                            <span key={i} className="block">
                                {line}
                            </span>
                        ))}
                    </h2>
                    <Link
                        href="#xschool"
                        className="mb-6 hidden border-b text-[24px] font-medium leading-9 transition-opacity hover:opacity-70 md:block"
                        style={{ borderColor: ABOUT_TEXT_COLOR, color: ABOUT_TEXT_COLOR }}
                    >
                        Go to xSchool
                    </Link>
                </div>
                <div
                    className="mt-10 space-y-6 text-[20px] font-normal leading-normal md:mt-20 md:text-[30px] md:leading-11"
                    style={{ color: ABOUT_TEXT_COLOR }}
                >
                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </div>
            <Suspense
                fallback={
                    <div
                        className="mt-10 h-[48vw] w-full md:mt-20 md:h-121.5"
                        aria-hidden="true"
                    />
                }
            >
                <AboutSlider images={images} />
            </Suspense>
        </section>
    );
}