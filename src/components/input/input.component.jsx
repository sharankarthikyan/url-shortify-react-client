import { InputOuterDiv, InputElement } from "./input.styles";

const InputComponent = ({
    width,
    placeholder,
    onChange,
    disabled = false,
    value = "",
}) => {
    return (
        <InputOuterDiv>
            <InputElement
                style={{ width: width }}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                value={value}
            ></InputElement>
        </InputOuterDiv>
    );
};

export default InputComponent;
