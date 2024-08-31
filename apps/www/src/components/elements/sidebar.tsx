"use client"
import * as RadixDropDownMenu from "@radix-ui/react-dropdown-menu";
import Avvvatars from "avvvatars-react";
import { ChevronsUpDown, CircleDollarSign, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "node_modules/ui/src/cn";
import { InputStyles } from "ui";

export default function Sidebar() {
    const className = "px-2 py-1.5 text-sm outline-none transition hover:bg-[#f2f2f2] rounded-md cursor-pointer flex justify-between items-center";
    return (
        <aside className="fixed top-0 bg-[#ffffff] px-3 flex flex-col py-1.5 left-0 bottom-0 z-50 w-72 border-r border-stone-200 overflow-y-auto space-y-2 justify-between">
            <div className="space-y-3">
                <RadixDropDownMenu.Root>
                    <RadixDropDownMenu.Trigger className="outline-none border-b flex border-b-neutral-200 group w-full justify-between items-center py-2">
                        <div className="flex space-x-2 items-center">
                            <div className="border border-neutral-200 rounded-full">
                                <Avvvatars value="henri.me@skiff.com" size={24} />
                            </div>
                            <h3>henri</h3>
                        </div>
                        <ChevronsUpDown className="text-secondary h-4 w-4" />
                    </RadixDropDownMenu.Trigger>
                    <RadixDropDownMenu.Content className="bg-[#ffffff] border border-[#DBDBDB] rounded-lg min-w-64 p-1">
                        <h2 className="px-2 py-1.5 text-sm font-semibold">
                            Account
                        </h2>
                        <RadixDropDownMenu.Separator />
                        <RadixDropDownMenu.Item className={className}>
                            <a href="/dashboard">Dashboard</a>
                        </RadixDropDownMenu.Item>
                        <RadixDropDownMenu.Item className={className}>
                            <a href="/dashboard/settings">Settings</a>
                        </RadixDropDownMenu.Item>
                    </RadixDropDownMenu.Content>
                </RadixDropDownMenu.Root>
                <input type="text" className={cn(InputStyles, "px-2 py-1")} placeholder="Search" />
                <div className="flex flex-col">
                    <div className="flex">
                        <p className="text-[#666666]">Platform</p>
                        <hr />
                    </div>
                    <Link className="text-lg" href="/dashboard/">
                        Home
                    </Link>
                    <Link className="text-lg" href="/dashboard/settings">
                        Settings
                    </Link>
                    <Link className="text-lg" href="/dashboard/create">
                        New template
                    </Link>
                    <Link className="text-lg" href="/dashboard/teams">
                        Teams
                    </Link>
                    <Link className="text-lg" href="/dashboard/packages">
                        Packages
                    </Link>
                </div>
                <div className="flex flex-col">
                    <Link className="text-lg" href="/dashboard/">
                    </Link>
                    <Link className="text-lg" href="/dashboard/">

                    </Link>
                    <Link className="text-lg" href="/dashboard/">

                    </Link>
                    <Link className="text-lg" href="/dashboard/">

                    </Link>
                    <Link className="text-lg" href="/dashboard/">
                    </Link>
                </div>

            </div>
            <div className="border-t border-stone-300 space-y-1 pt-1">
                <Link className="flex items-center text-[#222222]" href="https://docs.booster.computer"><Download className="mr-2 h-4 w-4 text-[#222222]" />Docs</Link>
                <Link className="flex items-center text-[#222222]" href="https://docs.booster.computer"><CircleDollarSign className="mr-2 h-4 w-4 text-[#222222]" />Plans</Link>
            </div>
        </aside>
    )
}   