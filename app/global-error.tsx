"use client";

import ErrorFallback from "@/src/ui/error-fallback";

type GlobalErrorProps = {
    error: unknown;
    retry: () => void;
};

export default function GlobalError({ error, retry }: GlobalErrorProps) {
    return (
        <html lang="az">
            <body>
                <ErrorFallback error={error} retry={retry} />
            </body>
        </html>
    );
}
