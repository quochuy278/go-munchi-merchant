import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LogoutIcon from "@mui/icons-material/Logout";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useAppDispatch } from "../../../store/hooks";
import { clearSessionState } from "../../../utils/preference";
import { clear as clearReduxSessionState } from "../../../store/slices/session";


type Anchor = "top" | "left" | "bottom" | "right";


export default function Header({ loginData }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    const sessionState = {
      userId: 'Huy Bui',
      businessId: "Huy Dau Bui"
    };
    console.log('clear session state', sessionState);
    await clearSessionState();
    dispatch(clearReduxSessionState());
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="Dashboard" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem key="Dashboard" disablePadding>
          <ListItemButton href="/">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Profile" disablePadding>
          <ListItemButton href="/profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Setting" disablePadding>
          <ListItemButton href="/setting">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Logout" disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#F3F5F7" }}>
        <Toolbar>
          <div>
            <React.Fragment key={"left"}>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ padding: 0 }}
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon sx={{ color: "#000000" }} />
              </IconButton>
              <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </React.Fragment>
          </div>

          <Box sx={{ flex: 1 }} display="flex" justifyContent="space-between">
            {/* <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                backgroundColor: '#FFFFFF',
                                width: '125px',
                                height: '32px',
                                borderRadius: 5,
                                marginLeft: 2,
                            }}
                            component={Link}
                            to={'/'}
                        > */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="150px"
            >
              {/* <FactCheckIcon
                                    color="primary"
                                    sx={{ height: '15px', width: '15px', marginRight: '5px' }}
                                /> */}
              <Typography color={"black"} variant="h4">
                Munchi
              </Typography>
            </Box>
            {/* svg */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              width="150px"
            >
              {/* <FactCheckIcon
                                    color="primary"
                                    sx={{ height: '15px', width: '15px', marginRight: '5px' }}
                                /> */}
              {/* <img src={MunchiLogo} width={100} height={50} /> */}
            </Box>
            {/* </IconButton> */}
            <Box display={"flex"} alignItems="center">
              <Typography color={"black"} fontSize="16px" lineHeight="13px">
                Munchi
              </Typography>

              <Switch
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
                sx={{ color: "black" }}
              // onClick
              />
              <CircleIcon
                sx={{
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
                {...(isOpen ? { color: "success" } : { color: "warning" })}
              />
              {/* <Typography color={'#000000'} fontSize="12px" lineHeight="16px">
                                {isOpen ? t('restaurantStatus.open') : t('restaurantStatus.close')}
                            </Typography> */}
            </Box>

            {/* <Box display={"flex"} alignItems="center">
              <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => i18n.changeLanguage("en")}>en</Button>
                <Button onClick={() => i18n.changeLanguage("fi")}>fi</Button>
              </ButtonGroup>
            </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
