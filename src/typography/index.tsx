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

export const ABOUT_TITLE_TYPOGRAPHY =
    "[font-family:'TT_Firs_Neue_Trl',var(--font-tt-hoves),sans-serif] text-[clamp(3rem,6.25vw,90px)] font-medium uppercase leading-[100px] tracking-normal align-middle";

export const FOUNDER_TITLE_TYPOGRAPHY =
    "[font-family:'TT_Firs_Neue_Trl',var(--font-tt-hoves),sans-serif] text-[clamp(3rem,6.25vw,90px)] font-medium uppercase leading-[100px] tracking-normal align-middle";

export const PROGRAMS_TITLE_TYPOGRAPHY = ABOUT_TITLE_TYPOGRAPHY;

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
