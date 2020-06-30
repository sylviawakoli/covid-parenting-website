export type LanguageCSVRow = {
    languageCode: string;
    languageName: string;
    tipSheetNumber: number;
    title: string;
};

export type Language = {
    name: string;
    code: string;
};

export type TipSheet = {
    title: string;
    thumnailSrc: string;
    pdfSrc: string;
};