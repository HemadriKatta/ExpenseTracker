import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CategoryPieChart = ({ expenses }) => {
    const data = Object.values(
        expenses.reduce((acc, exp) => {
            acc[exp.category] = acc[exp.category] || { name: exp.category, value: 0 };
            acc[exp.category].value += parseFloat(exp.amount);
            return acc;
        }, {})
    );

    return (
        <div>
            <h5>Category-wise Expense</h5>
            <PieChart width={300} height={250}>
                <Pie data={data} dataKey="value" nameKey="name" outerRadius={100} label>
                    {data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default CategoryPieChart;
