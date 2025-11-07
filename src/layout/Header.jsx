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
import Gravatar from "react-gravatar";

export default function Header() {
  const user = useSelector((state) => state.client.user);
  const { categories, fetchState } = useSelector((state) => state.product);
  const womenCategories = categories.filter((cat) => cat.gender === "k");
  const menCategories = categories.filter((cat) => cat.gender === "e");

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
                <Link to="/shop" className="hover:text-gray-800">
                  Shop
                </Link>
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block hover:block bg-white shadow-lg border p-6 space-x-12 z-50 transition-all duration-150">
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
              <div className="flex items-center space-x-3">
                <Gravatar
                  email={user.email}
                  size={32}
                  className="rounded-full border"
                />
                <span className="text-gray-700 font-medium">
                  {user.name || user.email}
                </span>
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
            <ShoppingCart
              size={18}
              className="cursor-pointer text-blue-600 hover:text-gray-800"
            />
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
