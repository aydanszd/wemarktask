import Image from "next/image";
import Link from "next/link";
import logo from "@/src/assets/logo (4).svg";
import { HEADER_TEXT_COLOR } from "@/src/color";
import { HEADER_LINKS } from "@/src/const";
import { HEADER_LINK_TYPOGRAPHY } from "@/src/typography";

export default function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-20">
            <div className="mx-auto mt-6 flex h-9 w-[calc(100%-3rem)] max-w-330 items-center justify-between md:mt-10.5">
                <Link href="/" aria-label="Wemark">
                    <Image
                        src={logo}
                        alt="wemark"
                        width={120}
                        height={19}
                        priority
                        className="h-[19.07px] w-[119.48px]"
                    />
                </Link>

                <nav className="hidden items-center gap-12.5 lg:flex ">
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
                    className={`hidden h-9 w-25 ${HEADER_LINK_TYPOGRAPHY} underline transition-opacity hover:opacity-70 lg:block`}
                    style={{ color: HEADER_TEXT_COLOR }}
                >
                    Let&apos;s Talk
                </Link>

                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
                >
                    <span className="h-0.5 w-6" style={{ backgroundColor: HEADER_TEXT_COLOR }} />
                    <span className="h-0.5 w-6" style={{ backgroundColor: HEADER_TEXT_COLOR }} />
                </button>
            </div>
        </header>
    );
}