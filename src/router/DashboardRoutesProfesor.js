
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TodayIcon from '@material-ui/icons/Today';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { dispatchLogout } from '../controllers/auth';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { AsignaturasPageProfesor } from '../pages-profesor/AsignaturasPageProfesor';
import { WelcomePageProfesor } from '../pages-profesor/WelcomePageProfesor';
import { NotasPageProfesor } from '../pages-profesor/NotasPageProfesor';
import { HorarioPageProfesor } from '../pages-profesor/HorarioPageProfesor';
import { AsignaturaPageProfesor } from '../pages-profesor/AsignaturaPageProfesor';
import { AsistenciaPageProfesor } from '../pages-profesor/AsistenciaPageProfesor';
import { CursoPage } from '../pages-profesor/CursoPage';
import { dispatchCursoProfesorLogout } from '../controllers/cursos-profesor';
import { dispatchCleanAsistencia } from '../controllers/asistenciaProfesor';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#F5F7FB',
    color: 'black'

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',

    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#4D4AA0',
    color: 'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#F5F7FB'

  },
}));
export const DashBoardRoutesProfesor = (props) => {
  const dispatch = useDispatch();
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClick = () => {
    dispatch(dispatchLogout());
    dispatch(dispatchCursoProfesorLogout());
    dispatch(dispatchCleanAsistencia());
  }

  const drawer = (
    <div className='centrar'>
      <div className="edu7" >
        <img  className="edu7" alt="Logo de edu7" src={`../assets/edu7logo.png`} /></div>
      <div>
        <Link className="li" to="/">
          <ListItem button key={'Dashboard'}>
            <ListItemIcon > <DashboardIcon className="texto-activo" /></ListItemIcon>
            <ListItemText className="texto-activo" primary={'Dashboard'} />
          </ListItem>
        </Link>
        <Link className="li" to="/curso">
          <ListItem button key={'curso'}>
            <ListItemIcon> <SchoolIcon className="texto-inactivo" /></ListItemIcon>
            <ListItemText className="texto-inactivo" primary={'Curso'} />
          </ListItem>
        </Link>
        <Link className="li" to="/notas">
          <ListItem button key={'notas'}>
            <ListItemIcon> <AssignmentIcon className="texto-inactivo" /></ListItemIcon>
            <ListItemText className="texto-inactivo" primary={'Notas'} />
          </ListItem>
        </Link>
        <Link className="li" to="/horario">
          <ListItem button key={'horario'}>
            <ListItemIcon> <TodayIcon className="texto-inactivo" /></ListItemIcon>
            <ListItemText className="texto-inactivo" primary={'Horario'} />
          </ListItem>
        </Link>
        <Link className="li" to="/asistencia">
          <ListItem button key={'asistencia'}>
            <ListItemIcon> <AssignmentTurnedInIcon className="texto-inactivo" /></ListItemIcon>
            <ListItemText className="texto-inactivo" primary={'Asistencia'} />
          </ListItem>
        </Link>
      </div>
      <div></div>


    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar className="flex">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>

            </Typography>
            <Button onClick={onClick} color="secondary" variant="outlined" className="boton" >Logout</Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/" component={WelcomePageProfesor} />
            <Route path="/curso" component={CursoPage} />
            <Route path="/asignaturasCurso/:idCurso" component={AsignaturasPageProfesor} />
            <Route path="/asignaturaProfesor/:idAsignatura/:idCurso" component={AsignaturaPageProfesor} />
            <Route path="/notas" component={NotasPageProfesor} />
            <Route path="/horario" component={HorarioPageProfesor} />
            <Route path="/asignatura/:idAsignatura" component={AsignaturaPageProfesor} />
            <Route path="/asistencia" component={AsistenciaPageProfesor} />

          </Switch>
        </main>
      </div>




    </Router>
  )
}