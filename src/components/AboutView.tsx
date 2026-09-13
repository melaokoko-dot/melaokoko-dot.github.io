import { useState, FormEvent } from 'react';
import { SITE_CONTENT } from '../data';

export default function AboutView() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="w-full max-w-xl">
      {/* Section Heading: About */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-[14px] font-normal text-neutral-950">
          About
        </h1>
      </div>

      {/* Short introductory overview */}
      <div className="mb-12 md:mb-16">
        <p className="text-[14px] leading-relaxed text-neutral-600">
          {SITE_CONTENT.bio}
        </p>
      </div>

      {/* Required Subsection: Publishing */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[14px] font-normal text-neutral-950 mb-3">
          Publishing
        </h2>
        <ul className="space-y-2">
          {SITE_CONTENT.publishing.map((item) => (
            <li key={item} className="text-[14px] text-neutral-500 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Subsection: Commission */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[14px] font-normal text-neutral-950 mb-3">
          Commission
        </h2>
        <ul className="space-y-2">
          {SITE_CONTENT.commissions.map((item) => (
            <li key={item} className="text-[14px] text-neutral-500 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-[14px] font-normal text-neutral-950 mb-3">
          Newsletter
        </h2>
        <p className="text-[14px] text-neutral-500 leading-relaxed mb-4">
          Subscribe to receive occasional dispatches on new documentary stories, publications, and exhibitions.
        </p>

        {subscribed ? (
          <div className="text-[14px] text-neutral-950 py-2">
            Thank you for subscribing.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
            <input
              id="newsletter-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-3 py-2 text-[14px] border border-neutral-200 focus:border-neutral-900 focus:outline-none bg-white text-neutral-900 placeholder:text-neutral-400"
            />
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="px-4 py-2 text-[14px] bg-neutral-950 text-white hover:bg-neutral-800 transition-colors cursor-pointer font-normal whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Contact information */}
      <div>
        <h2 className="text-[14px] font-normal text-neutral-950 mb-3">
          Contact
        </h2>
        <div className="space-y-1 text-[14px] text-neutral-500">
          <p>
            <a
              href={`mailto:${SITE_CONTENT.contacts.email}`}
              className="hover:text-neutral-950 transition-colors"
            >
              {SITE_CONTENT.contacts.email}
            </a>
          </p>
          <p>{SITE_CONTENT.contacts.phone}</p>
          <p>
            <a
              href={SITE_CONTENT.contacts.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-950 transition-colors"
            >
              {SITE_CONTENT.contacts.instagram}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
