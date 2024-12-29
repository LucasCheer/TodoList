import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormState(initialState);
    };

    return { formState, handleChange, resetForm };
};