import { SERVER_URL } from "../components/Utils"

export const allPatwari = async(id, token) => {
    const res = await fetch(`${SERVER_URL}patwari/getlist/${id}`);
    const result = await res.json();
    return result;
}

export const getVillagesByHalka = async(halkaNumber, token) => {
    const res = await fetch(`${SERVER_URL}village/getlist/${halkaNumber}`);
    const result = await res.json();
    return result;
}

export const getGyapanTypes = async( token) => {
    const res = await fetch(`${SERVER_URL}category/getlist`);
    const result = await res.json();
    return result;
}

export const getGyapans = async(id,token) => {
    const res = await fetch(`${SERVER_URL}gyapan/getall/${id}`);
    const result = await res.json();
    return result;
}

export const createGyapan = async (data, token) => {
    try {
        const response = await fetch(`${SERVER_URL}gyapan/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to create gyapan');
        }
        return result;
    } catch (error) {
        console.error('An error occurred while creating gyapan:', error);
        throw error;
    }
};




