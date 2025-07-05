import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const signup = async (form: FieldValues, callback: () => any) => {
    const API_ENDPOINT = "https://backend.hovertask.com/api/v1/register";

    try {
        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) callback();
        else {
            const data = await response.json();
            toast.error(data.message || "An error occurred. Please try again");
        }
    } catch (error: any) {
        toast.error(error.message);
    }
};

export default signup;
