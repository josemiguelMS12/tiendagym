import Head from 'next/head'
import Siderbar from '../components/Siderbar'

export default function Layout({children , pagina}) {
  return (
    <>
        <Head>
            <title>Tienda - {pagina}</title>
            <meta name="description" content="Tienda Gym" />
        </Head>
        <div className='md:flex'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
           <Siderbar />
        </aside>

        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen 
        overflow-y-scroll'>
            <div className='p-10'>{children}</div>
            </main>
        </div>
    </>
    
 )
} 