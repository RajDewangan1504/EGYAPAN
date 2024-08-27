import { createTheme } from "@mui/material"

export const bgColor = {
    primary : "#1B1A55",
}

export const muiTheme = createTheme({
    palette : {
        primary : {
            main : bgColor.primary
        }
    }
}) 

export const SERVER_URL = "https://zgyapan-backend.vercel.app/api/v1/"