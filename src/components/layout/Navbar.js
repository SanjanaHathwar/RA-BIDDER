import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import Home from '../home/Home';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
 
}));

const Navbar = () => {
  const classes = useStyles();
 
 


  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
            position="fixed"
            style={{backgroundColor:'#23374D'}}
            
        >
            <Toolbar style={{minHeight: 61}}>
            
            </Toolbar>
        </AppBar>
      
        <main>
            <div className={classes.drawerHeader} />
            <div>
                <Home/>
            </div>
        </main>
    </div>
  );
}

export default Navbar