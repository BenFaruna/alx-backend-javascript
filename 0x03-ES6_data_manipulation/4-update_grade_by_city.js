/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((arr) => {
      newGrades.map((gradeArr) => {
        if (gradeArr.studentId === arr.id) {
          arr.grade = gradeArr.grade;
        } else {
          arr.grade = 'N/A';
        }
        return arr;
      });
      return arr;
    });
}
