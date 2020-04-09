import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Officer from './Officer'

//buttons
import GoBack from './buttons/GoBack.js';

//styles
import { Container, Content } from '../styles/global';

function ThankYou() {

    /* we could possibly store some value in localStorage to determine
        whether or not the user has rendered the Thank You component from
        the cancel button on the initial landing, or from actually completing
        a submission */
    const [cancelled, setCancelled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // uncomment to view cancelled thank you screen
    // localStorage.setItem('cancelled', 'true');

    // uncomment to view submitted thank you screen
    // localStorage.setItem('submitted', 'true');

    useEffect(() => {
        if (!!localStorage.getItem('cancelled')) {
            setCancelled(true);
        }
        else if (!!localStorage.getItem('submitted')) {
            setSubmitted(true);
        }
    }, []);

    return (
        <Container>
            <Content>
                <Officer profile={{
                    officer: "Officer Peyton",
                    precinct: "#15",
                    badge: "R4567"
                }} />

                {cancelled &&
                    <Cancelled>
                        <ThankYouH1>Let us remind you</ThankYouH1>
                        <ThankYouP>Type in your email and we can email you a reminder, so you can complete your in-depth review later</ThankYouP>

                        <ButtonContainer className="landingButtonContainer">
                            <BackContainer>
                                <GoBack />
                                {/* go to thank you */}
                            </BackContainer>
                        </ButtonContainer>
                    </Cancelled>}

                <Submitted>
                    <ThankYouH2>Thank you for your feedback!</ThankYouH2>
                    <ThankYouH1>Report Submitted!</ThankYouH1>
                    <ThankYouP>Your story will help end police violence.</ThankYouP>
                </Submitted>
            </Content>
        </Container>
    )
}

export default ThankYou;

const ThankYouH2 = styled.h2`
    font-family: Noto Serif JP;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
`;

const ThankYouH1 = styled.h1`
    font-family: Neuzeit Grotesk;
    font-style: normal;
    font-weight: 900;
    font-size: 26px;
    width: 100%;
    line-height: 28px;
    background-color: yellow;
`;

const ThankYouP = styled.p`
    font-family: Neuzeit Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 16px;
`;

const ThankYouContainer = styled.div`
    margin: 5rem 0;
    font-family: 'Noto Serif', serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 4rem;
        margin-bottom: 2rem;
    }

    p {
        font-size: 2rem;
        line-height: 3.6rem;
        margin-bottom: 2rem;

        @media (max-width: 490px) {
            font-size: 1.6rem; 
        }

        @media (max-width: 375px) {
            font-size: 1.4rem; 
        }
    }
`;

const Cancelled = styled.div`
    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    padding: 3rem 10%;
    width: 80%;

    @media (max-width: 500px) {
        width: 95%;
    }
`;

const Submitted = styled.div`
    background: #ffffff;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    padding: 3rem 10%;
    width: 80%;

    ul li {
        font-size: 1.6rem;
        line-height: 3.6rem;

        @media (max-width: 490px) {
            font-size: 1.4rem;
        }

        @media (max-width: 400px) {
            font-size: 1.4rem;
            margin-left: 2rem;
        }
    }

    @media (max-width: 500px) {
        width: 95%;
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 500px) {
        width: 95%;
    }
`

const BackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2% 0;
`