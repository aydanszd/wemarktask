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
        throw new ApiError("Unable to connect to the API server.", undefined, {
            cause,
        });
    }

    if (!response.ok) {
        throw new ApiError(
            `API request failed (HTTP ${response.status}).`,
            response.status,
        );
    }

    try {
        return (await response.json()) as T;
    } catch (cause) {
        throw new ApiError("Unable to read the API response.", response.status, {
            cause,
        });
    }
}