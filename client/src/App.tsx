import {
  Sidebar,
  SidebarItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "./components";
import useSWR from "swr";
import { useState } from "react";
import { usePage } from "./hooks";
import { fetcher } from "./services";
import { pagesConfig } from "./pages";
import type { Page } from "./types";

export const App = () => {
  const { currentPage, navigate } = usePage();
  const [trackingCode, setTrackingCode] = useState<string>("AC887698372BR");

  const { data, error, isLoading } = useSWR(
    trackingCode ? ["http://localhost:3001/api/track", trackingCode] : null,
    ([url, code]) => fetcher(url, code),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const CurrentPageComponent = pagesConfig[currentPage].component;

  return (
    <div className="w-screen h-screen flex flex-row overflow-hidden bg-neutral-100 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-100">
      <Sidebar>
        <SidebarHeader>PackFinder.io</SidebarHeader>
        <SidebarContent>
          {Object.entries(pagesConfig).map(([pageKey, config]) => (
            <SidebarItem
              key={pageKey}
              onClick={() => navigate(pageKey as Page)}
            >
              {config.icon} {config.label}
            </SidebarItem>
          ))}
        </SidebarContent>
        <SidebarFooter>Versão 1.0.0</SidebarFooter>
      </Sidebar>

      <main className="flex-1 overflow-y-auto">
        <CurrentPageComponent />
      </main>
    </div>
  );
};
