import { create } from 'zustand';

interface SidebarState {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: false,
  setIsExpanded: (expanded) => set({ isExpanded: expanded }),
}));