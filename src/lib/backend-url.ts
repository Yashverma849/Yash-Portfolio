export function getBackendUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_CHATBOT_API_URL ||
    process.env.CHATBOT_API_URL ||
    process.env.API_URL ||
    'https://portfolio-ai-icll.onrender.com'
  ).replace(/\/$/, '');
}
