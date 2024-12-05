import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"

import { CreateForm as CreateMonkey } from "./Monkey/CreateForm"
import { UpdateForm as UpdateMonkey} from "./Monkey/UpdateForm"
import { View as ViewMonkey } from "./Monkey/View"
import { ViewAll as ViewAllMonkey } from "./Monkey/ViewAll"
import { Created as CreatedMonkey } from "./Monkey/Created"

import { CreateForm as CreateBohata } from "./Bohata/CreateForm"
import { UpdateForm as UpdateBohata} from "./Bohata/UpdateForm"
import { View as ViewBohata } from "./Bohata/View"
import { ViewAll as ViewAllBohata } from "./Bohata/ViewAll"
import { Created as CreatedBohata } from "./Bohata/Created"

import { CreateForm as CreateGame } from "./Game/CreateForm"
import { UpdateForm as UpdateGame} from "./Game/UpdateForm"
import { View as ViewGame } from "./Game/View"
import { ViewAll as ViewAllGame } from "./Game/ViewAll"
import { Created as CreatedGame } from "./Game/Created"

import { CreateForm as CreateVaclav } from "./Vaclav/CreateForm"
import { UpdateForm as UpdateVaclav} from "./Vaclav/UpdateForm"
import { View as ViewVaclav } from "./Vaclav/View"
import { ViewAll as ViewAllVaclav } from "./Vaclav/ViewAll"
import { Created as CreatedVaclav } from "./Vaclav/Created"

export default function AppRoutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/create-monkey" element={<CreateMonkey/>}/>
        <Route path="/created-monkey/:id" element={<CreatedMonkey/>}/>
        <Route path="/update-monkey/:id" element={<UpdateMonkey/>}/>
        <Route path="/view-monkey/:id" element={<ViewMonkey/>}/>
        <Route path="/view-all-monkey" element={<ViewAllMonkey/>}/>

        <Route path="/create-bohata" element={<CreateBohata/>}/>
        <Route path="/created-bohata/:id" element={<CreatedBohata/>}/>
        <Route path="/update-bohata/:id" element={<UpdateBohata/>}/>
        <Route path="/view-bohata/:id" element={<ViewBohata/>}/>
        <Route path="/view-all-bohata" element={<ViewAllBohata/>}/>

        <Route path="/create-game" element={<CreateGame/>}/>
        <Route path="/created-game/:id" element={<CreatedGame/>}/>
        <Route path="/update-game/:id" element={<UpdateGame/>}/>
        <Route path="/view-game/:id" element={<ViewGame/>}/>
        <Route path="/view-all-game" element={<ViewAllGame/>}/>

        <Route path="/create-vaclav" element={<CreateVaclav/>}/>
        <Route path="/created-vaclav/:id" element={<CreatedVaclav/>}/>
        <Route path="/update-vaclav/:id" element={<UpdateVaclav/>}/>
        <Route path="/view-vaclav/:id" element={<ViewVaclav/>}/>
        <Route path="/view-all-vaclav" element={<ViewAllVaclav/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
