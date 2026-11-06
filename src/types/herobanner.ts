export type HeroBannerProps = {
    title: string;
    image: string;
};

import type { FounderData } from "@/src/types/founder";
import type { ProgramData } from "@/src/types/programs";
import type { TextSliderData } from "@/src/types/slider";

export type FaqData = {
    question: string;
    answer: string;
};

export type XSchoolData = {
    banner_title: string;
    banner_image: string;
    about_title: string;
    about_description: string;
    about_images: { image: string }[];
    founders: FounderData[];
    programs: ProgramData[];
    faq_title: string;
    xschool_faq: FaqData[];
    text_slider: TextSliderData;
};