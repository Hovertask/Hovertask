import { useForm } from "react-hook-form";
import Input from "../../../components/Input";
import { BsArrowLeft } from "react-icons/bs";
import spinner from "../../../assets/spinner.gif";

const OtpForm = ({ onSubmit, onBackBtnPress }: { onSubmit(...props: any[]): any; onBackBtnPress(): any }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({ mode: "all" });

    return (
        <div className="w-full min-w-full max-w-ful">
            <div className="mb-8">
                <div className="flex items-center gap-2">
                    <button onClick={onBackBtnPress} className="cursor-pointer" title="Back" aria-label="Back">
                        <BsArrowLeft size={24} />
                    </button>
                    <h2 className="text-2xl font-semibold text-gray-800">Confirm your email address</h2>
                </div>
                <p className="text-gray-600 mt-2">Enter the code sent to your email address</p>
            </div>

            <form onSubmit={handleSubmit((form) => onSubmit(form))} className="space-y-6">
                <div>
                    <Input
                        label="Enter code"
                        id="code"
                        type="number"
                        {...register("code", {
                            required: { value: true, message: "Please enter verification code" },
                            pattern: { value: /^\d{6}/, message: "Enter a valid code" }
                        })}
                    />
                    <small className="text-red-500">{errors["phone"] && (errors["phone"].message as string)}</small>
                </div>

                <button className="w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full cursor-pointer font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20">
                    Submit and Sign Up
                </button>
            </form>

            {/* Form submission progress indicator */}
            {isSubmitting && (
                <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-999 flex flex-col items-center justify-center">
                    <img src={spinner} alt="Spinner" />
                    <p className="text-2xl">Signing Up Your Account</p>
                </div>
            )}
        </div>
    );
};

export default OtpForm;
