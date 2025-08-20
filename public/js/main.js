// Bite On Makhana E-commerce Website JavaScript

// Sample product data
const products = [
    {
        id: 1,
        name: "Bite On Roasted Makhana - Raw (250g)",
        category: "raw-makhana",
        price: 315, // MRP ₹350 - ₹35 (raw makhana adjustment)
        originalPrice: 350,
        rating: 4.8,
        reviews: 156,
        image: "public/images/image3.jpeg",
        description: "Pure, unflavored Mithila Makhana roasted to perfection. Sourced directly from the GI-tagged Mithila region of Bihar, this premium makhana is perfect for traditional recipes and health-conscious consumers.",
        benefits: ["100% Natural", "GI-Tagged Mithila", "High Protein", "Low Calorie", "Gluten-Free", "Made in India"],
        features: [
            "Sourced from the ponds of Mithila",
            "Hand-harvested using centuries-old traditions",
            "No artificial preservatives or flavors",
            "Rich in calcium, potassium, magnesium",
            "Perfect for weight management and diabetics"
        ],
        nutritionalInfo: {
            "Protein": "9.7g per 100g",
            "Fiber": "4.3g per 100g",
            "Calories": "347 kcal per 100g",
            "Fat": "0.1g per 100g",
            "Carbohydrates": "76.9g per 100g"
        },
        inStock: true,
        badge: "Best Seller",
        netWeight: "250g",
        origin: "Mithila Region, Bihar, India",
        certification: "GI-Tagged Mithila Makhana"
    },
    {
        id: 2,
        name: "Bite On Roasted Makhana - Tomato Herb (250g)",
        category: "flavored-makhana",
        price: 350,
        originalPrice: 400,
        rating: 4.7,
        reviews: 89,
        image: "public/images/image4.jpeg",
        description: "Deliciously seasoned Mithila Makhana with authentic tomato herb flavor. Made with natural herbs and spices, this premium snack offers the perfect balance of taste and health benefits.",
        benefits: ["Authentic Spices", "GI-Tagged Mithila", "Ready to Eat", "No Preservatives", "High Protein", "Gluten-Free"],
        features: [
            "Made with olive oil for healthy roasting",
            "Sprinkled with natural herbs and spices",
            "Perfect blend of tomato and aromatic herbs",
            "Ideal for snacking and entertaining",
            "Suitable for all age groups"
        ],
        nutritionalInfo: {
            "Protein": "9.7g per 100g",
            "Fiber": "4.3g per 100g",
            "Calories": "365 kcal per 100g",
            "Fat": "2.1g per 100g",
            "Carbohydrates": "76.9g per 100g"
        },
        inStock: true,
        badge: "Popular",
        netWeight: "250g",
        origin: "Mithila Region, Bihar, India",
        certification: "GI-Tagged Mithila Makhana"
    },
    {
        id: 3,
        name: "Bite On Roasted Makhana - Peri Peri (250g)",
        category: "flavored-makhana",
        price: 350,
        originalPrice: 400,
        rating: 4.6,
        reviews: 67,
        image: "public/images/image5.jpeg",
        description: "Spicy and tangy Peri Peri flavored Makhana that packs a punch! Made with authentic African bird's eye chili and natural spices, perfect for those who love bold flavors.",
        benefits: ["Spicy Flavor", "GI-Tagged Mithila", "Ready to Eat", "No Preservatives", "High Protein", "Gluten-Free"],
        features: [
            "Authentic Peri Peri seasoning",
            "Perfect blend of heat and flavor",
            "Made with natural chili and spices",
            "Great for parties and gatherings",
            "Adds excitement to healthy snacking"
        ],
        nutritionalInfo: {
            "Protein": "9.7g per 100g",
            "Fiber": "4.3g per 100g",
            "Calories": "365 kcal per 100g",
            "Fat": "2.1g per 100g",
            "Carbohydrates": "76.9g per 100g"
        },
        inStock: true,
        badge: "Spicy",
        netWeight: "250g",
        origin: "Mithila Region, Bihar, India",
        certification: "GI-Tagged Mithila Makhana"
    },
    {
        id: 4,
        name: "Bite On Premium Makhana Mix (500g)",
        category: "premium",
        price: 650,
        originalPrice: 750,
        rating: 4.9,
        reviews: 124,
        image: "public/images/image6.jpeg",
        description: "Premium quality Makhana mix featuring multiple flavors in one pack. Perfect for gifting and premium consumption, this assortment showcases the variety and quality of Bite On products.",
        benefits: ["Premium Quality", "GI-Tagged Mithila", "Multiple Flavors", "Gift Ready", "High Protein", "Gluten-Free"],
        features: [
            "Assorted flavors in one premium pack",
            "Perfect for gifting and special occasions",
            "Showcases product variety and quality",
            "Elegant packaging design",
            "Great value for money"
        ],
        nutritionalInfo: {
            "Protein": "9.7g per 100g",
            "Fiber": "4.3g per 100g",
            "Calories": "365 kcal per 100g",
            "Fat": "2.1g per 100g",
            "Carbohydrates": "76.9g per 100g"
        },
        inStock: true,
        badge: "Premium",
        netWeight: "500g",
        origin: "Mithila Region, Bihar, India",
        certification: "GI-Tagged Mithila Makhana"
    },
    {
        id: 5,
        name: "Bite On Organic Makhana (250g)",
        category: "raw-makhana",
        price: 420,
        originalPrice: 480,
        rating: 4.7,
        reviews: 98,
        image: "public/images/image7.jpeg",
        description: "Certified organic Mithila Makhana grown without synthetic pesticides or fertilizers. This premium offering meets the highest standards of organic certification while maintaining the authentic taste of Mithila.",
        benefits: ["Organic Certified", "GI-Tagged Mithila", "Chemical Free", "Eco-Friendly", "High Protein", "Gluten-Free"],
        features: [
            "100% organic certified",
            "No synthetic pesticides or fertilizers",
            "Eco-friendly farming practices",
            "Maintains authentic Mithila taste",
            "Premium organic quality"
        ],
        nutritionalInfo: {
            "Protein": "9.7g per 100g",
            "Fiber": "4.3g per 100g",
            "Calories": "347 kcal per 100g",
            "Fat": "0.1g per 100g",
            "Carbohydrates": "76.9g per 100g"
        },
        inStock: true,
        badge: "Organic",
        netWeight: "250g",
        origin: "Mithila Region, Bihar, India",
        certification: "GI-Tagged Mithila Makhana"
    }
];

// Cart data
let cart = [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Bite On Makhana website loaded successfully!');
    
    // Initialize components
    initNavigation();
    initSearch();
    initCart();
    initMobileMenu();
    initProducts();
    initModals();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        console.log('Searching for:', query);
        // Filter products based on search query
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.benefits.some(benefit => benefit.toLowerCase().includes(query.toLowerCase())) ||
            product.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()))
        );
        
        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
            scrollToSection('products');
        } else {
            alert('No products found matching your search.');
        }
    }
}

// Products functionality
function initProducts() {
    displayProducts(products);
    initProductFilters();
}

function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="current-price">₹${product.price}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">₹${product.originalPrice}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 15px;">${product.description}</p>
            
            <div class="product-details">
                <div class="detail-row">
                    <span class="detail-label">Net Weight:</span>
                    <span class="detail-value">${product.netWeight}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Origin:</span>
                    <span class="detail-value">${product.origin}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Certification:</span>
                    <span class="detail-value">${product.certification}</span>
                </div>
            </div>
            
            <div style="margin-bottom: 15px;">
                ${product.benefits.map(benefit => `<span style="display: inline-block; background: #dcfce7; color: #16a34a; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; margin: 2px;">${benefit}</span>`).join('')}
            </div>
            
            <button class="btn btn-outline btn-sm" onclick="showProductDetails(${product.id})" style="margin-bottom: 10px; width: 100%;">
                View Details
            </button>
            
            <button class="add-to-cart-btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price})" ${!product.inStock ? 'disabled' : ''}>
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    
    return card;
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create and show product details modal
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; display: flex; align-items: center; justify-content: center;';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px; width: 90%; max-height: 90vh; overflow-y: auto;">
            <div class="modal-header">
                <h3>${product.name}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px;" onerror="this.src='https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(product.name)}'">
                    </div>
                    <div>
                        <h4>Product Features</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${product.features.map(feature => `<li style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;"><i class="fas fa-check" style="color: #22c55e; margin-right: 10px;"></i>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4>Nutritional Information (per 100g)</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                        ${Object.entries(product.nutritionalInfo).map(([key, value]) => `
                            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; text-align: center;">
                                <div style="font-weight: 600; color: #1e293b;">${key}</div>
                                <div style="color: #22c55e; font-size: 1.1rem;">${value}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4>Health Benefits</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${product.benefits.map(benefit => `<span style="background: #dcfce7; color: #16a34a; padding: 8px 12px; border-radius: 6px; font-size: 0.9rem;">${benefit}</span>`).join('')}
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <button class="btn btn-primary btn-large" onclick="addToCart(${product.id}, '${product.name}', ${product.price}); this.closest('.modal').remove();">
                        Add to Cart - ₹${product.price}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function initProductFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }
}

function filterProducts() {
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    
    let filteredProducts = [...products];
    
    // Category filter
    if (categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }
    
    // Sort filter
    switch (sortFilter.value) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
        default:
            // Keep original order
            break;
    }
    
    displayProducts(filteredProducts);
}

// Cart functionality
function initCart() {
    const cartBtn = document.getElementById('cart-btn');
    const cartCount = document.getElementById('cart-count');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            showCart();
        });
    }
    
    // Initialize cart count
    updateCartCount();
}

function addToCart(productId, productName, price) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartCount();
    showCart();
    
    // Show success message
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #22c55e;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = `${productName} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cartModal && cartItems && cartTotal) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; color: #64748b;">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="https://via.placeholder.com/60x60/22c55e/ffffff?text=M" alt="${item.name}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white;">×</button>
                </div>
            `).join('');
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total;
        
        cartModal.classList.add('show');
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            showCart(); // Refresh cart display
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    showCart(); // Refresh cart display
}

function clearCart() {
    cart = [];
    updateCartCount();
    showCart(); // Refresh cart display
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// Modal functionality
function initModals() {
    // Cart modal
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });
    }
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Checkout functionality will be implemented here!');
        });
    }
    
    // Close modal when clicking outside
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('show');
            }
        });
    }
    
    // Login modal
    const loginModal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeLogin = document.getElementById('close-login');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.classList.add('show');
        });
    }
    
    if (closeLogin) {
        closeLogin.addEventListener('click', () => {
            loginModal.classList.remove('show');
        });
    }
    
    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('show');
            }
        });
    }
    
    // Register modal
    const registerModal = document.getElementById('register-modal');
    const registerBtn = document.getElementById('register-btn');
    const closeRegister = document.getElementById('close-register');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.classList.add('show');
        });
    }
    
    if (closeRegister) {
        closeRegister.addEventListener('click', () => {
            registerModal.classList.remove('show');
        });
    }
    
    if (registerModal) {
        registerModal.addEventListener('click', (e) => {
            if (e.target === registerModal) {
                registerModal.classList.remove('show');
            }
        });
    }
    
    // Form submissions
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const contactForm = document.getElementById('contact-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality will be implemented here!');
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Registration functionality will be implemented here!');
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(price);
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.email) {
        errors.push('Email is required');
    }
    
    if (!formData.password) {
        errors.push('Password is required');
    }
    
    return errors;
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .product-details {
        background: #f8fafc;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 15px;
    }
    
    .detail-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .detail-row:last-child {
        border-bottom: none;
    }
    
    .detail-label {
        font-weight: 500;
        color: #64748b;
        font-size: 0.9rem;
    }
    
    .detail-value {
        font-weight: 600;
        color: #1e293b;
        font-size: 0.9rem;
    }
    
    .btn-sm {
        padding: 8px 16px;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style); 