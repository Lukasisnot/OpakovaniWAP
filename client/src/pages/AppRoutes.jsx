import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CreateForm from "./Monkey/CreateForm"
import UpdateForm from "./Monkey/UpdateForm"
import View from "./Monkey/View"
import ViewAll from "./Monkey/ViewAll"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-monkey" element={<CreateForm/>}/>
        <Route path="/update-monkey" element={<UpdateForm/>}/>
        <Route path="/view-monkey" element={<View/>}/>
        <Route path="/view-all-monkey" element={<ViewAll/>}/>
      </Routes>
    </BrowserRouter>
  )
}
