import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        const data = localStorage.getItem('expenses');
        return data ? JSON.parse(data) : [];
    });

    const addExpense = (expense) => {
        const expenseData = [...expenses, expense];
        setExpenses(expenseData);
        localStorage.setItem('expenses', JSON.stringify(expenseData));
    };

    const deleteExpense = (index) => {
        const filtered = expenses.filter((_, i) => i !== index);
        setExpenses(filtered);
        localStorage.setItem('expenses', JSON.stringify(filtered));
    };


    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseProvider;
