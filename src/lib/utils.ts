export function isConfiguredUrl(value: string) {
  return /^https?:\/\//.test(value);
}
