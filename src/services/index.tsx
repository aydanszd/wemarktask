import { apiGet } from "@/src/api";
import type { XSchoolData } from "@/src/types";

const BASE_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "https://admin.wemark.pro/api";

export async function getXSchool(): Promise<XSchoolData> {
    return apiGet<XSchoolData>(`${BASE_URL}/tasks-xschool/`, {
        next: { revalidate: 60 },
    });
}