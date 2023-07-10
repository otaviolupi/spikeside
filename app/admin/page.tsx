import Sidebar from "@/components/sidebar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
    DollarSign
} from "lucide-react"
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recent-sales";
import Header from "@/components/header-admin";
  

export default function Page() {
   
    const indicators = [
        {
            title: "Total Revenue",
            value: "$45,231.89",
            icon: <DollarSign />,
            description: "+20.1% from last month"
        },
        {
            title: "Subscriptions",
            value: "+2350",
            icon: <DollarSign />,
            description: "+180.1% from last month"
        },
        {
            title: "Sales",
            value: "+12,234",
            icon: <DollarSign />,
            description: "+19% from last month"
        },
        {
            title: "Active Now",
            value: "+573",
            icon: <DollarSign />,
            description: "+201 since last hour"
        }
    ]

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header title="Dashboard" />
                <div className="flex justify-between">
                    {indicators.map((ind, index) => {
                        return (
                            <Card className="flex-1 m-2">
                                <CardHeader>
                                    <div className="flex w-full justify-between">
                                        <h3 className="tracking-tight text-sm font-medium">{ind.title}</h3>
                                        {ind.icon}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <h1 className="text-2xl font-bold">{ind.value}</h1>
                                    <p className="text-xs text-muted-foreground">{ind.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
                <div className="flex w-full">
                    <Card className="flex-1 m-2">
                        <CardHeader>
                            <div className="flex w-full justify-between">
                                <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Overview />
                        </CardContent>
                    </Card>
                    <Card className="flex-1 max-w-[35%] m-2">
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>
                            You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentSales />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}