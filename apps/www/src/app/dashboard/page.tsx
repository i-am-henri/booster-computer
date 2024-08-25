import Link from "next/link";
import { Button } from "ui";

export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2>No templates yet created!</h2>
            <p className="w-[50%]">Create a template with the cli or add it to an existing project.</p>
            <Link href="/dashboard/create">
                <Button>Create a template</Button>
            </Link>
        </div>
    )
}