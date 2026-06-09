const products = [
  {
    id: 1,
    name: 'Organic Whipped Tallow Balm',
    headline: 'The Gold Standard of Natural Hydration.',
    category: 'Face & Body',
    description: 'Discover the pure power of nature\'s original moisturizer. Our Organic Whipped Tallow Balm is the flagship of the Ancestral Glow collection, meticulously crafted for those who refuse to compromise on skin health. Sourced exclusively from 100% grass-fed, pasture-raised cattle, this balm is a bio-identical skin superfood.\n\nBecause tallow\'s fatty acid profile is remarkably similar to our own skin\'s sebum, it is recognized and absorbed instantly. We whip our tallow to a light, airy perfection, ensuring a luxurious application that leaves your skin feeling velvety soft and deeply hydrated without a heavy, greasy residue.',
    price: 35.00,
    comparePrice: 45.00,
    benefits: [
      'Bio-Identical Hydration — Naturally mimics human skin oils for deep, instant absorption',
      'Vitamin Rich — Packed with Vitamins A, D, E, and K to support skin repair and elasticity',
      '100% Grass-Fed — Sourced from regenerative farms for the highest nutrient density',
      'Pure & Simple — Zero synthetic fillers, water, or artificial preservatives',
      'Whipped Texture — Light, airy, and easy to apply for a non-greasy finish',
    ],
    tag: 'Best Seller',
    image: '/images/product_tallow_balm.png',
  },
  {
    id: 2,
    name: 'Honey-Infused Tallow Face Cream',
    headline: 'Radiance in Every Jar.',
    category: 'Face Moisturizer',
    description: 'Elevate your daily skincare ritual with the perfect marriage of earth and hive. Our Honey-Infused Tallow Face Cream takes the foundational nourishment of grass-fed tallow and infuses it with the legendary healing properties of raw organic honey. This is a revitalizing treatment designed to restore your skin\'s natural brilliance and resilience.\n\nRaw honey is a natural humectant, drawing moisture from the air into your skin for a plump, dewy appearance. Honey is naturally antibacterial and anti-inflammatory, making this cream an exceptional choice for calming redness, soothing acne-prone skin, or addressing the signs of aging.',
    price: 39.00,
    comparePrice: 49.00,
    benefits: [
      'Humectant Hydration — Raw honey pulls moisture into the skin for a lasting, dewy glow',
      'Antibacterial Properties — Naturally calms inflammation and supports clear skin',
      'Anti-Aging Support — Rich in antioxidants that fight free radicals and support elasticity',
      'Soothing Barrier — Tallow creates a breathable protective layer against environmental stressors',
      'Clean Luxury — Premium, minimalist formula that feels as good as it works',
    ],
    tag: 'New',
    image: '/images/product_honey_cream.png',
  },
  {
    id: 3,
    name: 'Tallow & Beeswax Lip Balm Set',
    headline: 'Pure Protection for Your Smile.',
    category: 'Lips (Set of 3)',
    description: 'Say goodbye to petroleum-based sticks and synthetic flavors. Our Tallow & Beeswax Lip Balm Set offers a return to edible-grade simplicity for your most delicate skin. Your lips are incredibly thin and absorb everything you put on them — so why settle for anything less than 100% natural?\n\nEach balm is crafted with grass-fed tallow for deep healing and local beeswax for a long-lasting protective seal. Unlike standard lip balms that leave you constantly reapplying, our formula provides sustained moisture that stays put. Packaged in eco-friendly, plastic-free cardboard tubes.',
    price: 15.00,
    comparePrice: 18.00,
    benefits: [
      'Edible-Grade Ingredients — Safe, non-toxic, free from all petroleum and plastics',
      'Deeply Healing — Grass-fed tallow provides essential fatty acids to repair chapped lips',
      'Long-Lasting Seal — Natural beeswax provides a durable moisture barrier',
      'Eco-Friendly Packaging — 100% plastic-free, compostable cardboard tubes',
      'Perfect for Gifting — Set of three ensures you always have pure protection on hand',
    ],
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
                <p className="product-headline">{product.headline}</p>
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
                    alert(`🛒 "${product.name}" added to your cart!\n\nThis is a demo storefront. Contact us at hello@ancestralglow.com to place an order.`);
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