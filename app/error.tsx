"use client";

import ErrorFallback from "@/src/ui/error-fallback";

type ErrorPageProps = {
    error: unknown;
    retry: () => void;
};

export default function ErrorPage({ error, retry }: ErrorPageProps) {
    return <ErrorFallback error={error} retry={retry} />;
}
