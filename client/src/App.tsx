import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        const response = await axios.post("http://localhost:3001/api/track", {
          code: "BR123456789BR",
        });

        if (response.status >= 200 && response.status < 300) {
          setData(response.data);
        } else {
          console.error(`
            API request failed with status ${response.status}
            Response: ${JSON.stringify(response.data)}
           `);
        }
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "An unknown error occurred";
        throw new Error(`API request failed: ${message}`);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
