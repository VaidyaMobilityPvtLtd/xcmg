const MAX_PARAGRAPHS = 2;
const MAX_CHARS = 480;
const MAX_SENTENCES_SINGLE_BLOCK = 3;

/** Short, readable product copy for the detail sidebar (long catalog text is trimmed). */
export function displayProductDescription(raw: string | undefined | null, fallback: string): string {
  if (!raw?.trim()) return fallback;

  const paragraphs = raw
    .trim()
    .replace(/\r\n/g, "\n")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  let text: string;

  if (paragraphs.length > MAX_PARAGRAPHS) {
    text = paragraphs.slice(0, MAX_PARAGRAPHS).join("\n\n");
  } else if (paragraphs.length === 1 && paragraphs[0].length > MAX_CHARS) {
    const sentences = paragraphs[0].match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) ?? [paragraphs[0]];
    text = sentences
      .slice(0, MAX_SENTENCES_SINGLE_BLOCK)
      .join("")
      .trim();
  } else {
    text = paragraphs.join("\n\n");
  }

  if (text.length > MAX_CHARS) {
    text = `${text.slice(0, MAX_CHARS).replace(/\s+\S*$/, "").trim()}…`;
  }

  return text;
}
