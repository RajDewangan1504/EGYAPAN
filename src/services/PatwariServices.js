import { SERVER_URL } from "../components/Utils"

export const addPatwari = async(data, token) => {
    const res = await fetch(`${SERVER_URL}patwari/register`, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body : JSON.stringify(data)
    });
    const result = await res.json();
    return result;
}

// export const getAllPatwari = async(id, token) => {
//     const res = await fetch(`${SERVER_URL}patwari/tehsil/${id}`);
//     const result = await res.json();
//     return result;
// }