import type { FieldValues } from "react-hook-form";

const signin = async (form: FieldValues) => {
    const API_ENDPOINT = "https://backend.hovertask.com/api/v1/login";

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();

        if (response.ok)
            window
                .location
                .assign(`https://hovertask-dashboard.vercel.app/?token=${data.token}`);
        else  alert(data.message || "An error occurred. Please try again");
    } catch (error: any) {
        alert(error.message);
    }
};

export default signin;
