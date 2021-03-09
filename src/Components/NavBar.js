import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import styled from 'styled-components';
import Theme from '../Constants/Theme';

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { NavBarData } from "../Constants/NavBarData";


const menuButtonData = NavBarData;

const MyAppBar = styled(AppBar)`
  background-color: ${props => props.theme.palette.primary.main};
  padding-left: 2rem;
  height: 4rem;

  ${props => props.theme.breakpoints.down("xs")} {
    height: 3.5rem;
  }
`;

const MyTypography = styled(Typography)`
  color: ${props => props.theme.palette.primary.contrastText};
  font-family: Montserrat;
  font-weight: 700;
  ${props => props.theme.breakpoints.down("sm")} {
    font-size: 2rem;
  }
`;

const MyToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const MyButtonDiv = styled.div`
  padding-right: 2rem;
`;

const MyNavBarButton = styled(Button)`
  color: ${props => props.theme.palette.primary.contrastText};
  font-family: Raleway;
  font-weight: 600;
  font-size: 1.3rem;
  margin-left: 2rem;
  text-transform: none;
`;

const MyMenuIcon = styled(MenuIcon)`
  width: 2rem;
  height: 2rem;
`
const MyMenuItem = styled(MenuItem)`
  font-family: Raleway;
  font-weight: 600;
`;

const MyDrawerContainer = styled.div`
  padding: 0 30px;
  padding-top: 4rem;
  height: 100%;
  background-color: ${props => props.theme.palette.secondary.main};
`;

export default function NavBar() {

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < Theme.breakpoints.values.md
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <MyToolBar>
        {PortfolioLogo}
        <MyButtonDiv>{getMenuButtons()}</MyButtonDiv>
      </MyToolBar>
    )
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <MyToolBar>
        <div>{PortfolioLogo}</div>
        <IconButton
          {...{
            edge: "start",
            color: "default",
            "aria-label": "menurounded",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
            style: { marginRight: "1rem" },
          }}
        >
          <MyMenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <MyDrawerContainer>{getDrawerChoices()}</MyDrawerContainer>
        </Drawer>
      </MyToolBar>
    );
  };

  const PortfolioLogo = (
    <MyTypography variant="h3"
      {...{
        to: "/",
        component: RouterLink,
        style: { textDecoration: "none" },
      }}>
      Paul Pinto
    </MyTypography>
  );

  const getMenuButtons = () => {
    return menuButtonData.map(({ label, href }) => {   

      return (
        <MyNavBarButton
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </MyNavBarButton>
      );
    });
  };

  const getDrawerChoices = () => {
    return menuButtonData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MyMenuItem>{label}</MyMenuItem>
        </Link>
      );
    });
  };

  return (
    <MyAppBar elevation={1}>
      {mobileView ? displayMobile() : displayDesktop()}
    </MyAppBar>
  )
}