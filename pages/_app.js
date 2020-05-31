import '../styles/global.css'
import Head from 'next/head'
function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <script src="https://kit.fontawesome.com/d3da0e9ae3.js" crossOrigin="anonymous"></script>
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default App;