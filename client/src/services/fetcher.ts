import axios from "axios";

export const fetcher = async (url: string, code: string) => {
  const response = await axios.post(url, { code });
  return response.data;
};
