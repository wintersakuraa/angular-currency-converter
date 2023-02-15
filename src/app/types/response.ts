export interface Response {
    base: string;
    date: string;
    motd: {
        msg: string;
        url: string;
    };
    rates: Record<string, number>;
    success: boolean;
}
