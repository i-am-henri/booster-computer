import Header from "@/components/elements/header";
import { register } from "./action";
import RegisterForm from "./form";

export default function Register() {
    return (
        <div className="items-center flex flex-col justify-center min-h-screen">
            <div className="absolute top-0">
                <Header />
            </div>
            <RegisterForm action={register} />
        </div>
    )
}