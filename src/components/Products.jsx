const products = [
  {
    id: 1,
    name: 'Organic Whipped Tallow Balm',
    category: 'Face & Body',
    description: 'Our signature whipped tallow balm — deeply moisturizing, non-greasy, and packed with fat-soluble vitamins. Perfect for dry skin, eczema, and sensitive complexions.',
    price: 35.00,
    comparePrice: 45.00,
    benefits: ['Deeply hydrating', 'Non-comedogenic', 'Vitamins A, D, E & K', 'Lasts 3-4 months'],
    tag: 'Best Seller',
    image: '/images/product_tallow_balm.png',
  },
  {
    id: 2,
    name: 'Honey-Infused Tallow Face Cream',
    category: 'Face Moisturizer',
    description: 'Ultra-luxe face cream combining grass-fed tallow with raw Manuka honey. Anti-aging, antibacterial, and incredibly nourishing for a radiant, youthful glow.',
    price: 39.00,
    comparePrice: 49.00,
    benefits: ['Anti-aging properties', 'Raw Manuka honey', 'Brightens complexion', 'Lightweight feel'],
    tag: 'New',
    image: '/images/product_honey_cream.png',
  },
  {
    id: 3,
    name: 'Tallow & Beeswax Lip Balm Set',
    category: 'Lips (Set of 3)',
    description: 'Plastic-free, edible-grade lip balms made with tallow, beeswax, and organic oils. Set of three — unscented, vanilla, and peppermint. Zero waste.',
    price: 15.00,
    comparePrice: 18.00,
    benefits: ['Plastic-free', 'Edible ingredients', 'Set of 3 flavors', 'Zero waste packaging'],
    tag: 'Eco',
    image: '/images/product_lip_balm.png',
  },
];

export default function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <h2 className="section-title fade-in">Our Signature Collection</h2>
        <p className="section-subtitle fade-in" style={{ animationDelay: '0.1s' }}>
          From pasture to package — each product is crafted with grass-fed tallow 
          and organic ingredients your skin will thank you for.
        </p>

        <div className="grid-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card fade-in"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="product-image-placeholder" style={{ display: 'none' }}>🧴</span>
                {product.tag && (
                  <span className={`badge badge-${product.tag === 'Best Seller' ? 'primary' : 'secondary'} product-tag`}>
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="product-info">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-price-row">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  {product.comparePrice && (
                    <span className="product-price-compare">${product.comparePrice.toFixed(2)}</span>
                  )}
                </div>

                <ul className="product-benefits">
                  {product.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`🛒 "${product.name}" added to your cart!\n\nThis is a demo storefront. Contact us to place an order.`);
                  }}
                >
                  Add to Cart — ${product.price.toFixed(2)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}