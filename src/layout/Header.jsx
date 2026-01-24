import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Search,
  ShoppingCart,
  User,
  Heart,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Gravatar from "react-gravatar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  const user = useSelector((state) => state.client.user);
  const { categories, fetchState } = useSelector((state) => state.product);
  const { cart } = useSelector((state) => state.shoppingCart);

  const [cartOpen, setCartOpen] = useState(false);

  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

  const totalCount = cart.reduce((t, item) => t + item.count, 0);

  const location = useLocation();

  useEffect(() => {
    setCartOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full">
      {/* --- KÜÇÜK EKRAN HEADER --- */}
      <div className="md:hidden flex flex-col px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="text-lg font-bold text-gray-800">Bandage</div>
          <div className="flex items-center space-x-4">
            <img
              src="/images/icons/settings.png"
              alt="settings"
              className="w-6 h-6"
            />
            <img
              src="/images/icons/search-icon.png"
              alt="search"
              className="w-6 h-6"
            />
            <img
              src="/images/icons/shopping-cart.png"
              alt="cart"
              className="w-6 h-6"
            />
            <img src="/images/icons/menu.png" alt="menu" className="w-6 h-5" />
          </div>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-8 text-gray-500 text-lg">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
          <Link to="/shop" className="hover:text-gray-800">
            Product
          </Link>
          <a href="#" className="hover:text-gray-800">
            Pricing
          </a>
          <Link to="/contact" className="hover:text-gray-800">
            Contact
          </Link>
        </nav>
      </div>

      <div className="hidden md:block">
        {/*BUYUK EKRAN TOP BAR */}
        <div className="bg-[#252B42] text-white text-sm px-6 py-2 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-2">
              <Phone size={14} />
              <span>(225) 555-0118</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail size={14} />
              <span>michelle.rivera@example.com</span>
            </span>
          </div>
          <div className="text-center">
            Follow Us and get a chance to win 80% off
          </div>
          <div className="flex items-center space-x-3">
            <span>Follow Us :</span>
            <Instagram size={16} className="cursor-pointer" />
            <Youtube size={16} className="cursor-pointer" />
            <Facebook size={16} className="cursor-pointer" />
            <Twitter size={16} className="cursor-pointer" />
          </div>
        </div>

        {/* BUYUK EKRAN HEADER */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-12">
            <div className="text-lg font-bold text-gray-800">Bandage</div>
            <nav className="hidden md:flex items-center space-x-8 text-gray-500 text-lg">
              <Link to="/" className="hover:text-gray-800">
                Home
              </Link>
              <div className="relative group">
                <Link to="/shop" className="hover:text-gray-800 inline-block">
                  Shop
                </Link>
                <div className="absolute left-0 top-full invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-lg border p-6 space-x-12 z-50 transition-all duration-200">
                  {fetchState === "FETCHING" && (
                    <p className="text-gray-400 italic">Loading...</p>
                  )}

                  {fetchState === "FETCHED" && (
                    <div className="flex space-x-12">
                      {/* Kadın kategorileri */}
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Kadın</h3>
                        <ul className="space-y-1 text-gray-600">
                          {womenCategories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                to={`/shop/kadin/${cat.title
                                  .toLowerCase()
                                  .replace(" ", "-")}/${cat.id}`}
                                className="block px-2 py-1 hover:bg-gray-100 rounded"
                              >
                                {cat.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-800 mb-2">Erkek</h3>
                        <ul className="space-y-1 text-gray-600">
                          {menCategories.map((cat) => (
                            <li key={cat.id}>
                              <Link
                                to={`/shop/erkek/${cat.title
                                  .toLowerCase()
                                  .replace(" ", "-")}/${cat.id}`}
                                className="block px-2 py-1 hover:bg-gray-100 rounded"
                              >
                                {cat.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {fetchState === "FAILED" && (
                    <p className="text-red-400 italic">Failed to load</p>
                  )}
                </div>
              </div>
              <Link to="/about" className="hover:text-gray-800">
                About
              </Link>
              <a href="#" className="hover:text-gray-800">
                Blog
              </a>
              <Link to="/contact" className="hover:text-gray-800">
                Contact
              </Link>
              <a href="#" className="hover:text-gray-800">
                Pages
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            {user?.email ? (
              <div className="relative group">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <Gravatar
                    email={user.email}
                    size={32}
                    className="rounded-full border"
                  />
                  <span className="text-gray-700 font-medium">
                    {user.name || user.email}
                  </span>
                </div>

                <ul
                  className="absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded
                 invisible opacity-0 group-hover:visible group-hover:opacity-100
                 transition-all duration-200 z-50"
                >
                  <li>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Siparişlerim
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        sessionStorage.removeItem("token");
                        window.location.href = "/login";
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Çıkış Yap
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                <User
                  size={18}
                  className="cursor-pointer text-blue-600 hover:text-gray-800 m-1"
                />
                Login / Register
              </Link>
            )}

            <Search
              size={18}
              className="cursor-pointer text-blue-600 hover:text-gray-800"
            />
            <div className="relative">
              <div
                onClick={() => setCartOpen(!cartOpen)}
                className="cursor-pointer relative"
              >
                <ShoppingCart size={18} className="text-blue-600" />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                    {totalCount}
                  </span>
                )}
              </div>

              {cartOpen && (
                <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg border rounded-lg p-4 z-50">
                  <h3 className="text-lg font-bold mb-3">Shopping Cart</h3>

                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-sm">Your cart is empty.</p>
                  ) : (
                    <div className="space-y-3 max-h-72 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center gap-3 border-b pb-2"
                        >
                          <img
                            src={item.product.images?.[0]?.url}
                            className="w-14 h-14 object-cover rounded"
                          />
                          <div>
                            <p className="font-semibold">{item.product.name}</p>
                            <p className="text-sm text-gray-600">
                              {item.count} × ${item.product.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      to="/cart"
                      onClick={() => setCartOpen(false)}
                      className="w-full text-center py-2 bg-[#23A6F0] text-white rounded hover:bg-blue-700"
                    >
                      Go to Cart
                    </Link>
                    <Link
                      to="/checkout"
                      onClick={() => setCartOpen(false)}
                      className="w-full text-center py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Heart
              size={18}
              className="cursor-pointer text-blue-600 hover:text-gray-800"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
