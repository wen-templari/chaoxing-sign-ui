import { Button, ButtonBase, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { useNavigate, Outlet } from 'react-router-dom';
import React from 'react';
import './App.css';
import SettingsIcon from '@mui/icons-material/Settings';
function App() {
  const [open, setOpen] = React.useState(false);
  const [baseURL, setBaseURL] = React.useState("")

  const handleClickOpen = () => {
    let url = localStorage.getItem('baseUrl') || 'http://localhost:5000';
    setBaseURL(url)
    setOpen(true);
  };

  const handleClose = () => {
    localStorage.setItem('baseUrl', baseURL)
    setOpen(false);
  };
  const navigate = useNavigate()
  return (
    <div className="App">
      <div className='header'>
        <ButtonBase onClick={() => { navigate('/') }} sx={{
          border: 10,
          borderRadius: '50%',
          height: '40px',
          width: '40px',
          borderColor: 'primary.main',

        }}></ButtonBase>
        <SettingsIcon onClick={handleClickOpen} className="settingButton" sx={{ fontSize: 40 }} color="action" ></SettingsIcon>
        {/* <ButtonBase onClick={handleClickOpen} >设置</ButtonBase> */}
        <Dialog fullWidth={true} open={open} onClose={() => { setOpen(false) }}>
          <DialogTitle>设置</DialogTitle>
          <DialogContent>
            <DialogContentText>
              设置完成后请刷新页面
            </DialogContentText>
            <TextField
              margin="dense"
              id="baseURLInput"
              label="后端地址"
              value={baseURL}
              onChange={(e) => {
                setBaseURL(e.target.value)
              }}
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => { handleClose() }}>确认</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
