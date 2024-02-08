export interface BannerProps {
    id: number;
    background: string;
    img: string,
    service: string,
    description: BannerDesc;
    features: string[],
    featDesc?: string[];
}

export interface BannerDesc {
    desc: string;
    descSpan: string;
    descLast?: string | null;
    color?: string;
};