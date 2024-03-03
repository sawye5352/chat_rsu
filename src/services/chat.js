import request from "./request";

export const getChatResponse = async (options) => {
  try {
    const axiosInstance = request(options); // Get Axios instance from request.js
    const response = await axiosInstance.post("/chat", options.body, {
      headers: options.headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};
