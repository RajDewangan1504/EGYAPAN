import { createTheme } from "@mui/material"

export const bgColor = {
    primary: "#1B1A55",
}

export const muiTheme = createTheme({
    palette: {
        primary: {
            main: bgColor.primary
        }
    }
})

export const convertISOtoDate = (dateString) => {
    const date = new Date('2024-09-22T04:57:00.234Z');
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th'; 
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getUTCFullYear();
    // const hours = date.getUTCHours() % 12 || 12; // For 12-hour format
    // const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    // const ampm = date.getUTCHours() >= 12 ? 'PM' : 'AM';

   
    return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;

  
}

export const convertDateToTimestamp = (dateTimeString) => {
    const dateObject = new Date(dateTimeString);

    // Format the date and time components
    const year = dateObject.getUTCFullYear();
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    const hours = String(dateObject.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');
    const seconds = String(dateObject.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(dateObject.getUTCMilliseconds()).padStart(3, '0');

    // Combine the formatted components into the desired format
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}+00:00`;
    return formattedDateTime;

}

export const SERVER_URL = "https://zgyapan-backend.vercel.app/api/v1/"
// export const SERVER_URL = "http://localhost:9000/api/v1/"
