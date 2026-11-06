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