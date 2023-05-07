export async function getOpenAIRes(message: string, context: object | undefined) {

    const text = (context? JSON.stringify(context): "") + message;
    console.log(text);
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": text,
        "max_tokens": 2048,
      }),
    });
  
    const data = await response.json();
    return data;
  }