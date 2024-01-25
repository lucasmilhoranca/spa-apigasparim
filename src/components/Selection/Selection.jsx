import { capitalizeFirstLetter } from "../../utils/formatting";
import { StyledSelect } from "./SelectionStyled";

export const CustomSelection = ({ options, placeholder, name, register }) => {
    return (
        <StyledSelect placeholder={placeholder} name={name} {...register(name)}>
            <option value="" selected disabled>{capitalizeFirstLetter(name)}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </StyledSelect>
    );
};