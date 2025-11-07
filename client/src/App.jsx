import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import Search from './components/Search'

export default function App() {
    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList />

                    <button className="btn-add btn">Add new user</button>

                    <Pagination />
                </section>        
            </main>
            
            <Footer />
        </>
    )
}