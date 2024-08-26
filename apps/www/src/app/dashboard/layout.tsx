import Sidebar from "@/components/elements/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (<div className="flex flex-col items-center justify-center">
        <Sidebar />
        {children}
    </div>)
}