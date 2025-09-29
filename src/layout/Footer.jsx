export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 px-6 py-10">
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col items-center md:flex-row md:justify-between bg-[#fafafa] items-start">
          <div className="font-bold text-xl text-gray-800">Bandage</div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img
              src="/images/icons/footer/facebook.png"
              alt="facebook"
              className="w-6 h-6"
            />
            <img
              src="/images/icons/footer/instagram.png"
              alt="instagram"
              className="w-6 h-6"
            />
            <img
              src="/images/icons/footer/twitter.png"
              alt="twitter"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-5 ">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Carrier</a>
              </li>
              <li>
                <a href="#">We are hiring</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Business Marketing</a>
              </li>
              <li>
                <a href="#">User Analytic</a>
              </li>
              <li>
                <a href="#">Live Chat</a>
              </li>
              <li>
                <a href="#">Unlimited Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">IOS & Android</a>
              </li>
              <li>
                <a href="#">Watch a Demo</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Get In Touch</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Lorem imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-10 border-t pt-6">
          Made With Love By <span className="font-medium">Finland</span> All
          Right Reserved
        </div>
      </div>
    </footer>
  );
}
