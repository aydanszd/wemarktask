import type { ReactNode } from "react";
import Header from "@/src/layout/Header/header";
import Footer from "@/src/layout/Footer/footer";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className="relative bg-[#E0E0E0]">{children}</main>
            <Footer />
        </>
    );
}