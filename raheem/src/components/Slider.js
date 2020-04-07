import React, { useState } from "react";

//styles
import styled from 'styled-components';

//material ui imports
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';


//styled components styling
const Container = styled.div`
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const SliderContainer = styled.div`
display: flex;
width: 85%;
padding: 2% 3.9rem;
`

const HeaderContainer = styled.div`
display: flex;
width: 85%;
padding: 3% 0;
`


//slider styles from material UI
const TxSlider = withStyles({
    root: {
        color: '#FFF600',
        fontColor: 'purple',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid #111111',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    mark: {
        color: '#808080',
        height: 6,
        marginLeft: -5
    },
    markLabel: {
        fontSize: '15px',
        padding: '15px 30px',
        fontFamily: 'Roboto',
        lineHeight: '18px',
        letterSpacing: -0.2,
        color: '#C4C4C4'
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
        color: '#111111',
        fontFamily: 'Neuzeit Grotesk',
        fontSize: '1.1rem',
    },
    track: {
        height: 8,
        borderRadius: 10,
        border: '1px solid #111111',
        color: '#FFF600'
    },
    rail: {
        height: 8,
        borderRadius: 10,
        border: '1px solid #111111',
        color: '#FFF600',
    },
})(Slider);

const marks = [
    {
        value: 1,
        label: 'Very Poorly',
    },
    {
        value: 2,
    },
    {
        value: 3,
    },
    {
        value: 4,
    },
    {
        value: 5,
    },
    {
        value: 6,
    },    
    {
        value: 7,
    },    
    {
        value: 8,
    },    
    {
        value: 9,
    },
    {
        value: 10,
        label: 'Very Well',
    },
];

export default function CustomizedSlider() {
    // const classes = useStyles();

    return (
        <Container>
            <HeaderContainer>
                <h2>How were you treated?</h2>
            </HeaderContainer>
            <SliderContainer>
                    <Typography gutterBottom></Typography>
                    <TxSlider 
                        valueLabelDisplay="auto" 
                        aria-label="slider" 
                        defaultValue={0} 
                        step={1}
                        marks={marks}
                        min={1}
                        max={10}/>
            </SliderContainer>
        </Container>
    );
}
