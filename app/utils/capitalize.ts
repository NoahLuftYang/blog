export function capitalize(word: string) {
  if (word === '') {
    throw new Error('Empty string');
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}
