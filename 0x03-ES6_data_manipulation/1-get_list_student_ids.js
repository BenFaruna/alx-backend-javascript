export default function getListStudentIds(idx) {
  if (typeof idx === 'object') {
    return idx.map((student) => student.id);
  }
  return [];
}
