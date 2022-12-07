import { ProgramPayload } from '../dto/program-payload';
import api from './api'

const programServices = () => {

    async function registerProgram(body: ProgramPayload) {
        console.log("body no axios: ", body)
        return api.post(`/programs`, body);
    }

    async function getPrograms() {
        return api.get(`/programs`);
    }

    async function getProgramsById(id: string) {
        return api.get(`/programs/${id}`);
    }

    async function editProgram(id: string, body: ProgramPayload) {
        return api.put(`/programs/${id}`, body);
    }

    async function deleteProgram(id: string) {
        return api.delete(`/programs/${id}`);
    }

    return {
        registerProgram: registerProgram,
        getPrograms: getPrograms,
        getProgramsById: getProgramsById,
        editProgram: editProgram,
        deleteProgram: deleteProgram
    }
}

export default programServices