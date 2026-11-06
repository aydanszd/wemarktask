import { Suspense } from "react";
import Link from "next/link";
import AboutSlider from "@/src/ui/swiper/slider";

type AboutProps = {
    title: string;
    description: string;
    images: { image: string }[];
};
function TitleLine({ text }: { text: string }) {
    if (text.startsWith("x")) {
        return (
            <>
                <span className="normal-case">x</span>
                {text.slice(1)}
            </>
        );
    }
    return <>{text}</>;
}
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
            className="bg-[#E0E0E0] pb-[120px] pt-[80px] md:pb-[250px] md:pt-[150px]"
        >
            <div className="mx-auto max-w-[1440px] px-6 md:px-[60px]">
                <div className="flex items-end justify-between">
                    <h2 className="text-[clamp(3rem,6.25vw,90px)] font-medium uppercase leading-[1.111] text-[#141414] [font-family:var(--font-firs,var(--font-hoves)),sans-serif]">
                        {titleLines.map((line, i) => (
                            <span key={i} className="block">
                                <TitleLine text={line} />
                            </span>
                        ))}
                    </h2>
                    <Link
                        href="#xschool"
                        className="mb-[24px] hidden border-b border-[#141414] text-[24px] font-medium leading-[36px] text-[#141414] transition-opacity hover:opacity-70 md:block"
                    >
                        Go to xSchool
                    </Link>
                </div>
                <div className="mt-10 space-y-6 text-[20px] font-normal leading-[1.5] text-[#141414] md:mt-[80px] md:text-[30px] md:leading-[44px]">
                    {paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </div>
            <Suspense
                fallback={
                    <div
                        className="mt-10 h-[48vw] w-full md:mt-[80px] md:h-[486px]"
                        aria-hidden="true"
                    />
                }
            >
                <AboutSlider images={images} />
            </Suspense>
        </section>
    );
}