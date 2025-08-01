import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { Header, HeaderTitle, HeaderContent, HeaderFooter } from "./components";

const fetcher = async (url: string, code: string) => {
  const response = await axios.post(url, { code });
  return response.data;
};

export const App = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [trackingCode, setTrackingCode] = useState<string>("AC887698372BR");

  const { data, error, isLoading } = useSWR(
    shouldFetch && trackingCode
      ? ["http://localhost:3001/api/track", trackingCode]
      : null,
    ([url, code]) => fetcher(url, code),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const handleFind = () => {
    if (trackingCode.trim()) {
      setShouldFetch(true);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <Header
        variant="primary"
        size="lg"
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="PackFinder" className="w-8 h-8" />
          <div className="flex flex-col">
            <HeaderTitle>PackFinder</HeaderTitle>
            <span className="text-xs text-gray-500">
              Package tracking and notification
            </span>
          </div>
        </div>

        <HeaderContent className="flex-1 justify-center">
          <nav>
            <ul className="flex gap-6">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Histórico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Notificações
                </a>
              </li>
            </ul>
          </nav>
        </HeaderContent>

        <HeaderFooter>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              U
            </div>
            <span className="text-gray-700">User</span>
          </div>
        </HeaderFooter>
      </Header>

      <main className="flex-1 p-6">
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          {data && JSON.stringify(data, null, 2)}
        </pre>
      </main>
    </div>
  );
};
