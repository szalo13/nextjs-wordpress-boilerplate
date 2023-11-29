export const calculateReadTime = (
  text: string,
  wordsPerMinute = 200
): string => {
  const words = text.trim().split(/\s+/).length; // Split by whitespace and count words
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes); // Round up to the next minute
  return String(readTime);
};
