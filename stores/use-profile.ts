import { FooterActions } from "@/public/entities/entities";
import { create } from "zustand";

interface ChildStore {
    footerActions: FooterActions[];
    setFooterActions: (footerActions: FooterActions[]) => void;
}

export const useChildStore = create<ChildStore>((set) => ({
    footerActions: [],
    setFooterActions: (footerActions) => set(({ footerActions })),
}))