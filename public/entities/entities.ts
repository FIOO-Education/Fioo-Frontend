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
}

export interface SelectedOption {
    selected: number | null;
    correctOption: boolean;
}