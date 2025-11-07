import Header from './components/Header'
import UserList from './components/UserList'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Header />

            <main className="main">
                <UserList />
            </main>
            
            <Footer />
        </>
    )
}