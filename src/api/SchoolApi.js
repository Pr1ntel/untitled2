import axios from "axios";

class SchoolApi {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/main"
        });
    }

    async getAllStudents() {
        return await this.#axios.get("/all-students");
    }

    async getAllAuditorys() {
        return await this.#axios.get("/all-auditorys");
    }

    async getAllTeachers() {
        return await this.#axios.get("/all-teachers");
    }
    async addNewStudent(studentsItem) {
        return await this.#axios.post("/new-students",studentsItem);
    }
    async addNewAuditorys(auditorysItem) {
        return await this.#axios.post("/new-auditorys",auditorysItem);
    }
    async addNewTeachers(teachersItem) {
        return await this.#axios.post("/new-teachers",teachersItem);
    }
    async addNewSubjects(subjectItem) {
        return await this.#axios.post("/new-subject",subjectItem);
    }
    async deleteTeachers(id) {
        return await this.#axios.delete(`delete-teacher/${id}`);
    }
    async deleteStudents(id) {
        return await this.#axios.delete(`delete-students/${id}`);
    }
    async deleteAuditorys(id) {
        return await this.#axios.delete(`delete-auditorys/${id}`);
    }
}


export default SchoolApi;