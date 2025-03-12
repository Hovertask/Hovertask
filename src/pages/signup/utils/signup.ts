import type { FieldValues } from "react-hook-form";

const signup = async (form: FieldValues, callback: () => any) => {
    const API_ENDPOINT = "https://laravel-production-6453.up.railway.app/api/register";

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
