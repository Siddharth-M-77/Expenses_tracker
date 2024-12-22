import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

const ExpenseList = () => {
    const { expenses, deleteExpense } = useContext(ExpenseContext);

    const totalExpenses = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Expense List</h3>
            {expenses.length > 0 ? (
                <ul className="space-y-4">
                    {expenses.map((expense, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                        >
                            <div>
                                <p className="text-lg font-medium text-gray-800">
                                    {expense.title}
                                </p>
                                <p className="text-sm text-gray-600">
                                    ₹{expense.amount} <span className="italic">({expense.category})</span>
                                </p>
                            </div>
                            <button
                                onClick={() => deleteExpense(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 italic">No expenses added yet.</p>
            )}
            <div className="mt-6 border-t pt-4">
                <h4 className="text-lg font-bold text-gray-800">
                    Total Expenses: <span className="text-green-600">₹{totalExpenses.toFixed(2)}</span>
                </h4>
            </div>
        </div>
    );
};

export default ExpenseList;
