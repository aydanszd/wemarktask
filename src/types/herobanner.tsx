export type HeroBannerProps = {
    title: string;
    image: string;
};

export type FounderData = {
    title: string;
    description: string;
    name: string;
    position: string;
    image: string;
    linkedin_url: string;
    instagram_url: string;
};

export type ProgramData = {
    title: string;
    description: string;
};

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
    text_slider: {
        xline1: string;
        xline2: string;
        xline3: string;
    };
};