export default function isLink(str) {
  return /https?:\/\//i.test(str);
}