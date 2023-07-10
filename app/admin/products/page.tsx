import Sidebar from "@/components/sidebar";
import Header from "@/components/header-admin";

export default function Page() {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header title="Produtos" />
                
            </div>
        </div>
    )
}