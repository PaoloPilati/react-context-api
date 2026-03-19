import { NavLink } from "react-router";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export default function Navbar () {
    const { maxPrice, setMaxPrice } = useContext(BudgetContext);
    return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container">
            <div className="navbar-brand">
            <NavLink to="/">
                <img className="img-fluid w-25 rounded" src="https://fakestoreapi.com/icons/logo.png" alt="logo" />
            </NavLink> 
            </div>
            <div className="navbar-nav">
                   
                <NavLink to="/" end className="nav-link">Home</NavLink>
                <NavLink to="/prodotti" end className="nav-link">Prodotti</NavLink>
                <NavLink to="/chi-siamo" end className="nav-link">Chi siamo</NavLink>
                
                <input 
                    type="number"
                    placeholder="Prezzo max"
                    value={maxPrice ?? ""}
                    onChange={(e) => setMaxPrice(e.target.value === "" ? null : Number(e.target.value))}
                 />

                {/* <button 
                className="btn btn-outline-light ms-3"
                onClick={() => setBudgetMode(prev => !prev)}>
                    {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
                </button> */}

            </div>
        </div>
    </nav>
    )
}