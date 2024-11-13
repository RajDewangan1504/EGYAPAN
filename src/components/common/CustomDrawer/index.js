import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Sidebar from '../../sideBar/Sidebar';

export default function TemporaryDrawer({setOpen,open}) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // };

 

  return (
    <div >
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(false)}>
        <div className='d-flex flex-1'>

        {/* <p>hello</p> */}
          <Sidebar/>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}
