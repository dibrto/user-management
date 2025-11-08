import { useState } from 'react'

import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Search from './components/Search'
import UserFormModal from './components/UserFormModal'

export default function App() {
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);
    const [refreshUsers, setRefreshUsers] = useState(false);

    // events
    const toggleUserCreateModalHandler = (e) => setShowUserCreateModal(prev => !prev);

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList refreshUsers={refreshUsers}/>

                    <button className="btn-add btn" onClick={toggleUserCreateModalHandler}>Add new user</button>
                    {showUserCreateModal && 
                        <UserFormModal 
                            onClose={toggleUserCreateModalHandler} 
                            type={"Add"}
                            setRefreshUsers={setRefreshUsers}
                        />
                    }

                    <Pagination />
                </section>        
            </main>
            
            <Footer />
        </>
    )
}