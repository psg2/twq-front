export default function dateFromText(text) {
  const day = text.substring(0, 2);
  const month = Number(text.substring(2, 4)) - 1;
  const year = text.substring(4);
  return new Date(year, month, day);
}
