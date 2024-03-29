export function camelize(str: string) {
  return str.replace(
    /(?:^\w|[A-Z]|\b\w|\s+)/g,
    function (match: string, index: number) {
      if (+match === 0) {
        return "";
      }

      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    }
  );
}
