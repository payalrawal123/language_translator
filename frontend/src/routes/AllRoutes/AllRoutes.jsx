import { Home } from "../../pages/Home/home"
import { About } from "../../pages/about/about"
import { Login } from "../../pages/login/login"
import { Signup } from "../../pages/signup/signup"
import { Translate } from "../../pages/translate/translate"
import { Route, Routes, useLocation } from "react-router-dom";



export const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route>
             <Route path="/translate" element={<Translate/>}>
               </Route>
             <Route path="/login" element={<Login />} />
        </Routes>
    )
  };