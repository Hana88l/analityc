import express from 'express';
import  {studentController} from './controllers/student.controller.js';

export const app = express();
app.use(express.json());


app.get('/students', studentController.getStudents);      
app.post('/students', studentController.createStudent);   
app.delete('/students/:id', studentController.deleteStudent); 

