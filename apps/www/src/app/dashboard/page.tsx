import FadeToTop from "@/components/animations/fade-to-top";
import Link from "next/link";
import { Button } from "ui";

export default function Dashboard() {
    return (
        <FadeToTop className="flex flex-col items-center justify-center min-h-screen w-full">
            <h2 className="text-2xl font-medium">No templates yet created!</h2>
            <p className="text-center">Create a template with the cli or add it to an existing project.</p>
            <Link href="/dashboard/create">
                <Button>Create a template</Button>
            </Link>
        </FadeToTop>
    )
}