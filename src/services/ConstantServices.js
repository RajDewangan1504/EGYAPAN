import { SERVER_URL } from "../components/Utils"

export const allPatwari = async (id, token) => {
    const res = await fetch(`${SERVER_URL}patwari/getlist/${id}`);
    const result = await res.json();
    return result;
}

export const getVillagesByHalka = async (id, token) => {
    const res = await fetch(`${SERVER_URL}village/getlist/${id}`);
    const result = await res.json();
    return result;
}

export const getVillageById = async (tehsilId, token) => {
    const res = await fetch(`${SERVER_URL}village/getAll/${tehsilId}`);
    const result = await res.json();
    return result;
}

export const getGyapanTypes = async (token) => {
    const res = await fetch(`${SERVER_URL}category/getlist`);
    const result = await res.json();
    return result;
}

export const getGyapans = async (id, token) => {
    const res = await fetch(`${SERVER_URL}gyapan/getall/${id}`);
    const result = await res.json();
    return result;
}
export const getGyapansByDate = async (id, token, fromDate, toDate) => {
    console.log("id", id);
    console.log("token", token);
    console.log("formdate", fromDate);
    console.log("todate", toDate);
    try {
        const response = await fetch(`${SERVER_URL}gyapan/getbyDate/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Include token for authentication
            },
            body: JSON.stringify({
                fromDate, // Ensure the date is in 'YYYY-MM-DD' format before passing
                toDate,
            }),
        });
        console.log("response", response);

       
        const data = await response.json();
        return data;
      
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};


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

export const addVillage = async (data, token) => {
    try {
        const response = await fetch(`${SERVER_URL}village/create`, {
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







