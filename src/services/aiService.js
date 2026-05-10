import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function enhanceResume(resumeData) {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    throw new Error(
      'Please add your Gemini API key to the .env file as VITE_GEMINI_API_KEY. ' +
      'Get a free key at https://aistudio.google.com/'
    );
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `You are a professional resume writer and career coach. Analyze the following resume data and enhance it to be professional, ATS-optimized, and compelling. 

RULES:
1. Transform casual language into strong, professional bullet points
2. Start each bullet with a powerful action verb (Led, Developed, Spearheaded, Engineered, Orchestrated, etc.)
3. Quantify achievements with numbers, percentages, or metrics where possible
4. Create a compelling professional summary/objective (2-3 sentences max)
5. Keep each bullet point concise (one line, under 120 characters ideally)
6. Optimize language for ATS (Applicant Tracking Systems)
7. Fix any grammar or spelling issues
8. Maintain the factual accuracy — do NOT invent information that wasn't provided
9. If information is sparse, enhance what's given without fabricating details

INPUT RESUME DATA:
${JSON.stringify(resumeData, null, 2)}

RESPOND WITH ONLY valid JSON matching this exact structure (no markdown, no code fences):
{
  "objective": "enhanced professional summary string",
  "experience": [
    {
      "company": "original company",
      "role": "enhanced role title if appropriate",
      "startDate": "original",
      "endDate": "original",
      "current": false,
      "description": "enhanced description",
      "bullets": ["enhanced bullet 1", "enhanced bullet 2", "enhanced bullet 3"]
    }
  ],
  "projects": [
    {
      "name": "original name",
      "technologies": ["original tech"],
      "description": "enhanced description",
      "bullets": ["enhanced bullet 1", "enhanced bullet 2"],
      "link": "original link"
    }
  ],
  "achievements": [
    {
      "title": "original or enhanced title",
      "description": "enhanced description",
      "date": "original"
    }
  ]
}

Only include sections that had content in the input. If a section is empty, omit it from the response.`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    let text = response.text();

    // Clean the response — remove markdown code fences if present
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    const enhanced = JSON.parse(text);
    return enhanced;
  } catch (error) {
    if (error.message?.includes('API key')) {
      throw new Error('Invalid Gemini API key. Please check your .env file.');
    }
    if (error instanceof SyntaxError) {
      throw new Error('AI returned an unexpected format. Please try again.');
    }
    throw new Error(`AI enhancement failed: ${error.message}`);
  }
}
