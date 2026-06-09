import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly is Beef Tallow?',
    a: 'Beef tallow is rendered fat from cattle. At Ancestral Glow, we use only 100% grass-fed, pasture-raised tallow. It is a traditional skincare ingredient rich in fat-soluble vitamins (A, D, E, and K) and fatty acids that are nearly identical to those found in human skin.',
  },
  {
    q: 'Does tallow skincare smell like beef?',
    a: 'Not at all! We use a meticulous rendering and purifying process to ensure our tallow is clean and neutral-scented. Our products have a very light, natural aroma from the high-quality organic ingredients like raw honey or botanicals.',
  },
  {
    q: 'Why is grass-fed tallow better than grain-fed?',
    a: 'Nutrient density is key. Grass-fed tallow contains significantly higher levels of CLA (conjugated linoleic acid) and Omega-3 fatty acids, which are essential for skin healing and reducing inflammation. It\'s simply a superior product for your skin.',
  },
  {
    q: 'How long does a jar last? (Shelf Life)',
    a: 'Because our products are 100% active and contain no water, they are very shelf-stable. Our tallow balms and creams typically have a shelf life of 12 months when stored in a cool, dry place out of direct sunlight.',
  },
  {
    q: 'Is it safe for sensitive skin or eczema?',
    a: 'Yes! Tallow is one of the most gentle and non-irritating substances you can put on your skin. Its anti-inflammatory properties make it a favorite for those with eczema, psoriasis, or highly sensitive skin.',
  },
  {
    q: 'Can I use it on my baby?',
    a: 'Absolutely. Our Organic Whipped Tallow Balm is free from essential oils and fragrances, making it the perfect, non-toxic choice for diaper rash, cradle cap, or general baby skin hydration.',
  },
  {
    q: 'Do you offer returns?',
    a: 'We want you to love your glow! If you aren\'t satisfied with your purchase, we offer a 30-day return policy on all products. Please reach out to our customer service team for assistance.',
  },
  {
    q: 'Where do you ship?',
    a: 'Currently, we ship throughout the US, Canada, UK, and Australia. We are working on expanding our reach to more ancestral health enthusiasts worldwide!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <h2 className="section-title fade-in">Frequently Asked Questions</h2>
        <p className="section-subtitle fade-in" style={{ animationDelay: '0.1s' }}>
          Everything you need to know about tallow skincare, our products, 
          and what makes Ancestral Glow different.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item fade-in ${openIndex === index ? 'open' : ''}`}
              style={{ animationDelay: `${0.08 * (index + 1)}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                {faq.q}
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}