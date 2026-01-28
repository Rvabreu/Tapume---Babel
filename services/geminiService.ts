
import { GoogleGenAI, Type } from "@google/genai";

// Always use process.env.API_KEY directly when initializing the client to follow guidelines
export const generateXisIdea = async (mood: string) => {
  // Creating a new instance right before the call ensures we use the latest injected API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Crie uma sugestão criativa e apetitosa de "Xis Gaúcho" baseada no seguinte humor/vibe: "${mood}". O xis deve ter um nome incrível, uma lista de ingredientes e uma breve descrição de dar água na boca.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            description: { type: Type.STRING }
          },
          required: ["name", "ingredients", "description"],
          propertyOrdering: ["name", "ingredients", "description"]
        }
      }
    });

    // Access text as a property, not a method, as per SDK guidelines
    const text = response.text;
    if (!text) {
      throw new Error("Resposta vazia do modelo");
    }

    // Clean up potential markdown code blocks (```json ... ```) which cause JSON.parse to fail
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.error("Erro ao gerar xis:", error);
    throw error;
  }
};
