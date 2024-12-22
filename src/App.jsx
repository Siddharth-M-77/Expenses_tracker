
import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="bg-white w-screen min-h-screen">
    <ExpenseForm/>
    <ExpenseList/>
    </div>
  );
}

export default App;
