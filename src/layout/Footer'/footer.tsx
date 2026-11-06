import Image from "next/image";
import logo from "@/src/assets/logo (5).svg";
import {
    FOOTER_BOTTOM_TYPOGRAPHY,
    FOOTER_LINK_TYPOGRAPHY,
    FOOTER_TITLE_TYPOGRAPHY,
} from "@/src/typography";
import { FOOTER_BACKGROUND_COLOR, FOOTER_TEXT_COLOR } from "@/src/color";
import BackToTop from "@/src/componetns/backtotop";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const COLUMNS: FooterColumn[] = [
    {
        title: "Sitemap",
        links: [
            { label: "Case Studies", href: "/case-studies" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Career", href: "/career" },
            { label: "Blog", href: "/blog" },
            { label: "News", href: "/news" },
            { label: "Vacancies", href: "/vacancies" },
        ],
    },
    {
        title: "Follow Us On",
        links: [
            { label: "Instagram", href: "https://instagram.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "YouTube", href: "https://youtube.com" },
            { label: "Facebook", href: "https://facebook.com" },
            { label: "Twitter", href: "https://twitter.com" },
        ],
    },
];

const linkClass = `${FOOTER_LINK_TYPOGRAPHY} opacity-50 transition-opacity duration-200 hover:opacity-100`;

const titleClass = FOOTER_TITLE_TYPOGRAPHY;

function GlobeIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer
            className="w-full"
            style={{
                backgroundColor: FOOTER_BACKGROUND_COLOR,
                color: FOOTER_TEXT_COLOR,
            }}
        >
            <div className="mx-auto w-full max-w-[1320px] px-5 pb-6 pt-12 lg:px-0 lg:pb-[37px] lg:pt-[70px]">
                {/* Yuxarı sıra: sütunlar + ox */}
                <div className="flex items-start justify-between gap-10">
                    {/* Mobil: 2 sütunlu grid | Desktop: flex */}
                    <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:w-auto lg:gap-[83px]">
                        {COLUMNS.map((col) => (
                            <nav key={col.title} aria-label={col.title}>
                                <h3 className={titleClass}>{col.title}</h3>
                                <ul className="mt-4 flex flex-col lg:mt-[30px]">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className={linkClass}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}

                        {/* Mobildə tam en (2 sütunu tutur) */}
                        <div className="col-span-2 lg:col-span-1">
                            <h3 className={titleClass}>For Partnerships</h3>
                            <div className="mt-4 flex flex-col lg:mt-[30px]">
                                <a href="mailto:partnership@wemark.az" className={linkClass}>
                                    partnership@wemark.az
                                </a>
                                <a href="tel:+994515555555" className={linkClass}>
                                    +994 51 555 55 55
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <h3 className={titleClass}>Office</h3>
                            <address
                                className={`mt-4 max-w-[200px] not-italic lg:mt-[30px] lg:w-[272px] lg:max-w-none ${linkClass} hover:opacity-50`}
                            >
                                Alibeyov Gardashlari 27, Sabail, Sabah Residence
                            </address>
                        </div>
                    </div>

                    {/* Yuxarı qayıt oxu: yalnız desktop */}
                    <div className="hidden lg:block">
                        <BackToTop />
                    </div>
                </div>

                {/* Mobil: dil seçimi xəttdən əvvəl */}
                <button
                    type="button"
                    className={`mt-16 flex items-center gap-2 uppercase opacity-50 transition-opacity hover:opacity-100 lg:hidden ${FOOTER_BOTTOM_TYPOGRAPHY}`}
                >
                    <GlobeIcon />
                    <span>Azerbaijani</span>
                    <span className="h-4 w-px bg-current opacity-50" aria-hidden="true" />
                    <span>English</span>
                </button>

                {/* Xətt */}
                <div className="mt-6 h-px w-full bg-[#e0e0e0]/30 lg:mt-[53px]" />

                {/* Logo */}
                <div className="mt-10 flex justify-center lg:mt-[61px]">
                    <Image
                        src={logo}
                        alt="Wemark"
                        width={970}
                        height={155}
                        className="h-auto w-full max-w-[970px]"
                    />
                </div>

                {/* Alt sıra */}
                <div className="mt-10 flex items-center justify-between lg:mt-[68px]">
                    <div
                        className={`flex flex-wrap items-center gap-x-5 uppercase opacity-50 lg:normal-case ${FOOTER_BOTTOM_TYPOGRAPHY}`}
                    >
                        <span>Copyright © 2024 Wemark</span>
                        <a href="/terms" className="hidden transition-opacity hover:opacity-70 lg:inline">
                            Terms &amp; Privacy
                        </a>
                    </div>
                    <div className="lg:hidden">
                        <BackToTop label="Back to top" />
                    </div>
                    <button
                        type="button"
                        className={`hidden items-center gap-2 opacity-50 transition-opacity hover:opacity-100 lg:flex ${FOOTER_BOTTOM_TYPOGRAPHY}`}
                    >
                        <GlobeIcon />
                        <span>Azərbaycan dili</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}