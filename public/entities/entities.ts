export interface FooterActions {
    src: string;
    route: string;
    active: boolean;
}

export interface GameOption {
    option: string;
    isCorrect: boolean;
}

export interface GameQuestion {
    question: string;
    imgSrc: string;
    options: GameOption[];
}

export interface Game {
    currentGame: {
        id: number | null;
        questions: GameQuestion[];
    };
    currentQuestion: number;
    maxQuestionReached: number;
}

export interface SelectedOption {
    selected: number | null;
    correctOption: boolean;
}

export interface Answer {
    questionId: number;
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
    image: string;
    subject: string,
    codClass: number;
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
    codGrade: number;
    activity: Activity;
    codStudent: number;
    grade: number;
    realizationDate: Date;
}