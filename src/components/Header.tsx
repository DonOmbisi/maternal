import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, User, Menu, X, Globe, ChevronDown, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { useAdmin } from '../context/AdminContext';
import { categories, subcategories } from '../data/products';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('EUR');
  const { state } = useCart();
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleAccountClick = () => {
    if (user) {
      navigate('/account');
    } else {
      navigate('/login');
    }
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/shop/${category.toLowerCase().replace(/\s+/g, '-')}`);
    setHoveredCategory(null);
  };

  const handleSubcategoryClick = (category: string, subcategory: string) => {
    navigate(`/shop/${category.toLowerCase().replace(/\s+/g, '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`);
    setHoveredCategory(null);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-beige-50 border-b border-beige-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="text-gray-600">
              Free shipping on orders over €150
            </div>
            <div className="flex items-center space-x-4">
              {isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors"
                >
                  <Shield className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language} | {currency}</span>
                </button>
                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg">
                    <button
                      onClick={() => { setLanguage('EN'); setCurrency('EUR'); setIsLanguageOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      EN | EUR
                    </button>
                    <button
                      onClick={() => { setLanguage('IT'); setCurrency('EUR'); setIsLanguageOpen(false); }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    >
                      IT | EUR
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif text-black">Pietro Brunelli</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 relative">
            {categories.map((category) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors py-2 text-sm font-medium uppercase tracking-wide"
                >
                  <span>{category}</span>
                  {subcategories[category as keyof typeof subcategories] && (
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {hoveredCategory === category && subcategories[category as keyof typeof subcategories] && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <div className="py-4 px-2">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
                        {category}
                      </div>
                      <div className="grid grid-cols-2 gap-1 max-h-96 overflow-y-auto">
                        {subcategories[category as keyof typeof subcategories].map((subcategory) => (
                          <button
                            key={subcategory}
                            onClick={() => handleSubcategoryClick(category, subcategory)}
                            className="text-left px-4 py-2 text-sm text-gray-700 hover:bg-beige-50 hover:text-black transition-colors rounded-md"
                          >
                            {subcategory}
                          </button>
                        ))}
                      </div>
                      <div className="border-t border-gray-100 mt-3 pt-3 px-4">
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
                        >
                          View All {category} →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-black transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Account */}
            <button
              onClick={handleAccountClick}
              className="text-gray-700 hover:text-black transition-colors"
            >
              <User className="h-5 w-5" />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="text-gray-700 hover:text-black transition-colors relative">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="text-gray-700 hover:text-black transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-gray-100 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-4 max-h-96 overflow-y-auto">
            {categories.map((category) => (
              <div key={category}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="block w-full text-left text-gray-700 hover:text-black transition-colors font-medium py-2 uppercase tracking-wide"
                >
                  {category}
                </button>
                {subcategories[category as keyof typeof subcategories] && (
                  <div className="ml-4 space-y-1">
                    {subcategories[category as keyof typeof subcategories].slice(0, 5).map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => handleSubcategoryClick(category, subcategory)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors py-1"
                      >
                        {subcategory}
                      </button>
                    ))}
                    {subcategories[category as keyof typeof subcategories].length > 5 && (
                      <button
                        onClick={() => handleCategoryClick(category)}
                        className="block w-full text-left text-sm text-gray-500 hover:text-black transition-colors py-1"
                      >
                        View all...
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;