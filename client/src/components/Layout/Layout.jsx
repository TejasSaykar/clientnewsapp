import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { Helmet } from 'react-helmet'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, description, title, keyword, auther }) => {
    return (
        <>

            <Helmet>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
                <meta name='keyword' content={keyword} />
                <meta name='auther' content={auther} />
                <title>{title}</title>
            </Helmet>

            <div className='w-full'>
                <header>
                    <Header />
                </header>

                <main>
                    <ToastContainer />
                    {children}
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout
