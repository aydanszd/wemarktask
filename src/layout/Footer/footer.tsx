import Image from "next/image";
import logo from "@/src/assets/logo (5).svg";
import {
    FOOTER_BOTTOM_TYPOGRAPHY,
    FOOTER_LINK_CLASS,
    FOOTER_TITLE_CLASS,
} from "@/src/typography";
import { FOOTER_BACKGROUND_COLOR, FOOTER_TEXT_COLOR } from "@/src/color";
import BackToTop from "@/src/componetns/backtotop";
import { FOOTER_COLUMNS } from "@/src/const/footer";

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
                <div className="flex items-start justify-between gap-10">
                    <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:w-auto lg:gap-[83px]">
                        {FOOTER_COLUMNS.map((col) => (
                            <nav key={col.title} aria-label={col.title}>
                            <h3 className={FOOTER_TITLE_CLASS}>{col.title}</h3>
                                <ul className="mt-4 flex flex-col lg:mt-[30px]">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <a href={link.href} className={FOOTER_LINK_CLASS}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                        <div className="col-span-2 lg:col-span-1">
                            <h3 className={FOOTER_TITLE_CLASS}>For Partnerships</h3>
                            <div className="mt-4 flex flex-col lg:mt-[30px]">
                                <a href="mailto:partnership@wemark.az" className={FOOTER_LINK_CLASS}>
                                    partnership@wemark.az
                                </a>
                                <a href="tel:+994515555555" className={FOOTER_LINK_CLASS}>
                                    +994 51 555 55 55
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <h3 className={FOOTER_TITLE_CLASS}>Office</h3>
                            <address
                                className={`mt-4 max-w-[200px] not-italic lg:mt-[30px] lg:w-[272px] lg:max-w-none ${FOOTER_LINK_CLASS} hover:opacity-50`}
                            >
                                Alibeyov Gardashlari 27, Sabail, Sabah Residence
                            </address>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <BackToTop />
                    </div>
                </div>
                <button
                    type="button"
                    className={`mt-16 flex items-center gap-2 uppercase opacity-50 transition-opacity hover:opacity-100 lg:hidden ${FOOTER_BOTTOM_TYPOGRAPHY}`}
                >
                    <GlobeIcon />
                    <span>Azerbaijani</span>
                    <span className="h-4 w-px bg-current opacity-50" aria-hidden="true" />
                    <span>English</span>
                </button>
                <div className="mt-6 h-px w-full bg-[#e0e0e0]/30 lg:mt-[53px]" />
                <div className="mt-10 flex justify-center lg:mt-[61px]">
                    <Image
                        src={logo}
                        alt="Wemark"
                        width={970}
                        height={155}
                        className="h-auto w-full max-w-[970px]"
                    />
                </div>
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