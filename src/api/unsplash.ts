// src/api/unsplash.ts
import axios from "axios";
import { ImgData } from "../types";

const ACCESS_KEY = "4lKKdkfWCfDLZYT9-8NaB0SDVimhhTVfwjX3NlnOhYs";

export const fetchImages = async (
  searchTerm: string,
  page: number = 1
): Promise<ImgData> => {
  const response = await axios.get<ImgData>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: ACCESS_KEY,
        page,
        query: searchTerm,
        orientation: "landscape",
      },
    }
  );

  return response.data;
};
