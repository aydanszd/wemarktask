export type FaqData = {
    question: string;
    answer: string;
};

export type QuestionsProps = {
    title: string;
    items: FaqData[];
};
