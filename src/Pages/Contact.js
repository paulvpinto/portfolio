import React, { useState } from 'react'
import TopContainer from '../Components/TopContainer'
import Styled from 'styled-components'
import FeaturedWorks from '../Components/FeaturedWorks'
import axios from "axios";

const Container = Styled.div`
    background-color: ${props => props.theme.palette.primary.main};
    padding: 4rem var(--mainMargin) 0;
    height: 59vh;
    display: flex;
    justify-content: space-between;

    ${props => props.theme.breakpoints.down("sm")} {
        flex-direction: column;
        align-content: center;
        height: 100%;
    }
`;

const EmailDiv = Styled.div`
    width: 40%;
    text-align: center;
    justify-item: center;

    p {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    ${props => props.theme.breakpoints.down("sm")} {
        width: 100%;
    }
`;

const ContactFormText = Styled.div`
    width: 100%;
    text-align: center;

    p {
        font-size: 1.4rem;
    }
`;

const OrDiv = Styled.div`
    width: 10%;
    text-align: center;

    font-size: 1.4rem;

    ${props => props.theme.breakpoints.down("sm")} {
        width: 100%;
    }
`;

const FormContainer = Styled.div`
    width: 40%;
    form {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        padding: 0vw;
        
        label {
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 100%;
            padding: 10%;
        }

        input {
            margin: 10px;
            height: 2rem;

            font-family: "Roboto", sans-serif;
            font-weight: 300;
            font-size: 100%;

            padding: 1%;
        }

        button {
            background-color: ${props => props.theme.palette.secondary.main};
            color: var(--mainBlack);
            margin: 10px;
            height: 2rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            grid-column: 2/3;
            grid-row: 4/5;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
        }

        textarea {
            margin: 10px;
            font-family: "Roboto", sans-serif;
            height: 10vh;
            font-weight: 300;
            font-size: 100%;
            padding: 1%;
        }
    }

    ${props => props.theme.breakpoints.down("sm")} {
        width: 100%;
        height: 30rem;
    }
`;

const SuccessMessage = Styled.p`
    grid-column: 2/3;
    grid-row: 5/6;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
`;

function Contact() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://formspree.io/xvowewad",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };

    return (
        <>
            <TopContainer title='Contact Me'/>
            <Container>
                <EmailDiv>
                    <p>
                        Send me an email at 
                    </p>
                    <h3>
                        paul_pinto@hotmail.ca
                    </h3>
                </EmailDiv>
                <OrDiv>
                    or
                </OrDiv>
                <FormContainer>
                    <ContactFormText>
                        <p>
                            Use this contact form
                        </p>
                    </ContactFormText>

                    {/* <form onSubmit={this.handleSubmit}> */}
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="name">
                            Name
                            </label>
                        <input type="text" id="name" name="name" placeholder="What is your name?" required></input>

                        <label htmlFor="email">
                            Email
                            </label>
                        <input type="email" id="email" name="email" placeholder="What is your email?" required></input>

                        <label htmlFor="message">
                            Message
                            </label>
                        <textarea id="message" name="message" placeholder="What do you inquire?"  required></textarea>

                        <button type="submit" disabled={serverState.submitting}>
                            Send Message
                        </button>

                        {serverState.status && 
                        (
                        <SuccessMessage className={!serverState.status.ok ? "errorMsg" : ""}>
                        {serverState.status.msg}
                        </SuccessMessage>
                         )}

                    </form>
                </FormContainer>
            </Container>
            <FeaturedWorks />
        </>
    );
}

export default Contact;