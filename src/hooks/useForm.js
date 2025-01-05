import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(formState);
            resetForm();
        }
    };

    return { formState, handleChange, resetForm, handleSubmit };
};