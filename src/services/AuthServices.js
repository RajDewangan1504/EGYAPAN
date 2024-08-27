import { SERVER_URL } from "../components/Utils"

export const login = async(data) => {
    const response  = await fetch(`${SERVER_URL}tehsildar/login`,
        {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }
    );

    const res = await response.json();
    return res;
}