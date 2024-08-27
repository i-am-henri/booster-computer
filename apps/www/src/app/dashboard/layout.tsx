import Sidebar from "@/components/elements/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (<div className="flex flex-col">
        <Sidebar />
        <div className="ml-72">
            {children}
        </div>
    </div>)
}