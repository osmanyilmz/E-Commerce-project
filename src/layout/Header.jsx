export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-3 border-b">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-lg font-bold text-gray-800">Bandage</div>

        <div className="flex items-center space-x-4 md:ml-8">
          <img
            src="/images/icons/settings.png"
            alt="cart"
            className="w-6 h-6"
          />
          <img
            src="/images/icons/search-icon.png"
            alt="search"
            className="w-6 h-6"
          />
          <img
            src="/images/icons/shopping-cart.png"
            alt="card"
            className="w-6 h-6"
          />
          <img src="/images/icons/menu.png" alt="user" className="w-6 h-6" />
        </div>
      </div>

      <nav className="flex flex-col items-center space-y-6 mt-8 text-gray-500 text-lg md:flex-row md:space-y-0 md:space-x-8 md:mt-0">
        <a href="#" className="hover:text-gray-800">
          Home
        </a>
        <a href="#" className="hover:text-gray-800">
          Product
        </a>
        <a href="#" className="hover:text-gray-800">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-800">
          Contact
        </a>
      </nav>
    </header>
  );
}
