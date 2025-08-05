import { Tracking } from "../pages/Tracking";
import { History } from "../pages/History";
import { Monition } from "../pages/Monition";
import type { Page } from "../types";

interface PageConfig {
  component: React.ComponentType;
  label: string;
  icon?: string;
}

export const pagesConfig: Record<Page, PageConfig> = {
  tracking: {
    component: Tracking,
    label: "Rastreio",
    icon: "📦",
  },
  history: {
    component: History,
    label: "Histórico",
    icon: "📋",
  },
  monition: {
    component: Monition,
    label: "Notificação",
    icon: "🔔",
  },
};
