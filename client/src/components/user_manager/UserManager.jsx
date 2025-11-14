import { useState } from 'react'

import UserList from './user_list/UserList'
import Search from './search/Search'
import UserFormModal from './user_form_modal/UserFormModal'
import Pagination from './pagination/Pagination'

export default function UserManager() {
    const [showUserCreateModal, setShowUserCreateModal] = useState(false);
    const [refreshUsers, setRefreshUsers] = useState(false);

    // events
    const toggleUserCreateModalHandler = (e) => setShowUserCreateModal(prev => !prev);

    return (
        <main className="main">
            <section className="card users-container">
                <Search />

                <UserList refreshUsers={refreshUsers} />

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
    );
};