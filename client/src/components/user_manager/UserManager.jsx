import { useEffect, useState } from "react";
import { Outlet, useNavigate } from 'react-router'

import UserList from './user_list/UserList'
import Search from './search/Search'
import Pagination from './pagination/Pagination'

export default function UserManager() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        // on mount
        const abortController = new AbortController();
        fetch("http://localhost:3030/jsonstore/users", { signal: abortController.signal })
            .then(res => res.json())
            .then(result => setUsers(x => x = Object.values(result)))
            .catch(err => {
                if (err.name !== "AbortError") {
                    alert(err.message);
                }
            });

        // on unmount
        return () => abortController.abort();
    }, [refresh]);

    const forceRefresh = () => setRefresh(x => !x);

    return (
        <main className="main">
            <section className="card users-container">
                <Search />

                <UserList users={users}/>

                <button className="btn-add btn" onClick={() => navigate("users/create")}>Add new user</button>
                <Outlet context={{forceRefresh}}/>

                <Pagination />
            </section>
        </main>
    );
};