import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import CategoryPieChart from "../components/Charts/CategoryPieChart";
import MonthlyBarChart from "../components/Charts/MonthlyBarChart";
import { fetchExpenses } from "../services/api";

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);

    const loadExpenses = async () => {
        const data = await fetchExpenses();
        setExpenses(data);
    };

    useEffect(() => {
        loadExpenses();
    }, []);

    return (
        <div className="container mt-4">
            <h2>SmartExpense Dashboard</h2>
            <ExpenseForm onAdd={loadExpenses} />
            <ExpenseTable expenses={expenses} onUpdate={loadExpenses} />
            <div className="row mt-4">
                <div className="col-md-6">
                    <CategoryPieChart expenses={expenses} />
                </div>
                <div className="col-md-6">
                    <MonthlyBarChart expenses={expenses} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
