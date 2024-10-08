import FadeToTop from "@/components/animations/fade-to-top";
import { db } from "database";
import Link from "next/link";
import { Button } from "ui";

export default async function Dashboard() {
    const templates = await db
    return (
        <FadeToTop className="flex flex-col items-center justify-center min-h-screen w-full">
            <h2 className="text-2xl font-medium">No templates yet created!</h2>
            <p className="text-center">Create a template with the cli  or add <br /> it to an existing project.</p>
            <Link href="/dashboard/create">
                <Button>Create a template</Button>
            </Link>
        </FadeToTop>
    )
}