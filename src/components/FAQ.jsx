import { useState } from 'react';

const faqs = [
  {
    q: 'What is beef tallow skincare?',
    a: 'Beef tallow is rendered fat from grass-fed cattle. It\'s naturally rich in vitamins A, D, E, and K — the same nutrients found in healthy human skin. For centuries, tallow was used as a traditional moisturizer before modern skincare existed. It\'s deeply nourishing, non-comedogenic (won\'t clog pores), and suitable for even the most sensitive skin types.',
  },
  {
    q: 'Is tallow skincare suitable for acne-prone skin?',
    a: 'Yes! Despite being fat-based, grass-fed tallow has a fatty acid profile very similar to human sebum. This means your skin absorbs it easily without feeling greasy. The antimicrobial properties of tallow can actually help balance skin bacteria and reduce acne breakouts. Many customers with acne, rosacea, and eczema report significant improvements.',
  },
  {
    q: 'How long does a jar last?',
    a: 'Our 60g Whipped Tallow Balm typically lasts 3-4 months with daily use. A little goes a long way — warm a pea-sized amount between your fingers and apply to damp skin. Our Lip Balm Set of 3 lasts approximately 4-6 months with regular application.',
  },
  {
    q: 'Is this product vegan?',
    a: 'No, our products use grass-fed beef tallow as the primary ingredient. However, we source exclusively from regenerative farms where animals are pasture-raised, grass-fed, and humanely treated. We believe in honoring the animal by using every part respectfully.',
  },
  {
    q: 'What is your shipping policy?',
    a: 'We offer free shipping on all orders over $50 within the US. Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available for $9.99. We currently ship to the US, Canada, UK, and Australia. International orders arrive within 7-14 business days.',
  },
  {
    q: 'What is your return policy?',
    a: 'We stand behind our products 100%. If you\'re not satisfied for any reason, contact us within 30 days of delivery for a full refund or exchange. We\'ll even cover return shipping. No questions asked — that\'s our Satisfaction Guarantee.',
  },
  {
    q: 'How should I store my tallow balm?',
    a: 'Store in a cool, dry place away from direct sunlight. Tallow balm has a natural melting point around 100°F (38°C), so it may soften in warm weather — this is normal and doesn\'t affect quality. If melted, simply place in the refrigerator for 15-20 minutes to restore its whipped texture.',
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
          and what makes us different.
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