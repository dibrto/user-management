import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
    <>
        <Header />

        <UserList />

        <Footer />
    </>
)