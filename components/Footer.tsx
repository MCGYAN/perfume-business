"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useCMS } from '@/context/CMSContext';

function FooterSection({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-blue-800/50 lg:border-none last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left lg:py-0 lg:cursor-default lg:mb-6"
      >
        <h4 className="font-bold text-lg text-white">{title}</h4>
        <i className={`ri-arrow-down-s-line text-blue-400 text-xl transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0 lg:max-h-full lg:overflow-visible'}`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  const { getSetting } = useCMS();

  const siteName = getSetting('site_name') || 'The Perfume Empire';
  const siteTagline = getSetting('site_tagline') || 'Premium fragrances — East Legon. Wholesale & retail.';
  const contactEmail = getSetting('contact_email') || 'tiwaperfumestyle@gmail.com';
  const contactPhone = getSetting('contact_phone') || '0553967658';
  const contactWhatsapp = getSetting('contact_whatsapp') || '0553967658';
  const contactAddress = getSetting('contact_address') || 'East Legon, near America House';
  const siteLogo = getSetting('site_logo') || '/logo.png';
  const socialFacebook = getSetting('social_facebook') || '';
  const socialInstagram = getSetting('social_instagram') || '';
  const socialTwitter = getSetting('social_twitter') || '';
  const socialTiktok = getSetting('social_tiktok') || '';
  const socialSnapchat = getSetting('social_snapchat') || '';
  const socialYoutube = getSetting('social_youtube') || '';

  return (
    <footer className="relative mt-16 z-0">

      <div className="absolute inset-0 bg-gray-950 rounded-t-[2.5rem] -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="text-white pt-14 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand */}
            <div className="lg:col-span-1 space-y-5">
              <Link href="/" className="inline-block group">
                <img src={siteLogo} alt={siteName} className="h-12 w-auto max-w-[220px] object-contain group-hover:opacity-90 transition-opacity" />
              </Link>
              <p className="text-white/60 leading-relaxed text-sm font-light">
                {siteTagline}
              </p>
              <p className="text-white/50 text-sm font-light">{contactAddress}</p>
              <a href={`tel:${contactPhone}`} className="text-white/70 text-sm font-medium hover:text-white transition-colors block">055 396 7658</a>
              <div className="flex gap-2 pt-1">
                {[
                  { link: socialInstagram, icon: 'ri-instagram-line', label: 'Instagram' },
                  { link: socialTiktok, icon: 'ri-tiktok-fill', label: 'TikTok' },
                  { link: socialSnapchat, icon: 'ri-snapchat-fill', label: 'Snapchat' },
                  { link: socialYoutube, icon: 'ri-youtube-fill', label: 'YouTube' },
                  { link: socialTwitter, icon: 'ri-twitter-x-fill', label: 'X' },
                  { link: socialFacebook, icon: 'ri-facebook-fill', label: 'Facebook' }
                ].filter(s => s.link).map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                  >
                    <i className={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Shop</h4>
              <ul className="space-y-2.5 text-sm text-white/60 font-light">
                <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
                <li><Link href="/categories" className="hover:text-white transition-colors">Collections</Link></li>
                <li><Link href="/shop?category=mens" className="hover:text-white transition-colors">Men&apos;s</Link></li>
                <li><Link href="/shop?category=womens" className="hover:text-white transition-colors">Women&apos;s</Link></li>
                <li><Link href="/shop?sort=newest" className="hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Support</h4>
              <ul className="space-y-2.5 text-sm text-white/60 font-light">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/order-tracking" className="hover:text-white transition-colors">Track Order</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-semibold tracking-widest text-white/50 uppercase">Company</h4>
              <ul className="space-y-2.5 text-sm text-white/60 font-light">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40 font-light">
            <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="text-white/30">Secure payment</span>
              <i className="ri-visa-line text-lg text-white/40" aria-hidden />
              <i className="ri-mastercard-line text-lg text-white/40" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
