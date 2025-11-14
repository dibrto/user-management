import { Route, Routes } from "react-router"

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import UserManager from './components/user_manager/UserManager'
import ErrorRedirect from "./components/error/ErrorRedirect"

export default function App() {


    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<UserManager />} />

                <Route path="*" element={<ErrorRedirect />} />
            </Routes>
            
            <Footer />
        </>
    )
}