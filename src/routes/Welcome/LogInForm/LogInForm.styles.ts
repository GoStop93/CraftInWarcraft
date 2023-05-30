import styled from "styled-components";
import { Form } from "formik";

export const StyledErrorMessage = styled.div`
    color: red;
`;

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 35vh;
`;

export const StyledButton = styled.button`
    margin-top: 2.1vh;
    font-family: warcraft;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 2.1vh;
    line-height: 2.1vh;
    height: 3.2vh;
    background-color: #00aeff;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 0  rgba(0, 0, 0, 0);
    border-radius: 2px;
    :hover {
        cursor: pointer;
        background-color: #41c3ff;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#41c3ff), to(#0298de));
        background-image: linear-gradient(#41c3ff, #0298de);
    };
`;

export const StyledSubtitle = styled.h2`
    color: #fbee65;
    font-weight: 100;
`;
