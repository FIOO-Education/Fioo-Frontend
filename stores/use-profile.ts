import { FooterActions } from "@/public/entities/entities";
import { create } from "zustand";
import UserIcon from "@/public/images/profile-image.png";

interface ChildStore {
    footerActions: FooterActions[];
    setFooterActions: (footerActions: FooterActions[]) => void;

    userIcon: string;
    setUserIcon: (userIcon: string) => void;
}

export const useChildStore = create<ChildStore>((set) => ({
    footerActions: [],
    setFooterActions: (footerActions) => set(({ footerActions })),

    userIcon: UserIcon.src,
    setUserIcon: (userIcon) => set({ userIcon }),
}))