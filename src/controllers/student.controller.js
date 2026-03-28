import { studentService } from '../services/student.service.js';
import { CreateStudentDTO } from '../dto/student.dto.js';

export const studentController = {
    async getStudents(req, res) {
        const data = await studentService.getAllStudents();
        res.json(data);
    },
    async createStudent(req, res) {
        try {
            const dto = CreateStudentDTO(req.body); 
            const result = await studentService.registerStudent(dto);
            res.status(201).json(result); 
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    async deleteStudent(req, res) {
        await studentService.removeStudent(req.params.id);
        res.status(204).send();
    }
};