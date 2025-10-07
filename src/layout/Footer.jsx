export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-10">
      <div className="max-w-6xl mx-auto font-bold">
        <div className="flex flex-col items-center md:flex-row md:justify-between items-start p-8">
          <div className="font-bold text-2xl text-gray-800">Bandage</div>
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

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-5 px-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Company Info</h3>
            <ul className="space-y-2 text-[#737373]">
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
            <ul className="space-y-2 text-[#737373]">
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
            <ul className="space-y-2 text-[#737373]">
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
            <ul className="space-y-2 text-[#737373]">
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
                className="flex-1 px-5 py-4 border rounded-l-md border-[#E6E6E6] focus:outline-none bg-[#F9F9F9]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#23A6F0] text-white rounded-r-md"
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
        <div
          className="text-center text-[#737373] mt-10 
         p-8 bg-[#FAFAFA]"
        >
          Made With Love By <br />
          Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
}
