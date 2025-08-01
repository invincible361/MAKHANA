// Makhana E-commerce Website JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Makhana website loaded successfully!');
    
    // Initialize components
    initNavigation();
    initSearch();
    initCart();
    initMobileMenu();
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
        // Add search functionality here
        alert('Search functionality will be implemented here!');
    }
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
    if (cartCount) {
        cartCount.textContent = '0';
    }
}

function showCart() {
    console.log('Cart clicked');
    // Add cart functionality here
    alert('Cart functionality will be implemented here!');
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

// Add to cart function
function addToCart(productId, productName, price) {
    console.log(`Adding ${productName} to cart`);
    // Add cart logic here
    alert(`${productName} added to cart!`);
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