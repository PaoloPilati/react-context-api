import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BudgetContext } from "./context/BudgetContext";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import Articolo from "./pages/Articolo";
import { BudgetProvider } from "./context/BudgetContext";

export default function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element= {<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/:id" element={<Articolo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  )
}