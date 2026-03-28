export const CreateStudentDTO = (data) => ({
    name: data.name,
    email: data.email,
    grade: data.grade,
    gpa: data.gpa
});

export const StudentResponseDTO = (student) => ({
    id: student.id,
    name: student.name,
    grade: student.grade
});