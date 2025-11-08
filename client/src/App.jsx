import { useState } from 'react'

import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Search from './components/Search'
import UserFormModal from './components/UserFormModal'

export default function App() {
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);

    // events
    const toggleUserCreateModal = (e) => setShowUserCreateModal(prev => !prev);

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />

                    <button className="btn-add btn" onClick={toggleUserCreateModal}>Add new user</button>
                    {showUserCreateModal && <UserFormModal onClose= {toggleUserCreateModal}/>}

                    <Pagination />
                </section>        
            </main>
            
            <Footer />
        </>
    )
}