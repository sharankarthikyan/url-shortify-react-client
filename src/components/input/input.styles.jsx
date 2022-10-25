import styled from "styled-components";

export const InputOuterDiv = styled.div``;

export const InputElement = styled.input`
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 50px;
    background-color: #ecf0f3;
    height: 58px;
    width: 496px;
    outline: none;
    padding-left: 20px;
    font-size: 18px;
    color: gray;

    &:focus {
        border: 2px solid rgba(0, 0, 0, 1);
    }

    &:disabled {
        background: lightgray;
    }
`;
