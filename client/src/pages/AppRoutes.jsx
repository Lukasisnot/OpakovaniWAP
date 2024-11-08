import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import { CreateForm as CreateMonkey } from "./Monkey/CreateForm"
import { UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm"
import { View as ViewMonkey } from "./Monkey/View"
import { ViewAll as ViewAllMonkey } from "./Monkey/ViewAll"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-monkey" element={<CreateMonkey/>}/>
        <Route path="/update-monkey" element={<UpdateMonkey/>}/>
        <Route path="/view-monkey" element={<ViewMonkey/>}/>
        <Route path="/view-all-monkey" element={<ViewAllMonkey/>}/>
      </Routes>
    </BrowserRouter>
  )
}
