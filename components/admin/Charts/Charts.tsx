'use client'
import { formatCurrency } from "@/lib/formaters"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
const data = [
    { value: 12, date: '2022-01-12' },
    { value: 25, date: '2022-01-11' },
    { value: 5, date: '2022-01-10' },
]



export function LineCharts() {
    return (
        <><ResponsiveContainer width="100%" minHeight={250}>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Line dataKey={"value"} />
                <XAxis dataKey="date" name="Date" />
                <YAxis tickFormatter={tick => formatCurrency(tick)} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" name="Total Pohon" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer></>
    )
}




export function BarCharts() {
    return (
        <><ResponsiveContainer width="100%" minHeight={250}>
            <BarChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey={"value"} />
                <XAxis dataKey="date" name="Date" />
                <YAxis tickFormatter={tick => formatCurrency(tick)} />
                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }}
                    formatter={value => formatCurrency(value as number)}
                />
                <Legend />
                <Line type="monotone" dataKey="value" name="Total Pohon" stroke="#8884d8" />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </BarChart>
        </ResponsiveContainer></>
    )
}
export function PieCharts() {
    return (
        <><ResponsiveContainer width="100%" minHeight={250}>
            <PieChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>


                <Tooltip cursor={{ fill: 'hsl(var(--muted))' }}
                    formatter={value => formatCurrency(value as number)}
                />
                <Pie
                    data={data}
                    dataKey={"value"}
                    fill="hsl(var(--primary))"
                />

            </PieChart>
        </ResponsiveContainer></>
    )
}

