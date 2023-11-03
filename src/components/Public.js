import { Link } from 'react-router-dom'

const Public = () => {
  const content = (
    <section className='public'>
      <header>
        <h1>
          Welcome to <span className='nowrap'>Ultimate P Repairs</span>
        </h1>
      </header>
      <main className='public__main'>
        <p>
          Located in the Beautiful city of Pretoria, Ultimate P Repairs provides
          a trained staff ready to meet your tech repair needs
        </p>
        <address className='public__addr'>
          Ultimate P Repairs
          <br />
          660 Olievenhoutbosch
          <br />
          Pretoria 
          <br />
           <a href="tel:+27684871518">(068) 487-1518</a>
        </address>
        <br/>
        <p>Owner: Prosper Mugwagwa</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  )
  return content
}

export default Public
