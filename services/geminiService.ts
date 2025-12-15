import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILLS, EDUCATION } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Ting Teck Chuan, a Software Developer. 
Your goal is to answer questions about Ting's professional background, skills, and experience based STRICTLY on the provided context.
Speak in the first person ("I", "my") as if you are Ting Teck Chuan.
Be professional, humble, enthusiastic, and detail-oriented.
Keep answers concise but informative.

Context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.title}
Summary: ${PERSONAL_INFO.summary}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.duration}). Key Tech: ${e.techStack.join(', ')}. Details: ${e.description.join('. ')}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.level}/100)`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} from ${e.institution}`).join('\n')}

If asked about something not in the resume, politely state that you focus on your professional history provided here.
`;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found. Chat functionality will be limited.");
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    try {
      initializeChat();
    } catch (error) {
      yield "I'm sorry, my AI brain isn't connected right now (API Key missing). Please check the code configuration.";
      return;
    }
  }

  if (chatSession) {
    try {
      const result = await chatSession.sendMessageStream({ message });
      for await (const chunk of result) {
         const response = chunk as GenerateContentResponse;
         if (response.text) {
           yield response.text;
         }
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      yield "I encountered a temporary error processing your request. Please try again.";
    }
  }
};