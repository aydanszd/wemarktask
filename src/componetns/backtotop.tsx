"use client";

import Image from "next/image";
import arrow from "@/src/assets/Vector 4 (1).svg";

export default function BackToTop({ label }: { label?: string }) {
    function scrollToTop() {
        const startY = window.scrollY;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.scrollTo(0, 0);
            return;
        }

        const duration = 1800;
        let startTime: number | undefined;

        function step(timestamp: number) {
            startTime ??= timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easedProgress =
                progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startY * (1 - easedProgress));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    return (
        <button
            type="button"
            aria-label={label ? undefined : "Back to top"}
            onClick={scrollToTop}
            className="flex cursor-pointer items-center gap-1 uppercase opacity-50 transition-opacity hover:opacity-100"
        >
            {label && <span>{label}</span>}
            <Image
                src={arrow}
                alt=""
                width={61}
                height={79}
                className={label ? "h-8 w-auto" : "h-[79px] w-auto"}
            />
        </button>
    );
}