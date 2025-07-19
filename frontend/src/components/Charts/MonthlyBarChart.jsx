import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import dayjs from "dayjs";

const MonthlyBarChart = ({ expenses }) => {
    const data = Object.values(
        expenses.reduce((acc, exp) => {
            const month = dayjs(exp.date).format("YYYY-MM");
            acc[month] = acc[month] || { month, total: 0 };
            acc[month].total += parseFloat(exp.amount);
            return acc;
        }, {})
    );

    return (
        <div>
            <h5>Monthly Summary</h5>
            <BarChart width={400} height={250} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default MonthlyBarChart;
