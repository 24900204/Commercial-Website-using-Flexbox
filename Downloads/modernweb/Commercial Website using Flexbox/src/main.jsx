import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const products = [
  { id: 1, icon: '🎧', name: 'Wireless Headphones', category: 'Audio', price: 2499, old: 3499, badge: 'Best Seller' },
  { id: 2, icon: '⌚', name: 'Smart Watch Pro', category: 'Wearables', price: 3999, old: 5499, badge: '20% OFF' },
  { id: 3, icon: '🎒', name: 'Urban Backpack', category: 'Lifestyle', price: 1499, old: 1999, badge: 'Popular' },
  { id: 4, icon: '📷', name: 'Mini Action Camera', category: 'Gadgets', price: 5299, old: 6999, badge: 'New' },
  { id: 5, icon: '👟', name: 'Everyday Sneakers', category: 'Fashion', price: 2199, old: 2999, badge: 'Trending' },
  { id: 6, icon: '💡', name: 'Smart LED Lamp', category: 'Home', price: 999, old: 1499, badge: 'Deal' },
];

function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      <div className="topbar">
        <span>🚚 Free delivery on orders above ₹999</span>
        <span>Secure payments • Easy returns</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#home">Flex<span>Mart</span></a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#offers">Offers</a>
          <a href="#about">About</a>
        </nav>
        <div className="nav-actions">
          <button aria-label="Search">⌕</button>
          <button aria-label="Account">♙</button>
          <button className="cart-btn" aria-label="Cart">🛒 <b>{cart.length}</b></button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SMART SHOPPING • BETTER LIVING</p>
            <h1>Everything you love.<br /><span>One flexible store.</span></h1>
            <p className="hero-text">
              Discover everyday essentials, modern gadgets and lifestyle products
              at prices designed for smart shoppers.
            </p>
            <div className="hero-actions">
              <a href="#products" className="primary-btn">Shop Now →</a>
              <a href="#offers" className="secondary-btn">View Offers</a>
            </div>
            <div className="trust-row">
              <div><strong>10K+</strong><small>Happy Customers</small></div>
              <div><strong>500+</strong><small>Products</small></div>
              <div><strong>4.8/5</strong><small>Customer Rating</small></div>
            </div>
          </div>
          <div className="hero-card">
            <div className="sale-pill">LIMITED DEAL</div>
            <div className="hero-product">🎧</div>
            <h3>Wireless Audio</h3>
            <p>Premium sound, everyday comfort.</p>
            <div className="hero-price">₹2,499 <del>₹3,499</del></div>
          </div>
        </section>

        <section className="features">
          <div><span>⚡</span><div><strong>Fast Delivery</strong><small>Across major cities</small></div></div>
          <div><span>🔒</span><div><strong>Secure Checkout</strong><small>100% protected payments</small></div></div>
          <div><span>↩</span><div><strong>Easy Returns</strong><small>7-day return policy</small></div></div>
          <div><span>💬</span><div><strong>Support</strong><small>Here when you need us</small></div></div>
        </section>

        <section id="products" className="products-section">
          <div className="section-heading">
            <div><p className="eyebrow">OUR COLLECTION</p><h2>Featured Products</h2></div>
            <a href="#products">View all products →</a>
          </div>
          <div className="product-grid">
            {products.map(product => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <span className="badge">{product.badge}</span>
                  <span className="product-icon">{product.icon}</span>
                  <button className="heart">♡</button>
                </div>
                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <div className="rating">★★★★★ <span>(4.8)</span></div>
                  <div className="price-row">
                    <strong>₹{product.price.toLocaleString('en-IN')}</strong>
                    <del>₹{product.old.toLocaleString('en-IN')}</del>
                  </div>
                  <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart +</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="offers" className="offer-banner">
          <div>
            <p className="eyebrow">WEEKEND SPECIAL</p>
            <h2>Extra 15% off on selected products</h2>
            <p>Use code <strong>FLEX15</strong> at checkout. Limited time only.</p>
          </div>
          <a href="#products" className="primary-btn">Grab the Deal →</a>
        </section>

        <section id="about" className="about">
          <div>
            <p className="eyebrow">WHY FLEXMART?</p>
            <h2>Built around the way you shop.</h2>
          </div>
          <p>FlexMart is a demo commercial website created using HTML, React and CSS Flexbox. The layout uses flexible rows, columns, wrapping and responsive breakpoints so the navigation, product cards, offers and footer adapt smoothly to desktop, tablet and mobile screens.</p>
        </section>

        {cart.length > 0 && (
          <aside className="cart-panel">
            <strong>Cart: {cart.length} item{cart.length > 1 ? 's' : ''}</strong>
            <span>Total: ₹{total.toLocaleString('en-IN')}</span>
            <button onClick={() => alert('Demo checkout — thank you!')}>Checkout</button>
          </aside>
        )}
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">Flex<span>Mart</span></a>
            <p>Smart products. Flexible shopping.<br />Better everyday experiences.</p>
          </div>
          <div><h4>Shop</h4><a href="#products">All Products</a><a href="#offers">Offers</a><a href="#products">New Arrivals</a></div>
          <div><h4>Help</h4><a href="#about">About Us</a><a href="#about">Shipping</a><a href="#about">Returns</a></div>
          <div><h4>Contact</h4><a href="mailto:hello@flexmart.example">hello@flexmart.example</a><a href="tel:+919000000000">+91 90000 00000</a></div>
        </div>
        <div className="student-footer">
          <span>© 2026 FlexMart. All rights reserved.</span>
          <span><strong>Name:</strong> YOUR NAME &nbsp; | &nbsp; <strong>Register Number:</strong> YOUR REGISTER NUMBER</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
