import type { FieldValues } from "react-hook-form";

const signup = async (form: FieldValues, callback: () => any) => {
    const API_ENDPOINT = "http://149.28.44.161/api/v1/api/register";

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) callback();
        else {
            const data = await response.json();
            alert(data.message || "An error occurred. Please try again");
        }
    } catch (error: any) {
        alert(error.message);
    }
};

export default signup;
