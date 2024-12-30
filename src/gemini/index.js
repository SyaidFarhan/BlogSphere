import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateContent(prompt) {
  try {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Invalid prompt: Must be a non-empty string");
    }

    const result = await model.generateContent(prompt);
    return result.response.text(); // Extract text content from the response
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

export default generateContent; // <-- Default export added
