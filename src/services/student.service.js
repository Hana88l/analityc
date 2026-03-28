import { studentRepository } from '../repositories/student.repository.js';
import { StudentResponseDTO } from '../dto/student.dto.js';

export const studentService = {
    async getAllStudents() {
        const students = await studentRepository.findAll();
        return students.map(s => StudentResponseDTO(s)); 
    },
    async registerStudent(dto) {
        if (dto.gpa < 0 || dto.gpa > 4) { 
            throw new Error("GPA 0-4-iin hoorond bh ystoi.");
        }
        const student = await studentRepository.create(dto);
        return StudentResponseDTO(student);
    },
    async removeStudent(id) {
        return await studentRepository.deleteById(id);
    }
};