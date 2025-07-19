import React, { useState } from "react";
import { addExpense } from "../sevices/api";

const ExpenseForm = ({ onAdd }) => {
    const [form, setForm] = useState({
        amount: "",
        category: "",
        date: "",
        notes: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addExpense(form);
        setForm({ amount: "", category: "", date: "", notes: "" });
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="row">
                <div className="col">
                    <input name="amount" value={form.amount} onChange={handleChange} type="number" className="form-control" placeholder="Amount" required />
                </div>
                <div className="col">
                    <input name="category" value={form.category} onChange={handleChange} className="form-control" placeholder="Category" required />
                </div>
                <div className="col">
                    <input name="date" value={form.date} onChange={handleChange} type="date" className="form-control" required />
                </div>
                <div className="col">
                    <input name="notes" value={form.notes} onChange={handleChange} className="form-control" placeholder="Notes" />
                </div>
                <div className="col">
                    <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
