type ApiRequestInit = RequestInit & {
    next?: {
        revalidate?: number;
    };
};

export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status?: number,
        options?: ErrorOptions,
    ) {
        super(message, options);
        this.name = "ApiError";
    }
}

export async function apiGet<T>(
    url: string,
    init?: ApiRequestInit,
): Promise<T> {
    let response: Response;

    try {
        response = await fetch(url, init);
    } catch (cause) {
        throw new ApiError("API serverinə qoşulmaq mümkün olmadı.", undefined, {
            cause,
        });
    }

    if (!response.ok) {
        throw new ApiError(
            `API sorğusu uğursuz oldu (HTTP ${response.status}).`,
            response.status,
        );
    }

    try {
        return (await response.json()) as T;
    } catch (cause) {
        throw new ApiError("API cavabını oxumaq mümkün olmadı.", response.status, {
            cause,
        });
    }
}