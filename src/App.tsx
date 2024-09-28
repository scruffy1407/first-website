import { BrowserRouter, Routes, Route } from "react-router-dom"
import FirstPage from "./pages/First-Page/first-page";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<FirstPage/>} path="/" />
    </Routes>
    </BrowserRouter>
  )
}

export default App