import api from "./api";


export default async function getPhotographer(username: string): Promise<any> {
    try {
        const res = await api.users.get({ username });
        if (res.status === 200 && res.response) {
            return { raw: res, error: false };
        } else {
            return { raw: res, error: true };
        }
    } catch (e) {
        return { raw: null, error: true };
    }
}
