import {
    Button,
} from "@material-ui/core";

import EmailIcon from '@material-ui/icons/Email';

import styled from 'styled-components';

import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { NavBarData } from "../Constants/NavBarData";

const menuButtonData = NavBarData;

const MyFooter = styled.footer`
    background-color: ${props => props.theme.palette.primary.main};
    width: 100%;
    padding-bottom: 4rem;
    display: flex;
    justify-content: space-between;

    ${props => props.theme.breakpoints.down("sm")} {
        flex-direction: column;
    }
`;

const MyNavBarButton = styled(Button)`
    font-family: Raleway;
    font-weight: 500;
    font-size: 1rem;

    ${props => props.theme.breakpoints.down("sm")} {
        width: 100%;
        font-size: 0.9rem;
    }
`;

const InfoContainer = styled.div`
    align-self: center;
    text-align: center;
    font-family: Raleway;
    font-weight: 500;
    width: 30%;
    padding: 1rem 0;

    ${props => props.theme.breakpoints.down("sm")} {
        width: 100%;
        font-size: 0.9rem;
    }
`;

const Email = styled(EmailIcon)`
    width: 100%;
`;

function footer() {

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

    return (
        <MyFooter>
            <InfoContainer>
                {getMenuButtons()}
            </InfoContainer>
            <InfoContainer>
                <Email></Email>
                paulpinto.gamedesign@gmail.com
            </InfoContainer>
        </MyFooter>
    )
}

export default footer;