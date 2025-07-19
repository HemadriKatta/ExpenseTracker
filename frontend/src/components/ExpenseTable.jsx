import React from "react";
import { deleteExpense } from "../services/api";

const ExpenseTable = ({ expenses, onUpdate }) => {
    const handleDelete = async (id) => {
        await deleteExpense(id);
        onUpdate();
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Notes</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((e) => (
                    <tr key={e.id}>
                        <td>{e.amount}</td>
                        <td>{e.category}</td>
                        <td>{e.date}</td>
                        <td>{e.notes}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(e.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
