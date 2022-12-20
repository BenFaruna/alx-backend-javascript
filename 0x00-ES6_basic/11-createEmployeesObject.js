export default function createEmployeesObject (departmentName, employees) {
  const departments = {
    [`${departmentName}`]: {
      employees
    }
  };
  return departments;
}
