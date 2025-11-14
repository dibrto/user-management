import { Route, Routes } from "react-router"

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import UserManager from './components/user_manager/UserManager'
import ErrorRedirect from "./components/error/ErrorRedirect"
import UserFormModal from "./components/user_manager/user_form_modal/UserFormModal"

export default function App() {


    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<UserManager />} >
                    <Route path="/users/create" element={<UserFormModal type={"Create"}/>} />
                </Route>
                
                <Route path="*" element={<ErrorRedirect />} />
            </Routes>
            
            <Footer />
        </>
    )
}