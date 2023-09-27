import React, { useState } from "react";

const useForm = <T>(data: T) => {
    const [form, setForm] = useState<T>(data);

    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    };

    return {
        form,
        handleForm,
    }
};

export default useForm;
