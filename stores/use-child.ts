import { Class, FooterActions, Activity, Student, Result } from "@/public/entities/entities";
import { create } from "zustand";

interface ChildStore {
    student: Student | null;
    setStudent: (student: Student | null) => void;

    footerActions: FooterActions[];
    setFooterActions: (footerActions: FooterActions[]) => void;

    subject: string | null;
    setSubject: (subject: string) => void;

    currentClass: Class | null;
    setCurrentClass: (currentClass: Class) => void;

    currentQuiz: Activity | null;
    setCurrentQuiz: (quiz: Activity | null) => void;

    result: Result | null;
    setResult: (result: Result | null) => void;
} 

export const useChildStore = create<ChildStore>((set) => ({
    student: null,
    setStudent: (student) => set({ student }),

    footerActions: [],
    setFooterActions: (footerActions) => set(({ footerActions })),

    subject: null,
    setSubject: (subject) => set({ subject }),

    currentClass: null,
    setCurrentClass: (currentClass) => set({ currentClass }),

    currentQuiz: null,
    setCurrentQuiz: (currentQuiz) => set({ currentQuiz }),

    result: null,
    setResult: (result) => set({ result })
}))