import localFont from "next/font/local";

export const ttHoves = localFont({
    src: [
        {
            path: "../fonts/TTHoves-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/TTHoves-Medium.otf",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-tt-hoves",
    display: "swap",
});

export const HEADER_LINK_TYPOGRAPHY = "text-[24px] font-medium";

export const HEADER_MENU_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[16px] font-medium leading-[28px] text-center align-middle";

export const ABOUT_TITLE_TYPOGRAPHY =
    "[font-family:'TT_Firs_Neue_Trl',var(--font-tt-hoves),sans-serif] text-[clamp(3rem,6.25vw,90px)] font-medium uppercase leading-[100px] tracking-normal align-middle";

export const FOUNDER_TITLE_TYPOGRAPHY =
    "[font-family:'TT_Firs_Neue_Trl',var(--font-tt-hoves),sans-serif] text-[24px] font-medium uppercase leading-[1.3] tracking-normal align-middle md:text-[clamp(3rem,6.25vw,90px)] md:leading-[100px]";

export const PROGRAMS_TITLE_TYPOGRAPHY =
    "[font-family:'TT_Firs_Neue_Trl',var(--font-tt-hoves),sans-serif] text-[24px] font-medium uppercase leading-[1.3] tracking-normal align-middle md:text-[clamp(3rem,6.25vw,90px)] md:leading-[100px]";

export const SLIDER_TEXT_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[60px] font-medium leading-[76px] tracking-[0] uppercase";

export const FAQ_TITLE_TYPOGRAPHY = ABOUT_TITLE_TYPOGRAPHY;

export const FAQ_TEXT_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[30px] font-normal leading-[44px]";

export const FOOTER_TITLE_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[30px] font-medium leading-[44px] capitalize";

export const FOOTER_LINK_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[24px] font-medium leading-[36px]";

export const FOOTER_BOTTOM_TYPOGRAPHY =
    "[font-family:var(--font-tt-hoves)] text-[16px] font-normal leading-[32px] uppercase";

export const FOOTER_LINK_CLASS =
    `${FOOTER_LINK_TYPOGRAPHY} opacity-50 transition-opacity duration-200 hover:opacity-100`;

export const FOOTER_TITLE_CLASS = FOOTER_TITLE_TYPOGRAPHY;
