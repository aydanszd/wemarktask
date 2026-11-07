import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo (4).svg";
import { HEADER_TEXT_COLOR } from "@/src/color";
import { HEADER_LINKS } from "@/src/const/header";
import { HEADER_LINK_TYPOGRAPHY } from "@/src/typography";
import MobileMenu from "@/src/layout/Header/mobile-menu";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-20">
            <div className="relative isolate mx-auto mt-6 flex h-9 w-[calc(100%-3rem)] max-w-[1320px] items-center justify-between md:mt-10.5">
                <Link href="/" aria-label="Wemark" className="relative z-20">
                    <Image
                        src={logo}
                        alt="wemark"
                        width={120}
                        height={19}
                        priority
                        className="h-[19.07px] w-[119.48px]"
                    />
                </Link>

                <nav className="hidden items-center gap-12.5 min-[769px]:flex">
                    {HEADER_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={`h-9 shrink-0 whitespace-nowrap ${HEADER_LINK_TYPOGRAPHY} transition-opacity hover:opacity-70`}
                            style={{ color: HEADER_TEXT_COLOR }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <Link
                    href="#contact"
                    className={`hidden h-[36px] w-[100px] ${HEADER_LINK_TYPOGRAPHY} underline transition-opacity hover:opacity-70 min-[769px]:block`}
                    style={{ color: HEADER_TEXT_COLOR }}
                >
                    Let&apos;s Talk
                </Link>

                <MobileMenu />
            </div>
        </header>
    );
}