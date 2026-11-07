"use client";
import { useState } from "react";
import Link from "next/link";
import { HEADER_TEXT_COLOR } from "@/src/color";
import { HEADER_LINKS } from "@/src/const/header";
import { HEADER_LINK_TYPOGRAPHY, HEADER_MENU_TYPOGRAPHY } from "@/src/typography";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative min-[769px]:hidden">
            <button
                type="button"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className={`${HEADER_MENU_TYPOGRAPHY} relative z-20 flex h-7 cursor-pointer items-center justify-center`}
                style={{ color: HEADER_TEXT_COLOR }}
            >
                Menu
            </button>

            <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                aria-hidden={!isOpen}
                inert={!isOpen}
                className="fixed inset-x-0 top-0 z-10 flex h-fit max-h-dvh flex-col gap-5 overflow-y-auto bg-[#14141a] px-6 pb-6 pt-24 text-[#e0e0e0] shadow-lg"
                style={{
                    color: HEADER_TEXT_COLOR,
                    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
                    visibility: isOpen ? "visible" : "hidden",
                    transition: `transform 700ms cubic-bezier(0.22, 1, 0.36, 1), visibility 0s linear ${isOpen ? "0s" : "700ms"}`,
                }}
            >
                {HEADER_LINKS.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`${HEADER_LINK_TYPOGRAPHY} transition-opacity hover:opacity-70`}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className={`${HEADER_LINK_TYPOGRAPHY} underline transition-opacity hover:opacity-70`}
                >
                    Let&apos;s Talk
                </Link>
            </nav>
        </div>
    );
}
