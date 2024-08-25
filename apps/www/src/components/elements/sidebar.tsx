"use client"

export default function Sidebar({ children }: { children: React.ReactNode }) {
    return (<aside className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-stone-100 border-r border-stone-200 overflow-y-auto">
        <div className="flex flex-col items-center justify-center h-full">
            {children}
        </div>
    </aside>)
}   