import type { FooterColumn } from "@/src/types/footer";

export const FOOTER_COLUMNS: FooterColumn[] = [
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
