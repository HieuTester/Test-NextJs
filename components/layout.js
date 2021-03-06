import Head from "next/head";
import Header from "./header";

function Layout({ user, loading, children }) {
 return (
   <>
     <Head>
       <title>Bookmark Management</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>

     <Header user={user} loading={loading} />

     <main>
       <div className="container">{children}</div>
     </main>
   </>
 );
}

export default Layout;