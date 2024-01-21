import { Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import Layout from "./layout/Layout"
import DetailesPage from "./pages/DetailesPage"
import CheckOutPage from "./pages/CheckOutPage"
import SuccessPage from "./pages/SuccessPage"

function App() {

  return (
    <Layout>
      <Routes>
        <Route index element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<DetailesPage/>}/>
        <Route path="/checkout" element={<CheckOutPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
    </Layout>
  )
}

export default App
