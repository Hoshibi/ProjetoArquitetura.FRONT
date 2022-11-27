import api from './api'

const userServices = () => {

    async function exemplo() {
        return api.get(`/exemplo`);
    }

    return {
        exemplo: exemplo,
    }
}

export default userServices