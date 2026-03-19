import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider ({children}) {
    const [maxPrice, setMaxPrice] = useState(null);
    return (
        <BudgetContext.Provider value={{ maxPrice, setMaxPrice }}>
            {children}
        </BudgetContext.Provider>
        )
    }

export { BudgetContext, BudgetProvider }