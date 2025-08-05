import { useAtom } from "jotai";
import { pageAtom } from "../context";
import type { Page } from "../types";

export const usePage = () => {
  const [currentPage, setCurrentPage] = useAtom(pageAtom);

  function navigate(page: Page): void {
    setCurrentPage(page);
  }

  return {
    navigate,
    currentPage,
  };
};
