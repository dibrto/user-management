import { useState } from 'react'

import Header from './components/header/Header'
import UserList from './components/user_list/user_list/UserList'
import Footer from './components/footer/Footer'
import Pagination from './components/pagination/Pagination'
import Search from './components/user_list/search/Search'
import UserFormModal from './components/user_list/user_form_modal/UserFormModal'

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