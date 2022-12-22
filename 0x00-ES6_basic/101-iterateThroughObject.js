export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const iterator of reportWithIterator) {
    employees = employees ? `${employees} | ${iterator}` : iterator;
  }
  return employees;
}
