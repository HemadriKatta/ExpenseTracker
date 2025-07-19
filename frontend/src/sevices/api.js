import axios from "axios";

const BASE_URL = "http://localhost:8080/api/expenses";

export const fetchExpenses = async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
};

export const addExpense = async (expense) => {
    await axios.post(BASE_URL, expense);
};

export const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
