const e = {
    students: [] 
};

export const studentRepository = {
    async findAll() {
        return e.students; 
    },
    async create(data) {
        const newStudent = { id: e.students.length + 1, ...data };
        e.students.push(newStudent); 
        return newStudent;
    },
    async deleteById(id) {
        const index = e.students.findIndex(s => s.id === Number(id));
        if (index !== -1) {
            e.students.splice(index, 1);
            return true;
        }
        return false;
    }
};