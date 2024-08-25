import Header from "@/components/elements/header";

export default function Verify() {
    return <div className="flex flex-col items-center min-h-screen">
        <div className="absolute top-0">
            <Header />
        </div>
        <div className="space-y-2 lg:w-[700px] mt-[10%]">
            <h1 className="text-3xl font-medium">Verify your email</h1>
            <p className="">
                We sent you an email with a link to verify your email address.
                Please check your inbox. This is the last step before you can login.
                If you not received the email, please check your spam folder or contact us for another verification
                email and link.
            </p>
        </div>
    </div>
}