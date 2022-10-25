import styled from "styled-components";

import CardComponent from "../../components/card/card.component";

export const HomeOuterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeTitleDiv = styled.div`
    margin-top: 90px;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.05em;
    color: #000000;
`;

export const MainCardOuterComponent = styled.div`
    margin-top: 75px;
`;

export const MainCardComponent = styled(CardComponent)`
    height: 247px !important;
`;

export const MainCardTitleOuterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 12px;
`;

export const MainCardTitleDiv = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 0.03em;
    color: rgba(0, 0, 0, 0.8);
`;

export const CardFooterComponent = styled.div`
    margin-top: 30px;
    margin-bottom: 42px;
    display: flex;
    justify-content: space-around;
`;

export const InputComponentOuterDiv = styled.div``;

export const MainCardInnerComponent = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const MainCardInnerFooterComponent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    height: 58px;
`;
