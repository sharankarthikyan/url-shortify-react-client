import styled from "styled-components";

export const BtnOuterDiv = styled.div``;

export const BtnContentDiv = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    background: #99ffc2;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    padding: 10px 20px;

    &:hover {
        background: #ff9999;
        border: 2px solid #ff9999;
    }
`;
