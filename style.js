const { useState, useEffect } = React;

        // Product Data
        const products = {
            watches: [
                {
                    id: 1,
                    name: "Classic Chronograph",
                    price: 249.99,
                    description: "Elegant chronograph watch with leather strap",
                    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.8,
                    reviews: 124
                },
                {
                    id: 2,
                    name: "Minimalist Silver",
                    price: 179.99,
                    description: "Sleek minimalist design with silver casing",
                    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.6,
                    reviews: 89
                },
                {
                    id: 3,
                    name: "Luxury Gold",
                    price: 399.99,
                    description: "Premium gold watch with sapphire crystal",
                    image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.9,
                    reviews: 210
                },
                {
                    id: 4,
                    name: "Sport Black",
                    price: 199.99,
                    description: "Durable sports watch with water resistance",
                    image: "https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.5,
                    reviews: 76
                }
            ],
            shoes: [
                {
                    id: 1,
                    name: "Oxford Leather",
                    price: 159.99,
                    description: "Classic oxford shoes in genuine leather",
                    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.7,
                    reviews: 98
                },
                {
                    id: 2,
                    name: "Derby Shine",
                    price: 139.99,
                    description: "Polished derby shoes with comfortable fit",
                    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.5,
                    reviews: 67
                },
                {
                    id: 3,
                    name: "Brogue Wingtip",
                    price: 179.99,
                    description: "Elegant brogue detailing with wingtip design",
                    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.8,
                    reviews: 112
                },
                {
                    id: 4,
                    name: "Monk Strap",
                    price: 199.99,
                    description: "Sophisticated monk strap shoes with buckle",
                    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.9,
                    reviews: 145
                }
            ],
            blazers: [
                {
                    id: 1,
                    name: "Slim Fit Navy",
                    price: 229.99,
                    description: "Modern slim fit blazer in navy blue",
                    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.6,
                    reviews: 78
                },
                {
                    id: 2,
                    name: "Classic Charcoal",
                    price: 249.99,
                    description: "Timeless charcoal blazer with notch lapel",
                    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.8,
                    reviews: 102
                },
                {
                    id: 3,
                    name: "Linen Beige",
                    price: 199.99,
                    description: "Lightweight linen blazer for summer",
                    image: "https://images.unsplash.com/photo-1591900256143-9d5a0e1b5f1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.5,
                    reviews: 65
                },
                {
                    id: 4,
                    name: "Double Breasted Black",
                    price: 279.99,
                    description: "Premium black blazer with double breasted design",
                    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    rating: 4.9,
                    reviews: 134
                }
            ]
        };

        // App Component
        function App() {
            const [currentPage, setCurrentPage] = useState('home');
            const [cart, setCart] = useState([]);
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [activeProduct, setActiveProduct] = useState(null);
            const [isCartOpen, setIsCartOpen] = useState(false);
            
            // Page transition effect
            const [isTransitioning, setIsTransitioning] = useState(false);
            
            const changePage = (page) => {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentPage(page);
                    setIsTransitioning(false);
                    window.scrollTo(0, 0);
                }, 300);
            };
            
            const addToCart = (product, category) => {
                const newItem = {
                    ...product,
                    category,
                    quantity: 1
                };
                setCart([...cart, newItem]);
            };
            
            const removeFromCart = (index) => {
                const newCart = [...cart];
                newCart.splice(index, 1);
                setCart(newCart);
            };
            
            const updateQuantity = (index, newQuantity) => {
                if (newQuantity < 1) return;
                const newCart = [...cart];
                newCart[index].quantity = newQuantity;
                setCart(newCart);
            };
            
            const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
            
            const toggleMenu = () => {
                setIsMenuOpen(!isMenuOpen);
            };
            
            const toggleCart = () => {
                setIsCartOpen(!isCartOpen);
            };
            
            const viewProduct = (product) => {
                setActiveProduct(product);
                changePage('product');
            };
            
            return (
                <div className="min-h-screen flex flex-col">
                    {/* Navigation */}
                    <nav className="bg-white shadow-sm py-4 px-4 md:px-8">
                        <div className="container mx-auto flex justify-between items-center">
                            <div className="flex items-center">
                                <button 
                                    className="md:hidden mr-4 text-gray-700"
                                    onClick={toggleMenu}
                                >
                                    <i className="fas fa-bars text-xl"></i>
                                </button>
                                <h1 
                                    className="text-2xl font-bold text-gray-800 cursor-pointer"
                                    onClick={() => changePage('home')}
                                >
                                    Gentleman's Attire
                                </h1>
                            </div>
                            
                            <div className="hidden md:flex space-x-8">
                                <button 
                                    className={`nav-link ${currentPage === 'home' ? 'font-semibold' : ''}`}
                                    onClick={() => changePage('home')}
                                >
                                    Home
                                </button>
                                <button 
                                    className={`nav-link ${currentPage === 'watches' ? 'font-semibold' : ''}`}
                                    onClick={() => changePage('watches')}
                                >
                                    Watches
                                </button>
                                <button 
                                    className={`nav-link ${currentPage === 'shoes' ? 'font-semibold' : ''}`}
                                    onClick={() => changePage('shoes')}
                                >
                                    Shoes
                                </button>
                                <button 
                                    className={`nav-link ${currentPage === 'blazers' ? 'font-semibold' : ''}`}
                                    onClick={() => changePage('blazers')}
                                >
                                    Blazers
                                </button>
                            </div>
                            
                            <div className="flex items-center space-x-6">
                                <button className="relative">
                                    <i className="far fa-heart text-xl text-gray-700"></i>
                                </button>
                                <button 
                                    className="relative"
                                    onClick={toggleCart}
                                >
                                    <i className="fas fa-shopping-bag text-xl text-gray-700"></i>
                                    {cartCount > 0 && (
                                        <span className="cart-count">{cartCount}</span>
                                    )}
                                </button>
                            </div>
                        </div>
                    </nav>
                    
                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white shadow-lg py-4 px-4">
                            <button 
                                className="block w-full py-2 text-left"
                                onClick={() => {
                                    changePage('home');
                                    toggleMenu();
                                }}
                            >
                                Home
                            </button>
                            <button 
                                className="block w-full py-2 text-left"
                                onClick={() => {
                                    changePage('watches');
                                    toggleMenu();
                                }}
                            >
                                Watches
                            </button>
                            <button 
                                className="block w-full py-2 text-left"
                                onClick={() => {
                                    changePage('shoes');
                                    toggleMenu();
                                }}
                            >
                                Shoes
                            </button>
                            <button 
                                className="block w-full py-2 text-left"
                                onClick={() => {
                                    changePage('blazers');
                                    toggleMenu();
                                }}
                            >
                                Blazers
                            </button>
                        </div>
                    )}
                    
                    {/* Shopping Cart Sidebar */}
                    {isCartOpen && (
                        <div className="fixed inset-0 z-50 overflow-hidden">
                            <div 
                                className="absolute inset-0 bg-black bg-opacity-50"
                                onClick={toggleCart}
                            ></div>
                            <div className="absolute inset-y-0 right-0 max-w-full flex">
                                <div className="relative w-screen max-w-md">
                                    <div className="h-full flex flex-col bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                                                <button 
                                                    className="ml-3 text-gray-700"
                                                    onClick={toggleCart}
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                            
                                            <div className="mt-8">
                                                {cart.length === 0 ? (
                                                    <div className="text-center py-12">
                                                        <i className="fas fa-shopping-bag text-4xl text-gray-300 mb-4"></i>
                                                        <p className="text-gray-500">Your cart is empty</p>
                                                    </div>
                                                ) : (
                                                    <div className="flow-root">
                                                        <ul className="-my-6 divide-y divide-gray-200">
                                                            {cart.map((item, index) => (
                                                                <li key={`${item.id}-${index}`} className="py-6 flex">
                                                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                                                        <img 
                                                                            src={item.image} 
                                                                            alt={item.name}
                                                                            className="w-full h-full object-cover object-center"
                                                                        />
                                                                    </div>
                                                                    
                                                                    <div className="ml-4 flex-1 flex flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <h3>{item.name}</h3>
                                                                                <p className="ml-4">${item.price.toFixed(2)}</p>
                                                                            </div>
                                                                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                                                        </div>
                                                                        
                                                                        <div className="flex-1 flex items-end justify-between text-sm">
                                                                            <div className="flex items-center border rounded">
                                                                                <button 
                                                                                    className="px-3 py-1 text-gray-600"
                                                                                    onClick={() => updateQuantity(index, item.quantity - 1)}
                                                                                >
                                                                                    -
                                                                                </button>
                                                                                <span className="px-3">{item.quantity}</span>
                                                                                <button 
                                                                                    className="px-3 py-1 text-gray-600"
                                                                                    onClick={() => updateQuantity(index, item.quantity + 1)}
                                                                                >
                                                                                    +
                                                                                </button>
                                                                            </div>
                                                                            
                                                                            <button 
                                                                                className="font-medium text-gray-500 hover:text-gray-700"
                                                                                onClick={() => removeFromCart(index)}
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {cart.length > 0 && (
                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>${cartTotal.toFixed(2)}</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-md hover:bg-gray-700 transition">
                                                        Checkout
                                                    </button>
                                                </div>
                                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                                    <p>
                                                        or{' '}
                                                        <button 
                                                            className="text-gray-600 font-medium hover:text-gray-500"
                                                            onClick={toggleCart}
                                                        >
                                                            Continue Shopping
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Main Content */}
                    <main className={`flex-1 ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                        {currentPage === 'home' && <HomePage changePage={changePage} viewProduct={viewProduct} />}
                        {currentPage === 'watches' && <ProductPage category="watches" products={products.watches} viewProduct={viewProduct} />}
                        {currentPage === 'shoes' && <ProductPage category="shoes" products={products.shoes} viewProduct={viewProduct} />}
                        {currentPage === 'blazers' && <ProductPage category="blazers" products={products.blazers} viewProduct={viewProduct} />}
                        {currentPage === 'product' && <ProductDetailPage product={activeProduct} addToCart={addToCart} changePage={changePage} />}
                    </main>
                    
                    {/* Footer */}
                    <footer className="bg-gray-50 py-12 px-4 md:px-8">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Gentleman's Attire</h3>
                                    <p className="text-gray-600">Premium men's fashion for the modern gentleman.</p>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Shop</h4>
                                    <ul className="space-y-2">
                                        <li><button onClick={() => changePage('watches')} className="text-gray-600 hover:text-gray-900">Watches</button></li>
                                        <li><button onClick={() => changePage('shoes')} className="text-gray-600 hover:text-gray-900">Shoes</button></li>
                                        <li><button onClick={() => changePage('blazers')} className="text-gray-600 hover:text-gray-900">Blazers</button></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping & Returns</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-gray-600">Subscribe to our newsletter</p>
                                        <div className="mt-2 flex">
                                            <input 
                                                type="email" 
                                                placeholder="Your email" 
                                                className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                            />
                                            <button className="bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700">
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                                <p className="text-gray-600">© 2023 Gentleman's Attire. All rights reserved.</p>
                                <div className="flex space-x-6 mt-4 md:mt-0">
                                    <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
                                    <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
        
        // Home Page Component
        function HomePage({ changePage, viewProduct }) {
            const featuredProducts = [
                ...products.watches.slice(0, 2),
                ...products.shoes.slice(0, 1),
                ...products.blazers.slice(0, 1)
            ];
            
            return (
                <div>
                    {/* Hero Section */}
                    <section className="hero-section py-20">
                        <div className="container mx-auto px-4 md:px-8 relative z-10">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
                                    Elevate Your Style
                                </h1>
                                <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-1">
                                    Discover premium men's fashion that combines timeless elegance with modern sophistication.
                                </p>
                                <button 
                                    className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition animate-fade-in delay-2"
                                    onClick={() => changePage('watches')}
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    {/* Categories Section */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4 md:px-8">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Collections</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div 
                                    className="category-card h-64 cursor-pointer"
                                    onClick={() => changePage('watches')}
                                >
                                    <img 
                                        src="https://images.unsplash.com/photo-1542496658-e33a6d0d50a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                        alt="Watches"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-10">
                                        <h3 className="text-2xl font-bold text-white">Watches</h3>
                                        <button className="mt-2 text-white hover:underline">
                                            Shop Collection
                                        </button>
                                    </div>
                                </div>
                                
                                <div 
                                    className="category-card h-64 cursor-pointer"
                                    onClick={() => changePage('shoes')}
                                >
                                    <img 
                                        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                        alt="Shoes"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-10">
                                        <h3 className="text-2xl font-bold text-white">Shoes</h3>
                                        <button className="mt-2 text-white hover:underline">
                                            Shop Collection
                                        </button>
                                    </div>
                                </div>
                                
                                <div 
                                    className="category-card h-64 cursor-pointer"
                                    onClick={() => changePage('blazers')}
                                >
                                    <img 
                                        src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                        alt="Blazers"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 p-6 z-10">
                                        <h3 className="text-2xl font-bold text-white">Blazers</h3>
                                        <button className="mt-2 text-white hover:underline">
                                            Shop Collection
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Featured Products */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4 md:px-8">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {featuredProducts.map((product, index) => (
                                    <div 
                                        key={product.id} 
                                        className="product-card animate-fade-in"
                                        style={{ animationDelay: `${0.1 * index}s` }}
                                    >
                                        <div className="h-64 overflow-hidden">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-cover cursor-pointer"
                                                onClick={() => viewProduct(product)}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                            <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <i 
                                                        key={i} 
                                                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    ></i>
                                                ))}
                                                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                                            </div>
                                            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center mt-12">
                                <button 
                                    className="border border-gray-800 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition"
                                    onClick={() => changePage('watches')}
                                >
                                    View All Products
                                </button>
                            </div>
                        </div>
                    </section>
                    
                    {/* Testimonials */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4 md:px-8">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                            <img 
                                                src="https://randomuser.me/api/portraits/men/32.jpg" 
                                                alt="Customer"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold">Michael Johnson</h4>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "The quality of the watches is exceptional. I've received many compliments since I started wearing mine."
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                            <img 
                                                src="https://randomuser.me/api/portraits/men/44.jpg" 
                                                alt="Customer"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold">David Wilson</h4>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "The Oxford shoes are the most comfortable dress shoes I've ever worn. Perfect for long days at the office."
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                                            <img 
                                                src="https://randomuser.me/api/portraits/men/67.jpg" 
                                                alt="Customer"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold">Robert Smith</h4>
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        "The navy blazer fits perfectly and the material is top-notch. It's become my go-to for important meetings."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        
        // Product Page Component
        function ProductPage({ category, products, viewProduct }) {
            const [sortBy, setSortBy] = useState('featured');
            
            const sortedProducts = [...products].sort((a, b) => {
                if (sortBy === 'price-low') return a.price - b.price;
                if (sortBy === 'price-high') return b.price - a.price;
                if (sortBy === 'rating') return b.rating - a.rating;
                return 0; // featured stays in original order
            });
            
            const categoryTitles = {
                watches: "Luxury Watches",
                shoes: "Formal Shoes",
                blazers: "Premium Blazers"
            };
            
            return (
                <div className="py-12">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">{categoryTitles[category]}</h2>
                            
                            <div className="flex items-center">
                                <span className="text-gray-600 mr-2">Sort by:</span>
                                <select 
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {sortedProducts.map((product, index) => (
                                <div 
                                    key={product.id} 
                                    className="product-card animate-fade-in"
                                    style={{ animationDelay: `${0.1 * index}s` }}
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={() => viewProduct(product)}
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                        <div className="flex items-center mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <i 
                                                    key={i} 
                                                    className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                ></i>
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
        
        // Product Detail Page Component
        function ProductDetailPage({ product, addToCart, changePage }) {
            const [selectedImage, setSelectedImage] = useState(product.image);
            const [quantity, setQuantity] = useState(1);
            const [activeTab, setActiveTab] = useState('description');
            
            const relatedProducts = [
                ...products.watches.filter(p => p.id !== product.id).slice(0, 2),
                ...products.shoes.filter(p => p.id !== product.id).slice(0, 1),
                ...products.blazers.filter(p => p.id !== product.id).slice(0, 1)
            ].slice(0, 4);
            
            const handleAddToCart = () => {
                // Determine the category based on which product array contains this product
                let category = 'watches';
                if (products.shoes.some(p => p.id === product.id)) category = 'shoes';
                if (products.blazers.some(p => p.id === product.id)) category = 'blazers';
                
                addToCart(product, category);
            };
            
            return (
                <div className="py-12">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="mb-4">
                            <button 
                                className="text-gray-600 hover:text-gray-900 flex items-center"
                                onClick={() => changePage(product.category === 'watches' ? 'watches' : product.category === 'shoes' ? 'shoes' : 'blazers')}
                            >
                                <i className="fas fa-arrow-left mr-2"></i>
                                Back to {product.category}
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <div className="h-96 overflow-hidden rounded-lg mb-4">
                                    <img 
                                        src={selectedImage} 
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 gap-2">
                                    <button 
                                        className="h-20 border rounded overflow-hidden"
                                        onClick={() => setSelectedImage(product.image)}
                                    >
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                    <button className="h-20 border rounded overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                            alt="Alternate view"
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                    <button className="h-20 border rounded overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1542496658-e33a6d0d50a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                            alt="Alternate view"
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                    <button className="h-20 border rounded overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" 
                                            alt="Alternate view"
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                </div>
                            </div>
                            
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <i 
                                            key={i} 
                                            className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        ></i>
                                    ))}
                                    <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
                                </div>
                                
                                <p className="text-2xl font-semibold text-gray-800 mb-6">${product.price.toFixed(2)}</p>
                                
                                <p className="text-gray-600 mb-8">{product.description}</p>
                                
                                <div className="flex items-center mb-8">
                                    <div className="flex items-center border rounded mr-4">
                                        <button 
                                            className="px-3 py-2 text-gray-600"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            -
                                        </button>
                                        <span className="px-4">{quantity}</span>
                                        <button 
                                            className="px-3 py-2 text-gray-600"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <button 
                                        className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition flex-1"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                
                                <div className="border-b border-gray-200 mb-6">
                                    <nav className="-mb-px flex space-x-8">
                                        <button
                                            className={`pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                            onClick={() => setActiveTab('description')}
                                        >
                                            Description
                                        </button>
                                        <button
                                            className={`pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'details' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                            onClick={() => setActiveTab('details')}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className={`pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reviews' ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                            onClick={() => setActiveTab('reviews')}
                                        >
                                            Reviews
                                        </button>
                                    </nav>
                                </div>
                                
                                <div>
                                    {activeTab === 'description' && (
                                        <div>
                                            <p className="text-gray-600 mb-4">
                                                This premium {product.name.toLowerCase()} is crafted with the finest materials to ensure both style and durability. 
                                                Perfect for formal occasions or adding a touch of elegance to your everyday look.
                                            </p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li>High-quality materials</li>
                                                <li>Handcrafted with attention to detail</li>
                                                <li>Comfortable for all-day wear</li>
                                                <li>Timeless design that never goes out of style</li>
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {activeTab === 'details' && (
                                        <div>
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Material</h4>
                                                    <p className="text-gray-600">Premium {product.category === 'watches' ? 'stainless steel' : product.category === 'shoes' ? 'genuine leather' : 'wool blend'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Color</h4>
                                                    <p className="text-gray-600">{product.name.includes('Black') ? 'Black' : product.name.includes('Navy') ? 'Navy' : product.name.includes('Gold') ? 'Gold' : product.name.includes('Silver') ? 'Silver' : 'Various'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Weight</h4>
                                                    <p className="text-gray-600">{product.category === 'watches' ? '120g' : product.category === 'shoes' ? '800g per pair' : '1.2kg'}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800">Origin</h4>
                                                    <p className="text-gray-600">Italy</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {activeTab === 'reviews' && (
                                        <div>
                                            <div className="mb-6">
                                                <div className="flex items-center mb-2">
                                                    <div className="flex mr-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <i key={i} className="fas fa-star text-yellow-400"></i>
                                                        ))}
                                                    </div>
                                                    <span className="font-semibold">Excellent product</span>
                                                </div>
                                                <p className="text-gray-600 mb-2">
                                                    "I've been using this {product.name.toLowerCase()} for a month now and I'm extremely satisfied with the quality and comfort. Highly recommend!"
                                                </p>
                                                <p className="text-sm text-gray-500">- James Wilson, Verified Buyer</p>
                                            </div>
                                            
                                            <div className="mb-6">
                                                <div className="flex items-center mb-2">
                                                    <div className="flex mr-2">
                                                        {[...Array(4)].map((_, i) => (
                                                            <i key={i} className="fas fa-star text-yellow-400"></i>
                                                        ))}
                                                        <i className="fas fa-star text-gray-300"></i>
                                                    </div>
                                                    <span className="font-semibold">Great value</span>
                                                </div>
                                                <p className="text-gray-600 mb-2">
                                                    "The {product.name.toLowerCase()} looks even better in person than in the photos. The only reason I'm not giving 5 stars is that it took a week longer to arrive than expected."
                                                </p>
                                                <p className="text-sm text-gray-500">- Robert Smith, Verified Buyer</p>
                                            </div>
                                            
                                            <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-50">
                                                Write a Review
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* Related Products */}
                        <div className="mt-20">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">You May Also Like</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {relatedProducts.map((product, index) => (
                                    <div 
                                        key={product.id} 
                                        className="product-card"
                                        onClick={() => {
                                            changePage('product');
                                            // The viewProduct function will be called by the parent component
                                        }}
                                    >
                                        <div className="h-64 overflow-hidden">
                                            <img 
                                                src={product.image} 
                                                alt={product.name}
                                                className="w-full h-full object-cover cursor-pointer"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                                            <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <i 
                                                        key={i} 
                                                        className={`fas fa-star ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    ></i>
                                                ))}
                                                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                                            </div>
                                            <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
        // Render the App
        ReactDOM.render(<App />, document.getElementById('root'));