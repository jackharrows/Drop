// ─── Product data ───────────────────────────────────────────────────────────
// To add or edit a product, just update this array.
// Set `buyUrl` to your real Stripe / PayPal / Shopify checkout link.
const PRODUCTS = [
  {
    id: 1,
    name: 'Whipped Tallow Balm',
    category: 'Face & Body',
    description:
      'Our signature balm — deeply moisturizing, non-greasy, and rich in fat-soluble vitamins. Ideal for dry skin, eczema, and sensitive complexions.',
    price: 35,
    comparePrice: 45,
    badge: 'Best Seller',
    badgeStyle: 'best-seller',
    perks: ['Deeply hydrating', 'Non-comedogenic', 'Vitamins A, D, E & K', 'Lasts 3–4 months'],
    image: '/images/product_tallow_balm.png',
    buyUrl: '#', // ← replace with your checkout link
  },
  {
    id: 2,
    name: 'Honey Tallow Face Cream',
    category: 'Face Moisturiser',
    description:
      'Grass-fed tallow meets raw Manuka honey for an ultra-nourishing face cream. Anti-aging, antibacterial, and lightweight enough for daily wear.',
    price: 39,
    comparePrice: 49,
    badge: 'New',
    badgeStyle: 'new',
    perks: ['Anti-aging', 'Raw Manuka honey', 'Brightens complexion', 'Lightweight feel'],
    image: '/images/product_honey_cream.png',
    buyUrl: '#', // ← replace with your checkout link
  },
  {
    id: 3,
    name: 'Tallow & Beeswax Lip Set',
    category: 'Lips — Set of 3',
    description:
      'Plastic-free lip balms made with tallow, beeswax, and organic oils. Three flavours: unscented, vanilla, and peppermint. Zero-waste packaging.',
    price: 15,
    comparePrice: 18,
    badge: 'Eco',
    badgeStyle: 'eco',
    perks: ['Plastic-free', 'Edible-grade ingredients', '3 flavours included', 'Zero-waste packaging'],
    image: '/images/product_lip_balm.png',
    buyUrl: '#', // ← replace with your checkout link
  },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <span className="section-label">Our Collection</span>
          <h2 className="section-title">Made from pasture to package</h2>
          <p className="section-subtitle">
            Every product starts with grass-fed tallow and clean, purposeful ingredients —
            nothing your skin doesn't recognise.
          </p>
        </div>

        {/* Grid */}
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <article key={product.id} className="product-card">
              {/* Image */}
              <div className="product-img-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                />
                {product.badge && (
                  <span className={`product-badge ${product.badgeStyle}`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="product-body">
                <p className="product-category">{product.category}</p>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>

                <ul className="product-perks">
                  {product.perks.map((perk) => (
                    <li key={perk}>{perk}</li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="product-footer">
                  <div>
                    <span className="product-price">${product.price}</span>
                    {product.comparePrice && (
                      <span className="product-price-compare"> ${product.comparePrice}</span>
                    )}
                  </div>
                  <a href={product.buyUrl} className="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
