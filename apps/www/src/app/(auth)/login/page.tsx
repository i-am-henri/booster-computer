import Header from "@/components/elements/header";
import { login } from "./action";
import LoginForm from "./form";

export default function Login({
    searchParams
}: {
    searchParams: Record<string, string | string[] | undefined>
}) {
    return (
        <div className="items-center justify-center flex flex-col min-h-screen">
            <div className="absolute top-0">
                <Header />
            </div>
            <LoginForm warning={searchParams.error as string} action={login} />
        </div>
    )
}