import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
    <>
        <Header />

        <Footer />
    </>
)