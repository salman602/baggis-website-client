import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


import { NavLink } from 'react-router-dom';
import { ListItemButton } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faColumns, faList, faGrinStars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import UserReview from '../UserReview/UserReview';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';




const drawerWidth = 250;

function Dashboard(props) {
    const { logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundImage: 'linear-gradient(to bottom, aquamarine , rgb(91,146,229))', color: 'white', height: '100%' }}>

            <Toolbar />
            {
                !admin && <div>
                    <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="Products" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink to={`${url}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faColumns} />
                            </ListItemIcon>
                            <ListItemText primary='Dashboard' />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/myorders`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faList} />
                            </ListItemIcon>
                            <ListItemText primary='My Orders' />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/review`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faGrinStars} />
                            </ListItemIcon>
                            <ListItemText primary='Review' />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/pay`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={['fab', 'amazon-pay']} />
                            </ListItemIcon>
                            <ListItemText primary='Pay' />
                        </ListItem>
                    </NavLink>
                </div>
            }




            {/* for admin */}

            {
                admin && <div>
                    <NavLink to={`${url}/manageorders`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faList} />
                            </ListItemIcon>
                            <ListItemText primary='Manage All Orders' />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/addproduct`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faList} />
                            </ListItemIcon>
                            <ListItemText primary='Add Product' />
                        </ListItem>
                    </NavLink>
                    <NavLink to={`${url}/makeadmin`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faList} />
                            </ListItemIcon>
                            <ListItemText primary='Make Admin' />
                        </ListItem>
                    </NavLink>
                </div>
            }

            <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <ListItem button>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </ListItemIcon>
                    <ListItemText primary='Logout' onClick={logOut} />
                </ListItem>
            </NavLink>




        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'rgba(127,255,212,0.2)', height: '100vh' }}>
            <CssBaseline />
            <AppBar

                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'white' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <FontAwesomeIcon icon={faColumns} />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div" sx={{ color: 'black' }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box

                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}

                >
                    {drawer}
                </Drawer>
                <Drawer

                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <UserReview />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>

                    <AdminRoute path={`${path}/manageorders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin />
                    </AdminRoute>


                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;