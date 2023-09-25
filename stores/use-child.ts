import { Answer, FooterActions, Game, SelectedOption } from "@/public/entities/entities";
import { create } from "zustand";
import UserIcon from "@/public/images/profile-image.png";
import Cachorro from "@/public/images/cachorro.png";
import Rinoceronte from "@/public/images/rinoceronte.jpg";
import Cobra from "@/public/images/cobra.png";
import Camelo from "@/public/images/camelo.jpg";
import Peixe from "@/public/images/peixe.jpg";


interface ChildStore {
    footerActions: FooterActions[];
    setFooterActions: (footerActions: FooterActions[]) => void;

    userIcon: string;
    setUserIcon: (userIcon: string) => void;

    game: Game;
    setGame: (game: Game) => void;
    optionSelected: SelectedOption;
    setOptionSelected: (optionSelected: SelectedOption) => void;

    answers: Answer[];
    setAnswers: (answers: Answer[]) => void;
} 

export const useChildStore = create<ChildStore>((set) => ({
    footerActions: [],
    setFooterActions: (footerActions) => set(({ footerActions })),

    userIcon: UserIcon.src,
    setUserIcon: (userIcon) => set({ userIcon }),

    game: {
        currentGame: {
            id: null,
            questions: [
                {
                    question: "CA_RRO",
                    imgSrc: Cachorro.src,
                    options: [
                        {
                            option: "CHO",
                            isCorrect: true
                        },
                        {
                            option: "O",
                            isCorrect: false
                        },
                        {
                            option: "CO",
                            isCorrect: false
                        },
                        {
                            option: "CHA",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "RINOCE_TE",
                    imgSrc: Rinoceronte.src,
                    options: [
                        {
                            option: "RE",
                            isCorrect: false
                        },
                        {
                            option: "O",
                            isCorrect: false
                        },
                        {
                            option: "RON",
                            isCorrect: true
                        },
                        {
                            option: "RA",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "_BRA",
                    imgSrc: Cobra.src,
                    options: [
                        {
                            option: "CHO",
                            isCorrect: false
                        },
                        {
                            option: "CA",
                            isCorrect: false
                        },
                        {
                            option: "ZE",
                            isCorrect: false
                        },
                        {
                            option: "CO",
                            isCorrect: true
                        },
                    ]
                },
                {
                    question: "CA_LO",
                    imgSrc: Camelo.src,
                    options: [
                        {
                            option: "VA",
                            isCorrect: false
                        },
                        {
                            option: "ME",
                            isCorrect: true
                        },
                        {
                            option: "CO",
                            isCorrect: false
                        },
                        {
                            option: "CHA",
                            isCorrect: false
                        },
                    ]
                },
                {
                    question: "PEI_",
                    imgSrc: Peixe.src,
                    options: [
                        {
                            option: "XE",
                            isCorrect: true
                        },
                        {
                            option: "XO",
                            isCorrect: false
                        },
                        {
                            option: "DO",
                            isCorrect: false
                        },
                        {
                            option: "TO",
                            isCorrect: false
                        },
                    ]
                },
            ]
        },
        currentQuestion: 1,
        maxQuestionReached: 1
    },
    setGame: (game) => set({ game }),
    optionSelected: { selected: null, correctOption: false },
    setOptionSelected: (optionSelected) => set({ optionSelected }),

    answers: [],
    setAnswers: (answers) => set({ answers }),


}))