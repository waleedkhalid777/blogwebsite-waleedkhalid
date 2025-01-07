// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">About</h4>
            <p className="text-sm">
              Welcome to our blog! We share insights, stories, and resources on various topics to inspire and inform our readers.
            </p>
          </div>

          {/* Categories Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/technology" className="hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/lifestyle" className="hover:text-white">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="hover:text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/travel" className="hover:text-white">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg 
                  className="w-6 h-6 hover:text-green-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.734 0-1.325.591-1.325 1.325v21.351c0 .734.591 1.325 1.325 1.325h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.099 2.797.143v3.242l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.586l-.467 3.622h-3.119v9.293h6.116c.734 0 1.325-.591 1.325-1.325v-21.351c0-.734-.591-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6 hover:text-green-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.833.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.204-4.92 4.919 0 .386.044.762.127 1.124-4.09-.205-7.72-2.166-10.141-5.144-.423.725-.666 1.562-.666 2.457 0 1.694.862 3.189 2.173 4.065-.801-.025-1.555-.245-2.212-.612v.061c0 2.364 1.68 4.337 3.911 4.786-.409.111-.841.171-1.287.171-.314 0-.621-.031-.921-.088.623 1.942 2.432 3.355 4.576 3.393-1.675 1.313-3.785 2.095-6.081 2.095-.394 0-.783-.023-1.168-.068 2.165 1.389 4.734 2.199 7.497 2.199 8.992 0 13.91-7.45 13.91-13.91 0-.211-.005-.422-.014-.632.955-.688 1.786-1.549 2.444-2.531z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-6 h-6 hover:text-green-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.352 3.608 1.326.975.975 1.265 2.243 1.326 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.352 2.633-1.326 3.608-.975.975-2.243 1.265-3.608 1.326-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.352-3.608-1.326-.975-.975-1.265-2.243-1.326-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.352-2.633 1.326-3.608.975-.975 2.243-1.265 3.608-1.326 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.012-4.947.07-1.317.062-2.641.354-3.637 1.351-.996.996-1.288 2.32-1.351 3.637-.058 1.281-.07 1.691-.07 4.947s.012 3.667.07 4.947c.062 1.317.354 2.641 1.351 3.637.996.996 2.32 1.288 3.637 1.351 1.281.058 1.691.07 4.947.07s3.667-.012 4.947-.07c1.317-.062 2.641-.354 3.637-1.351.996-.996 1.288-2.32 1.351-3.637.058-1.281.07-1.691.07-4.947s-.012-3.667-.07-4.947c-.062-1.317-.354-2.641-1.351-3.637-.996-.996-2.32-1.288-3.637-1.351-1.281-.058-1.691-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.3 0-4.162-1.862-4.162-4.162s1.862-4.162 4.162-4.162 4.162 1.862 4.162 4.162-1.862 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.442-.646-1.442-1.442s.646-1.442 1.442-1.442 1.442.646 1.442 1.442-.646 1.442-1.442 1.442z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6 hover:text-green-400"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.44 0h19.123c1.344 0 2.43 1.087 2.43 2.44v19.12c0 1.353-1.086 2.43-2.43 2.43h-19.123c-1.353 0-2.44-1.077-2.44-2.43v-19.12c0-1.353 1.087-2.44 2.44-2.44zm3.812 6.448c0-.72-.597-1.303-1.31-1.303-.72 0-1.31.583-1.31 1.303 0 .721.593 1.303 1.31 1.303s1.31-.582 1.31-1.303zm-.046 11.107h-2.64v-8.295h2.64v8.295zm3.536 0h-2.64v-4.379c0-1.12-.378-1.888-1.322-1.888-.72 0-1.08.484-1.262.953-.056.158-.078.35-.078.55v4.317h-2.64s.035-7.073 0-7.818h2.64v1.084c-.043-.066-.134-.179-.258-.283-.053-.06-.129-.135-.196-.183-.146-.137-.297-.269-.483-.369-.092-.062-.207-.12-.328-.177-.076-.04-.146-.083-.227-.124-.062-.032-.136-.079-.208-.129-.315-.156-.607-.328-.904-.515-.572-.339-1.081-.709-1.584-1.085-.548-.448-1.052-.943-1.497-1.459-.019.023-.04.046-.062.071-2.123 2.394-.013 6.551 2.322 5.348 0 0 3.057-.595 4.195-3.13zm-9.269-5.248h-2.64v4.379h2.64v-4.379z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} My Blog . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
