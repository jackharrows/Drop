import { useState } from 'react';

// ─── FAQ data ─────────────────────────────────────────────────────────────────
// Add, remove, or edit questions here — the component handles the rest.
const FAQS = [
  {
    q: 'What exactly is beef tallow?',
    a: 'Beef tallow is rendered fat from grass-fed cattle. It\'s been used for centuries as a skin moisturiser because its fatty-acid profile closely mirrors human sebum — making it exceptionally biocompatible and nourishing.',
  },
  {
    q: 'Will it make my skin smell like beef?',
    a: 'No. Our tallow is carefully rendered and purified, leaving it nearly odourless. Some products have a very faint, clean scent that disappears within minutes of application.',
  },
  {
    q: 'Is tallow suitable for acne-prone or oily skin?',
    a: 'Yes — tallow is non-comedogenic, meaning it won\'t clog pores. Many customers with acne-prone skin find it balances sebum production rather than triggering breakouts.',
  },
  {
    q: 'How long does a jar last?',
    a: 'The 4 oz Whipped Tallow Balm typically lasts 3–4 months with daily full-face and body use. A little goes a long way — tallow absorbs quickly so you don\'t need much.',
  },
  {
    q: 'What is your shelf life?',
    a: 'Our products have a 12-month shelf life from the production date. Store in a cool, dry place away from direct sunlight to keep them at their best.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We currently ship across the continental USA. International shipping is coming soon — sign up to our newsletter to be the first to know.',
  },
  {
    q: 'What is your returns policy?',
    a: 'We offer a 30-day satisfaction guarantee. If you\'re not happy with your purchase, contact us and we\'ll make it right — no awkward questions.',
  },
  {
    q: 'Are your products cruelty-free?',
    a: 'We never test on animals, and our tallow is sourced from cattle raised humanely on regenerative, pasture-based farms. We\'re committed to ethical sourcing at every step.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Questions</span>
          <h2 className="section-title">Frequently asked</h2>
          <p className="section-subtitle">
            Everything you want to know before making the switch to ancestral skincare.
          </p>
        </div>

        <div className="faq-wrap">
          {FAQS.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-btn" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                {item.q}
                <span className="faq-icon" aria-hidden="true">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
