"use client";
import { useEffect } from "react";
type ErrorFallbackProps = {
    error: unknown;
    retry: () => void;
};
export default function ErrorFallback({ error, retry }: ErrorFallbackProps) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main
            className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center"
            role="alert"
        >
            <h1 className="text-3xl font-medium">Something went wrong</h1>
            <p>Unable to load the data. Please try again later.</p>
            <button
                type="button"
                onClick={retry}
                className="rounded border border-current px-5 py-2 transition-opacity hover:opacity-70"
            >
                Try again
            </button>
        </main>
    );
}
