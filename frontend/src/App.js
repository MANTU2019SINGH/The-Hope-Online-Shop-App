import React from 'react'
import data from './data'
import Product from './Components/Product'

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="index.html">
              The Hope
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign in</a>
          </div>
        </header>
        <main>
          <div>
            <div className="row center">
              {data.products.map(product => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </main>
        <footer className="row center">
          <div>All right reserved</div>
        </footer>
      </div>
    </div>
  )
}

export default App
