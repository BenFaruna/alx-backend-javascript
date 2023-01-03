export default function cleanSet(set, startString) {
  let result = '';
  let temp = '';
  if (!startString) {
    return result;
  }

  for (const value of set) {
    if (value.startsWith(startString)) {
      temp = value.slice(startString.length);
      result += (result ? `-${temp}` : temp);
    }
  }
  return result;
}
