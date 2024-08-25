import Link from "next/link";
import { Button } from "ui";

export default function Header() {
    return (
        <div className="flex justify-between items-center lg:w-[700px] mt-5">
            <Link href="/" className="font-bold text-xl"><h2>booster</h2></Link>
            <div className="flex space-x-2">
                <Link href="/login">
                    <Button>login</Button>
                </Link>
                <Link href="/register">
                    <Button>register</Button>
                </Link>

            </div>
        </div>
    )
}