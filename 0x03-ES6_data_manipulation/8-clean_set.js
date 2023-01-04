export default function cleanSet(set, starString) {
  let result = '';

  if (!starString || starString.length === 0) {
    return '';
  }
  set.forEach((element) => {
    if (element && element.startsWith(starString)) {
      result += `${element.slice(starString.length)}-`;
    }
  });

  return result.slice(0, result.length - 1);
}
