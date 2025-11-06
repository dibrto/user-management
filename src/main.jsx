import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import UserList from './components/UserList'

createRoot(document.getElementById('root')).render(
    <>
        <Header />

        <UserList />

        <Footer />
    </>
)