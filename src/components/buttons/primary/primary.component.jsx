import { BtnOuterDiv, BtnContentDiv } from "./primary.styles";

const PrimaryBtn = ({ content, handleClick }) => {
    return (
        <BtnOuterDiv onClick={handleClick}>
            <BtnContentDiv>{content ? content : "Dummy Btn"}</BtnContentDiv>
        </BtnOuterDiv>
    );
};

export default PrimaryBtn;
