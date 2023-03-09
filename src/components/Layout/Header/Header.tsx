import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleIcon from "@mui/icons-material/Circle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SettingsIcon from "@mui/icons-material/Settings";
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
  Snackbar,
  SwipeableDrawer,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  usePostActivateBusinessMutation,
  usePostDeactivateBusinessMutation,
} from "../../../store/slices/api";
import {
  clearSessionState as clearSessionRedux,
  selectSession,
  setBusinessStatus,
} from "../../../store/slices/session";
import { addSessionState, clearSessionState } from "../../../utils/preference";
import CenterContainer from "../../Container/CenterContainer";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Header({ loginData }: any) {
  const dispatch = useAppDispatch();
  const { businessId, enabled } = useAppSelector(selectSession);
  const [isOpen, setIsOpen] = useState<boolean>(enabled as boolean);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [state, setState] = useState({
    left: false,
  });
  const [
    postActivateBusiness,
    { isLoading: isActivate, isSuccess: activateSucess },
  ] = usePostActivateBusinessMutation();
  const [
    postDeactivateBusiness,
    { isLoading: isDeactivate, isSuccess: deactivateSucess },
  ] = usePostDeactivateBusinessMutation();
 

  if (!businessId) {
    return <CenterContainer>Something wrong happened</CenterContainer>;
  }


  const loading = isActivate || isDeactivate;
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

  const onActivateBusiness = async () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen)
    postActivateBusiness(businessId);
    dispatch(setBusinessStatus(isOpen));
    await addSessionState({
      enabled: !isOpen,
    });
    setSnackBarOpen(true);
    console.log("activate business");
  };
  const onDeactivateBusiness = async () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen)
    postDeactivateBusiness(businessId);
    dispatch(setBusinessStatus(isOpen));
    await addSessionState({
      enabled: !isOpen,
    });
    setSnackBarOpen(true);
    console.log("deactivate business");
  };

  const handleLogout = async () => {
    await clearSessionState();
    dispatch(clearSessionRedux());
  };

  const onCloseSnackBar = () => {
    setSnackBarOpen(false);
  };
  const navItems = [
    {
      id: 1,
      primaryText: "Dashboard",
      path: "/",
      onClick: undefined,
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      primaryText: "Profile",
      path: "/",
      onClick: undefined,
      icon: <AccountCircleIcon />,
    },
    {
      id: 3,
      primaryText: "Setting",
      path: "/",
      onClick: undefined,
      icon: <SettingsIcon />,
    },
    {
      id: 4,
      primaryText: "Logout",
      path: "/",
      onClick: handleLogout,
      icon: <LogoutIcon />,
    },
  ];

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
        {navItems.map((item) => {
          return (
            <ListItem key={item.primaryText} disablePadding>
              <ListItemButton onClick={item.onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.primaryText} />
              </ListItemButton>
            </ListItem>
          );
        })}
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
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="150px"
            >
              <Typography color={"black"} variant="h4">
                Munchi
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              width="150px"
            ></Box>
            {/* </IconButton> */}
            <Box display={"flex"} alignItems="center">
              <Typography color={"black"} fontSize="16px" lineHeight="13px">
                Munchi
              </Typography>

              <Switch
                checked={isOpen}
                {...(isOpen
                  ? { onClick: onDeactivateBusiness }
                  : { onClick: onActivateBusiness })}
                sx={{ color: "black" }}
                {...(loading ? { disabled: true } : { disabled: false })}
              />
              <CircleIcon
                sx={{
                  width: "10px",
                  height: "10px",
                  marginRight: "10px",
                }}
                {...(isOpen ? { color: "success" } : { color: "warning" })}
              />
            </Box>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackBarOpen}
              onClose={onCloseSnackBar}
              autoHideDuration={3000}
              {...(isOpen
                ? { message: "Business is online" }
                : { message: "Business is offline" })}
              // key={vertical + horizontal}
              sx={{
                ".MuiSnackbar-anchorOriginTopRight": {
                  marginBottom: 2,
                  backgroundColor: "white",
                },
                "@media (min-width: 600px)": {
                  top: "45px",
                  right: "60px",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
