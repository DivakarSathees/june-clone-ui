import { Link } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PRODUCTS } from "@/data/products";

// Static cart items for UI demo
const cartItems = [
  { product: PRODUCTS[0], quantity: 1 },
  { product: PRODUCTS[2], quantity: 2 },
];

const CartPage = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 lg:py-16">
        <h1 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground tracking-tight-heading mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-0">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-border">
              <span className="col-span-6 font-sans text-[10px] font-bold uppercase tracking-nav text-muted-foreground">Product</span>
              <span className="col-span-2 font-sans text-[10px] font-bold uppercase tracking-nav text-muted-foreground text-center">Price</span>
              <span className="col-span-2 font-sans text-[10px] font-bold uppercase tracking-nav text-muted-foreground text-center">Quantity</span>
              <span className="col-span-2 font-sans text-[10px] font-bold uppercase tracking-nav text-muted-foreground text-right">Total</span>
            </div>

            {cartItems.map(({ product, quantity }) => (
              <div key={product.id} className="grid grid-cols-12 gap-4 py-6 border-b border-border items-center">
                <div className="col-span-12 md:col-span-6 flex gap-4">
                  <Link to={`/product/${product.slug}`} className="w-20 h-24 bg-muted flex-shrink-0 overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div>
                    <Link to={`/product/${product.slug}`} className="font-serif text-base text-foreground hover:text-muted-foreground transition-colors">
                      {product.name}
                    </Link>
                    {product.colors && (
                      <p className="font-sans text-[11px] text-muted-foreground mt-1">{product.colors[0]}</p>
                    )}
                    <button className="mt-2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Remove">
                      <Trash2 size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 text-center">
                  <span className="font-sans text-sm text-foreground">₹{product.price.toLocaleString("en-IN")}</span>
                </div>

                <div className="col-span-4 md:col-span-2 flex justify-center">
                  <div className="inline-flex items-center border border-border">
                    <button className="p-2 hover:bg-muted transition-colors" aria-label="Decrease">
                      <Minus size={12} />
                    </button>
                    <span className="font-sans text-xs font-medium w-8 text-center">{quantity}</span>
                    <button className="p-2 hover:bg-muted transition-colors" aria-label="Increase">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 text-right">
                  <span className="font-sans text-sm font-semibold text-foreground">
                    ₹{(product.price * quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-6 lg:sticky lg:top-28">
              <h2 className="font-sans text-[11px] font-bold uppercase tracking-nav text-foreground mb-6">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground font-medium">₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground font-medium">
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="font-sans text-[10px] text-sale font-medium">✓ Free shipping applied!</p>
                )}
              </div>
              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between font-sans">
                  <span className="text-sm font-bold text-foreground">Total</span>
                  <span className="text-lg font-bold text-foreground">₹{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Shipping progress */}
              {subtotal < 999 && (
                <div className="mb-6">
                  <p className="font-sans text-[10px] text-muted-foreground mb-2">
                    Add ₹{(999 - subtotal).toLocaleString("en-IN")} more for free shipping
                  </p>
                  <div className="w-full bg-border h-1.5">
                    <div
                      className="bg-foreground h-1.5 transition-all"
                      style={{ width: `${Math.min((subtotal / 999) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}

              <button className="w-full py-3.5 font-sans text-[11px] font-bold uppercase tracking-nav bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Checkout
              </button>

              <Link
                to="/products"
                className="block text-center font-sans text-xs text-muted-foreground hover:text-foreground transition-colors mt-4 underline underline-offset-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
