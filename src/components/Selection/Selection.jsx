import { capitalizeFirstLetter } from "../../utils/formatting";
import { StyledSelect } from "./SelectionStyled";

export const CustomSelection = ({ options, placeholder, name, register }) => {
    return (
        <StyledSelect defaultValue={capitalizeFirstLetter(name)} placeholder={placeholder} name={name} {...register(name)}>
            <option disabled>{capitalizeFirstLetter(name)}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </StyledSelect>
    );
};