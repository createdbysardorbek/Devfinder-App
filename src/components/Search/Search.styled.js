import styled from "styled-components";

export const Input = styled.input`
    width: 500px;
    height: 100%;
    background: ${props => props.background ? '#1E2A47' : '#fff'};
    border: 0;
    outline: 0;
    font-family: 'Space Mono';
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.background ? '#fff' : '#4B6A9B'};
`

export const Button = styled.button`
    padding: 13px 24px;
    background: #0079FF;
    border-radius: 10px;
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    border: 0;
    outline: 0;
    cursor: pointer;
`