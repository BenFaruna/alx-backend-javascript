export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((x) => x.id);
  }
  return [];
}
