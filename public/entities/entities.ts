export interface FooterActions {
    src: string;
    route: string;
    active: boolean;
}

export interface Class {
    codClass: number;
    nameClass: string;
    title: string;
    description: string;
    videoLink: string;
    subject: string;
    viewed: boolean;
}

export interface Activity {
    codActivity: number;
    title: string;
    subject: string,
    codClass: number | null;
    questions: Question[];
}

export interface Student {
    codGuardian: number;
    codstudent: number;
    cognitiveLevel: string | null;
    username: string;
    educationalLevel: string;
    image: string;
}

export interface Curriculum {
    codGrade?: number;
    codActivity: number;
    codStudent: number;
    grade: number;
    realizationDate: Date;
}

export interface Question {
    codQuestion: number;
    question: string;
    image: string;
    codActivity: number;
    alternatives: Alternative[];
}

export interface Alternative {
    codAlternative: number;
    alternative: string;
    correct: boolean;
    codQuestion: number;
}

export interface Result {
    rightAnswer: number;
    totalQuestion: number;
}

export interface Action {
    id?: number;
    actionDate: Date;
    codStudent: number;
    codClass: number | null;
    codActivity: number;
}