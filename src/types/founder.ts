export type FounderData = {
    title: string;
    description: string;
    name: string;
    position: string;
    image: string;
    linkedin_url: string;
    instagram_url: string;
};

export type FounderProps = {
    founders: FounderData[];
};