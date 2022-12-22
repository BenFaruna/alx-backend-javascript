/* eslint-disable no-else-return */
export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let kIndex = 0;
      let lIndex = 0;

      const keys = Object.keys(report.allEmployees);
      return {
        next() {
          let employees = report.allEmployees[keys[kIndex]];
          if (kIndex < keys.length) {
            if (lIndex < employees.length) {
              lIndex += 1;
              return { done: false, value: employees[lIndex - 1] };
            } else {
              kIndex += 1;
              lIndex = 1;
              employees = report.allEmployees[keys[kIndex]];
              if (employees === undefined) {
                return { done: true, value: undefined };
              }
              return { done: false, value: employees[lIndex - 1] };
            }
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
