import { FaBars } from "react-icons/fa"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Sidebar from './Sidebar';
export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 256 }} role="presentation" onClick={toggleDrawer(false)}>
      <Sidebar open={open}/>
      <Divider />
    </Box>
  );

  return (
    <div className='flex md:hidden'>
      <Button onClick={toggleDrawer(true)}><FaBars className="text-4xl text-black" /></Button> 
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
