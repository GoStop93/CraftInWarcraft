export interface IRace {
    name: string;
    iconFull: string;
    iconPart: string;
    text?: string;
}

export interface IRaceBlockProps {
    background: string;
    logo: string;
    smallLogo: string;
    title: string;
    subtitle: string;
    color: string;
    races: IRace[];
}
