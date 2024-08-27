"use client"
import * as RadixDropDownMenu from "@radix-ui/react-dropdown-menu";
import Avvvatars from 'avvvatars-react';
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    const className = "p-2 outline-none w-full rounded-lg bg-stone-100 border border-stone-200 cursor-pointer flex justify-between items-center hover:border-stone-300 transition-all duration-200";
    return (<aside className="fixed top-0 px-3 pt-1.5 left-0 bottom-0 z-50 w-72 bg-stone-100 border-r border-stone-200 overflow-y-auto space-y-2">
        <RadixDropDownMenu.Root>
            <RadixDropDownMenu.Trigger className="p-2 outline-none group w-full rounded-lg bg-stone-200 border border-stone-300 flex justify-between items-center hover:border-stone-400 transition-all duration-200">
                <div className="flex space-x-2 items-center">
                    <div className="ring ring-purple-200 ring-offset-4 ring-offset-stone-200 rounded-full">
                        <Avvvatars value="tim@apple.com" />
                    </div>
                    <h3 className="font-medium">henri</h3>
                </div>
                <ChevronsUpDown />
            </RadixDropDownMenu.Trigger>
            <RadixDropDownMenu.Content className="p-2 rounded-lg bg-[#ffffff] border border-stone-300 flex flex-col gap-y-2 min-w-[200px]">
                <RadixDropDownMenu.Item className={className}>
                    <a href="/dashboard">Dashboard</a>
                </RadixDropDownMenu.Item>
                <RadixDropDownMenu.Item className={className}>
                    <a href="/dashboard/settings">Settings</a>
                </RadixDropDownMenu.Item>
            </RadixDropDownMenu.Content>
        </RadixDropDownMenu.Root>
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
    </aside>)
}   