import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

import Sidebar from "@/components/sidebar";
import Header from "@/components/header-admin";
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card";
  import {
    DollarSign
} from "lucide-react";

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
  }
  
  // Simulate a database read for tasks.
  async function getTasks() {
    const data = await fs.readFile(
      path.join(process.cwd(), "app/admin/orders/data/tasks.json")
    )
  
    const tasks = JSON.parse(data.toString())
  
    return z.array(taskSchema).parse(tasks)
  }

export default async function Page() {

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
    ];

    const tasks = await getTasks()

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 height-m-screen overflow-scroll">
                <Header title="Pedidos" />
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
                <div className="p-2">
                    <DataTable data={tasks} columns={columns} />
                </div>
            </div>
        </div>
    )
}