export function getRoute() {
  const base = '/BOUQUET-MAKER';
  const path = location.pathname.replace(base, '') || '/';
  return path;
}