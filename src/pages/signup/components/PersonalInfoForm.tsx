import { useForm } from "react-hook-form";
import Input from "./Input";

const PersonalInfoForm = ({ onSubmit }: { onSubmit(...props: any[]): any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all" });

    return (
        <div className="w-full min-w-full max-w-full">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Create a Hovertask Account</h2>
                <p className="text-gray-600 mt-2">Join our community and start earning today</p>
            </div>

            <form onSubmit={handleSubmit((form) => onSubmit(form))} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            label="First Name"
                            id="firstName"
                            type="text"
                            {...register("fname", {
                                required: { value: true, message: "Please enter your first name" },
                                pattern: { value: /^[A-Za-z'-]{2,}$/, message: "Enter a real name" }
                            })}
                        />
                        <small className="text-red-500">{errors["fname"] && (errors["fname"].message as string)}</small>
                    </div>
                    <div>
                        <Input
                            label="Last Name"
                            id="lastName"
                            type="text"
                            {...register("lname", {
                                required: { value: true, message: "Please enter your last name" },
                                pattern: { value: /^[A-Za-z'-]{2,}$/, message: "Enter a real name" }
                            })}
                        />
                        <small className="text-red-500">{errors["lname"] && (errors["lname"].message as string)}</small>
                    </div>
                </div>

                <div>
                    <Input
                        label="Email Address"
                        id="email"
                        type="email"
                        {...register("email", {
                            required: { value: true, message: "Please enter your email" },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Enter a valid email address"
                            }
                        })}
                    />
                    <small className="text-red-500">{errors["email"] && (errors["email"].message as string)}</small>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Input
                            label="Referrer's Username"
                            id="referrer"
                            type="text"
                            placeholder="Optional"
                            {...register("referrer", {
                                pattern: {
                                    value: /^[a-zA-Z0-9_]{3,20}$/,
                                    message: "Username should be between 3 and 20 characters without spacing"
                                }
                            })}
                        />
                        <small className="text-red-500">{errors["email"] && (errors["email"].message as string)}</small>
                    </div>
                    <div>
                        <Input
                            label="Username"
                            id="username"
                            type="text"
                            {...register("username", {
                                required: { value: true, message: "Please enter your desired username" },
                                pattern: {
                                    value: /^[a-zA-Z0-9_]{3,20}$/,
                                    message: "Username should be between 3 and 20 characters without spacing"
                                }
                            })}
                        />
                        <small className="text-red-500">
                            {errors["username"] && (errors["username"].message as string)}
                        </small>
                    </div>
                </div>

                <div>
                    <div className="space-y-1">
                        <label htmlFor="account-type" className="block text-sm font-medium text-gray-700">
                            Select How You Want to Use Hovertask
                        </label>
                        <select
                            id="account-type"
                            className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
                            {...register("how_you_want_to_use", {
                                required: { value: true, message: "Please select an option" }
                            })}
                        >
                            <option value="">Select How You Want to Use Hovertask</option>
                            <option value="earn">Earn Money</option>
                            <option value="advertise">Advertise Products</option>
                            <option value="resell">Resell Products</option>
                        </select>
                    </div>
                    <small className="text-red-500">
                        {errors["how_you_want_to_use"] && (errors["how_you_want_to_use"].message as string)}
                    </small>
                </div>

                <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                        <input
                            required
                            id="terms"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                    </div>
                    <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                            General Terms of Use
                        </a>{" "}
                        &{" "}
                        <a href="#" className="text-blue-600 hover:text-blue-700 underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full cursor-pointer font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20">
                    Continue
                </button>
            </form>
        </div>
    );
};

export default PersonalInfoForm;
