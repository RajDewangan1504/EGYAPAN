import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import "../../../global.css"
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const CustomPopup = ({ open, setOpen, children, maxWidth = "md" }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (

        <Dialog
            fullWidth={true}
            maxWidth={maxWidth}
            open={open}
            className={styles.main}
            onClose={handleClose}
        >
            <div  className={styles.flex}>
                <Button onClick={handleClose}><FontAwesomeIcon icon="fa-solid fa-xmark" fontSize={"20px"} color='#0005' /></Button>
            </div>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default CustomPopup;