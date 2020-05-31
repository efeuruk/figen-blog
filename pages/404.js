import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>
            <h1>Hmmmm... I think you are lost...</h1>
            <div style={{width: '300px', height: '300px', margin: '0 auto'}}>
                <img src="/images/404.jpg" alt="404"/>
            </div>
        </Layout>
        
    )
}