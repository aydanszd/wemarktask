"use client";
import { useState } from "react";
import type { QuestionsProps } from "@/src/types";
import { FAQ_TEXT_TYPOGRAPHY, FAQ_TITLE_TYPOGRAPHY } from "@/src/typography";
import {
    FAQ_BACKGROUND_COLOR,
    FAQ_MUTED_TEXT_COLOR,
    FAQ_SEPARATOR_COLOR,
    FAQ_TEXT_COLOR,
} from "@/src/color";

function Icon({ open }: { open: boolean }) {
    return (
        <span className="relative block h-6 w-6 shrink-0 lg:h-7 lg:w-7">
            <span
                className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
                style={{ backgroundColor: FAQ_TEXT_COLOR }}
            />
            <span
                className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transition-transform duration-300 ${
                    open ? "scale-y-0" : "scale-y-100"
                }`}
                style={{ backgroundColor: FAQ_TEXT_COLOR }}
            />
        </span>
    );
}
function plainTextAnswer(answer: string) {
    return answer
        .replace(/<\/?p\b[^>]*>/gi, "")
        .replace(/<br\s*\/?>/gi, " ")
        .replace(/&nbsp;/gi, " ")
        .replace(/&mdash;/gi, "—")
        .replace(/&amp;/gi, "&")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;|&apos;/gi, "'")
        .replace(/<[^>]*>/g, "")
        .trim();
}

export default function Faq({ title, items }: QuestionsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const titleLines = title.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

    return (
        <section
            className="hidden w-full py-20 lg:block lg:min-h-[1497px] lg:py-[120px] mt-20a"
            style={{ backgroundColor: FAQ_BACKGROUND_COLOR, color: FAQ_TEXT_COLOR }}
        >
            <div className="mx-auto w-full max-w-[1317px] px-5 lg:px-0">
                <h2 className={`mb-16 lg:mb-[80px] ${FAQ_TITLE_TYPOGRAPHY}`}>
                    {titleLines.map((line, index) => (
                        <span key={index} className="block">
                            {line}
                        </span>
                    ))}
                </h2>

                <ul className="border-b" style={{ borderColor: FAQ_SEPARATOR_COLOR }}>
                    {items.map((item, i) => {
                        const isOpen = openIndex === i;
                        const panelId = `faq-panel-${i}`;
                        const buttonId = `faq-button-${i}`;

                        return (
                            <li
                                key={item.question}
                                className="border-t"
                                style={{ borderColor: FAQ_SEPARATOR_COLOR }}
                            >
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        className={`flex w-full items-center justify-between gap-6 py-6 text-left lg:py-10 ${FAQ_TEXT_TYPOGRAPHY}`}
                                    >
                                        <span>{item.question}</span>
                                        <Icon open={isOpen} />
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p
                                            className={`pb-10 pt-4 lg:pb-[60px] lg:pt-8 ${FAQ_TEXT_TYPOGRAPHY}`}
                                            style={{ color: FAQ_MUTED_TEXT_COLOR }}
                                        >
                                            {plainTextAnswer(item.answer)}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}