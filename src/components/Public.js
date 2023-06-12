import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Lalapalooza ltd!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Lala City, Lalapalooza  provides a trained staff ready to meet your artistic requirements.</p>
                <address className="public__addr">
                    Lalapalooza ltd<br />
                    111 Song Drive<br />
                    Lala City, Lalaland<br />
                </address>
                <br />
                <p>Owner: Vincent Singer</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public