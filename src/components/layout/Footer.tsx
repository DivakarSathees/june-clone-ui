import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  "Decor & Furnishing": [
    "Artifacts", "Table Lamps", "Photo Frames", "Wall Clocks",
    "Vases & Planters", "Cushion Covers",
  ],
  "Top Categories": [
    "Home & Living", "Kitchen & Dining", "Stationery",
    "Eyewear", "Personal Care", "Accessories",
  ],
  "Quick Links": [
    "About The June Shop", "Returns & Refund Policy",
    "Shipping & Delivery", "Privacy Policy", "FAQs",
  ],
  "Help": [
    "Contact Us", "Track Order", "Sell With Us",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Trust badges */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Free & Priority Shipping", desc: "Orders Delivered within 2-3 Days!" },
            { title: "Safe & Secure Payments", desc: "UPI, Wallets, Cards, Net Banking" },
            { title: "Easy Returns", desc: "Raise a Request within 48 Hours!" },
            { title: "Premium Support", desc: "Call, WhatsApp & Email" },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="font-sans text-xs font-bold uppercase tracking-nav text-foreground">{item.title}</h4>
              <p className="font-sans text-[11px] text-muted-foreground mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-bold uppercase tracking-tight-heading mb-4">The June Shop</h3>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-4">
              Email Us: <span className="text-foreground font-medium">help@thejuneshop.com</span>
            </p>
            <div className="flex gap-4">
              <Facebook size={16} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <Twitter size={16} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <Instagram size={16} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
              <Youtube size={16} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-nav text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/products"
                      className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-nav text-foreground mb-1">Sign Up for Email</h4>
            <p className="font-sans text-[11px] text-muted-foreground">Get first dibs on new arrivals, sales & more!</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="font-sans text-xs px-4 py-2.5 border border-border bg-background text-foreground flex-1 md:w-64 outline-none focus:border-foreground transition-colors"
            />
            <button className="font-sans text-[10px] font-bold uppercase tracking-nav bg-primary text-primary-foreground px-6 py-2.5 hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="font-sans text-[10px] text-muted-foreground">
            © 2026 June Retail Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
