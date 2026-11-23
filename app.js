/* ==========================================================================
   URBAN EDGE STREETWEAR - E-COMMERCE APPLICATION ENGINE
   All Drop-Shoulders: 600 BDT | All Baggy Pants: 750 BDT
   Inside Dhaka: 80 BDT | Outside Dhaka: 120 BDT
   bKash Payment & WhatsApp Integration
   ========================================================================== */

// 1. PRODUCT DATABASE
const PRODUCTS = [
    // --- DROP SHOULDER TEES (600 BDT) ---
    {
        id: 'ds-1',
        title: 'MIDNIGHT ACID DROP-SHOULDER TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '260 GSM Heavyweight French Terry Cotton',
        colors: ['Acid Wash Black', 'Pewter Grey', 'Pitch Black'],
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
        description: 'Signature oversized silhouette crafted from 260 GSM vintage acid-washed cotton. Features dropped shoulder seams, thick rib collar, and breathable comfort for urban weather.',
        inStock: true
    },
    {
        id: 'ds-2',
        title: 'RAW VINTAGE OVERSIZED TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '240 GSM Combed Organic Cotton',
        colors: ['Washed Charcoal', 'Faded Slate', 'Cement Grey'],
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
        description: 'Relaxed boxy fit drop-shoulder shirt with enzyme wash finish. Ultra-soft touch with non-deforming heavy collar ribbing.',
        inStock: true
    },
    {
        id: 'ds-3',
        title: 'CYBER OLIVE HEAVY JERSEY TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '250 GSM Brushed Heavy Cotton',
        colors: ['Cyber Olive', 'Forest Dark', 'Tactical Green'],
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
        description: 'Earthy tactical olive tone in a modern streetwear drop shoulder cut. Perfect for layering or wearing solo.',
        inStock: true
    },
    {
        id: 'ds-4',
        title: 'MINIMALIST BEIGE BOXY TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '260 GSM Compact Luxury Cotton',
        colors: ['Desert Tan', 'Warm Oatmeal', 'Raw Sand'],
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80',
        description: 'Clean aesthetic drop-shoulder top designed with subtle side seam splits and dropped armholes.',
        inStock: true
    },
    {
        id: 'ds-5',
        title: 'COBALT DRIFT STREET TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '240 GSM Ring-Spun Cotton',
        colors: ['Royal Cobalt', 'Electric Blue', 'Midnight Navy'],
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
        description: 'Vibrant cobalt blue drop-shoulder tee engineered for bold streetwear looks. Pre-shrunk fabric.',
        inStock: true
    },
    {
        id: 'ds-6',
        title: 'GHOST WHITE OVERSIZED TEE',
        category: 'drop-shoulder',
        price: 600,
        fabric: '260 GSM Heavyweight Organic Cotton',
        colors: ['Pure White', 'Off-White Milk'],
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800&q=80',
        description: 'Crisp opaque white drop-shoulder tee. Double needle stitching throughout for maximum durability.',
        inStock: true
    },

    // --- BAGGY PANTS & CARGOS (750 BDT) ---
    {
        id: 'bp-1',
        title: 'OBSIDIAN MATRIX TACTICAL CARGO PANTS',
        category: 'baggy-pants',
        price: 750,
        fabric: 'Heavyweight Ripstop Cotton with 6 Utility Pockets',
        colors: ['Jet Black', 'Stealth Charcoal'],
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
        description: 'Ultra-wide leg baggy tactical cargo pants. Equipped with 6 spacious utility pockets, adjustable ankle drawstrings, and reinforced knees.',
        inStock: true
    },
    {
        id: 'bp-2',
        title: '90s RELIC DEEP WASH BAGGY DENIM JEANS',
        category: 'baggy-pants',
        price: 750,
        fabric: '14oz Rigid Cotton Denim (Non-Stretch)',
        colors: ['Vintage Blue Denim', 'Washed Black Denim'],
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
        description: 'Authentic 90s skater cut baggy denim. High-rise waist with wide leg opening that drapes effortlessly over sneakers.',
        inStock: true
    },
    {
        id: 'bp-3',
        title: 'PARACHUTE V2 OVERSIZED CARGO PANTS',
        category: 'baggy-pants',
        price: 750,
        fabric: 'Water-Resistant Parachute Nylon & Cotton Blend',
        colors: ['Olive Green', 'Tactical Black', 'Desert Tan'],
        image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80',
        description: 'Lightweight, ultra-baggy parachute pants featuring knee pleats, adjustable waist toggles, and breathable street tech feel.',
        inStock: true
    },
    {
        id: 'bp-4',
        title: 'RETRO EARTH PLEATED BAGGY TROUSERS',
        category: 'baggy-pants',
        price: 750,
        fabric: 'Premium Wool-Blend Cotton Twill',
        colors: ['Vintage Mocha', 'Khaki Tan', 'Dark Charcoal'],
        image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80',
        description: 'Smart casual meets streetwear baggy trousers. Features double front pleats and a relaxed drape silhouette.',
        inStock: true
    },
    {
        id: 'bp-5',
        title: 'CARPENTER CRAFT WIDE-LEG JEANS',
        category: 'baggy-pants',
        price: 750,
        fabric: '13.5oz Heavy Denim with Hammer Loop',
        colors: ['Raw Blue Denim', 'Stone Washed Grey'],
        image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=80',
        description: 'Workwear-inspired wide leg baggy denim with authentic carpenter hammer loop and side tool pockets.',
        inStock: true
    },
    {
        id: 'bp-6',
        title: 'STREET UTILITY FLEECE BAGGY JOGGERS',
        category: 'baggy-pants',
        price: 750,
        fabric: 'Heavy Fleece Terry Cotton with Drawstrings',
        colors: ['Dark Heather Grey', 'Jet Black'],
        image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
        description: 'Ultimate cozy streetwear baggy joggers with deep pockets and cinchable elastic ankle cuffs.',
        inStock: true
    }
];

// 2. STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('urban_cart')) || [];
let deliveryCharge = 80; // Default Inside Dhaka 80 BDT
let currentProduct = null;
let currentModalQty = 1;
let currentModalSize = 'M';
let currentModalColor = '';

// 3. DOM ELEMENTS
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderProducts('all');
    setupEventListeners();
    updateCartUI();
}

// 4. PRODUCT RENDERING & FILTERS
function renderProducts(categoryFilter = 'all', searchQuery = '') {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    let filtered = PRODUCTS;

    // Filter by Category
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Filter by Search
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.fabric.toLowerCase().includes(query) ||
            p.colors.some(c => c.toLowerCase().includes(query))
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <i class="fa-solid fa-shirt" style="font-size: 48px; color: var(--text-muted); margin-bottom: 15px;"></i>
                <h3>No clothing items matched your filter</h3>
                <p>Try searching for "Drop-shoulder", "Baggy", "Black", or clear your filter.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <span class="product-type-badge">${product.category === 'drop-shoulder' ? 'DROP-SHOULDER TEE' : 'BAGGY PANTS'}</span>
                <span class="price-badge-floating">${product.price} BDT</span>
            </div>
            <div class="product-card-body">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-fabric"><i class="fa-solid fa-layer-group"></i> ${product.fabric}</p>
                <div class="product-bottom-row">
                    <div class="product-price-box">
                        <span class="price-val">${product.price} BDT</span>
                        <span class="price-unit">Fixed Price (Tax incl.)</span>
                    </div>
                    <div class="card-action-btns">
                        <button class="btn btn-outline btn-icon quick-view-btn" data-id="${product.id}" title="Quick View">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="btn btn-primary add-to-cart-direct" data-id="${product.id}">
                            <i class="fa-solid fa-cart-plus"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Re-attach card button listeners
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            openProductModal(id);
        });
    });

    document.querySelectorAll('.add-to-cart-direct').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const item = PRODUCTS.find(p => p.id === id);
            if (item) {
                addToCart(item, 1, 'L', item.colors[0]);
                showToast(`Added "${item.title}" to Bag!`);
            }
        });
    });
}

// 5. EVENT LISTENERS
function setupEventListeners() {
    // Navigation Category Tabs
    const catBtns = document.querySelectorAll('#categoryTabs .cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            catBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const category = e.currentTarget.getAttribute('data-category');
            renderProducts(category, document.getElementById('searchInput').value);
        });
    });

    // Category Banner triggers
    document.querySelectorAll('.filter-trigger-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.getAttribute('data-category');
            const targetBtn = document.querySelector(`#categoryTabs .cat-btn[data-category="${category}"]`);
            if (targetBtn) targetBtn.click();
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeCat = document.querySelector('#categoryTabs .cat-btn.active')?.getAttribute('data-category') || 'all';
            renderProducts(activeCat, e.target.value);
        });
    }

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Cart Drawer Toggle
    const cartTrigger = document.getElementById('cartTrigger');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');

    if (cartTrigger) cartTrigger.addEventListener('click', openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

    // Cart Delivery Selector
    const cartDeliverySelect = document.getElementById('cartDeliverySelect');
    if (cartDeliverySelect) {
        cartDeliverySelect.addEventListener('change', (e) => {
            deliveryCharge = parseInt(e.target.value);
            // Sync with checkout zone select
            const custZone = document.getElementById('custZone');
            if (custZone) custZone.value = deliveryCharge;
            updateCartUI();
        });
    }

    // Product Modal Controls
    const closeProductModalBtn = document.getElementById('closeProductModalBtn');
    const productModalOverlay = document.getElementById('productModalOverlay');
    if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductModal);
    if (productModalOverlay) {
        productModalOverlay.addEventListener('click', (e) => {
            if (e.target === productModalOverlay) closeProductModal();
        });
    }

    // Modal Qty Pickers
    document.getElementById('qtyMinus')?.addEventListener('click', () => {
        if (currentModalQty > 1) {
            currentModalQty--;
            document.getElementById('qtyVal').innerText = currentModalQty;
        }
    });

    document.getElementById('qtyPlus')?.addEventListener('click', () => {
        currentModalQty++;
        document.getElementById('qtyVal').innerText = currentModalQty;
    });

    // Modal Add To Cart
    document.getElementById('modalAddToCartBtn')?.addEventListener('click', () => {
        if (currentProduct) {
            addToCart(currentProduct, currentModalQty, currentModalSize, currentModalColor);
            closeProductModal();
            openCartDrawer();
            showToast(`Added ${currentModalQty}x ${currentProduct.title} to Bag!`);
        }
    });

    // Checkout Trigger
    document.getElementById('checkoutBtn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your bag is empty! Please add items first.');
            return;
        }
        closeCartDrawer();
        openCheckoutModal();
    });

    // Checkout Modal Controls
    const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
    const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
    if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
    if (checkoutModalOverlay) {
        checkoutModalOverlay.addEventListener('click', (e) => {
            if (e.target === checkoutModalOverlay) closeCheckoutModal();
        });
    }

    // Checkout Delivery Zone Sync
    const custZone = document.getElementById('custZone');
    if (custZone) {
        custZone.addEventListener('change', (e) => {
            deliveryCharge = parseInt(e.target.value);
            const cartDeliverySelect = document.getElementById('cartDeliverySelect');
            if (cartDeliverySelect) cartDeliverySelect.value = deliveryCharge;
            updateCheckoutSummary();
        });
    }

    // Payment Radio Toggle (bKash vs COD)
    const payRadios = document.querySelectorAll('input[name="paymentMethod"]');
    payRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.payment-method-card').forEach(card => card.classList.remove('active'));
            e.target.closest('.payment-method-card').classList.add('active');

            const bkashBox = document.getElementById('bkashInstructions');
            const codBox = document.getElementById('codInstructions');
            const senderInput = document.getElementById('bkashSender');
            const trxIdInput = document.getElementById('bkashTrxId');

            if (e.target.value === 'bKash') {
                bkashBox.classList.remove('hidden');
                codBox.classList.add('hidden');
                senderInput.setAttribute('required', 'true');
                trxIdInput.setAttribute('required', 'true');
            } else {
                bkashBox.classList.add('hidden');
                codBox.classList.remove('hidden');
                senderInput.removeAttribute('required');
                trxIdInput.removeAttribute('required');
            }
        });
    });

    // Copy bKash Number Button
    document.getElementById('copyBkashBtn')?.addEventListener('click', () => {
        navigator.clipboard.writeText('01712-345678').then(() => {
            showToast('bKash Number 01712-345678 copied to clipboard!');
        });
    });

    // Checkout Form Submit
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCheckoutSubmit();
        });
    }

    // Receipt Modal Close & Print
    document.getElementById('closeReceiptBtn')?.addEventListener('click', closeReceiptModal);
    document.getElementById('printReceiptBtn')?.addEventListener('click', () => {
        window.print();
    });

    // Track Order History Modal
    document.getElementById('trackOrderBtn')?.addEventListener('click', openTrackerModal);
    document.getElementById('closeTrackerBtn')?.addEventListener('click', closeTrackerModal);

    // Contact Form Submit
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const phone = document.getElementById('contactPhone').value;
            const subject = document.getElementById('contactSubject').value;
            const msg = document.getElementById('contactMessage').value;

            // Direct WhatsApp redirect with pre-filled content
            const text = `Hi URBAN EDGE! My name is ${name} (${phone}). Subject: ${subject}. Message: ${msg}`;
            const url = `https://wa.me/8801712345678?text=${encodeURIComponent(text)}`;

            showToast('Thank you! Redirecting to WhatsApp support...');
            setTimeout(() => {
                window.open(url, '_blank');
                contactForm.reset();
            }, 1000);
        });
    }
}

// 6. PRODUCT QUICK VIEW MODAL
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentProduct = product;
    currentModalQty = 1;
    currentModalSize = 'M';
    currentModalColor = product.colors[0];

    document.getElementById('modalImg').src = product.image;
    document.getElementById('modalTitle').innerText = product.title;
    document.getElementById('modalPrice').innerText = `${product.price} BDT`;
    document.getElementById('modalDesc').innerText = product.description;
    document.getElementById('modalCategoryBadge').innerText = product.category === 'drop-shoulder' ? 'Drop-Shoulder Tee (600 BDT)' : 'Baggy Pants (750 BDT)';
    document.getElementById('qtyVal').innerText = currentModalQty;

    // Render color chips
    const colorContainer = document.getElementById('modalColors');
    colorContainer.innerHTML = product.colors.map((c, idx) => `
        <button class="color-chip ${idx === 0 ? 'active' : ''}" data-color="${c}">${c}</button>
    `).join('');

    colorContainer.querySelectorAll('.color-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
            colorContainer.querySelectorAll('.color-chip').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentModalColor = e.target.getAttribute('data-color');
        });
    });

    // Render sizes
    const sizeBtns = document.querySelectorAll('#modalSizes .size-btn');
    sizeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-size') === 'M') btn.classList.add('active');
        btn.onclick = (e) => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentModalSize = e.currentTarget.getAttribute('data-size');
        };
    });

    document.getElementById('productModalOverlay').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModalOverlay').classList.remove('active');
}

// 7. CART ENGINE
function addToCart(product, qty, size, color) {
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size && item.color === color);

    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            category: product.category,
            price: product.price,
            image: product.image,
            qty: qty,
            size: size,
            color: color
        });
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function changeCartQty(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('urban_cart', JSON.stringify(cart));
}

function getSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const headerCount = document.getElementById('cartCountHeader');
    const container = document.getElementById('cartItemsContainer');
    const subtotalEl = document.getElementById('cartSubtotal');
    const deliveryEl = document.getElementById('cartDeliveryCharge');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) badge.innerText = totalCount;
    if (headerCount) headerCount.innerText = totalCount;

    const subtotal = getSubtotal();
    const grandTotal = subtotal > 0 ? (subtotal + deliveryCharge) : 0;

    if (subtotalEl) subtotalEl.innerText = `${subtotal} BDT`;
    if (deliveryEl) deliveryEl.innerText = `${deliveryCharge} BDT`;
    if (grandTotalEl) grandTotalEl.innerText = `${grandTotal} BDT`;

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px 20px; color: var(--text-secondary);">
                <i class="fa-solid fa-bag-shopping" style="font-size: 48px; color: var(--text-muted); margin-bottom: 15px;"></i>
                <p>Your shopping bag is currently empty.</p>
                <button class="btn btn-primary" style="margin-top: 15px;" onclick="closeCartDrawer()">Explore Catalog</button>
            </div>
        `;
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-meta">Size: <strong>${item.size}</strong> | Color: <strong>${item.color}</strong></div>
                <div class="cart-item-price">${item.price} BDT &times; ${item.qty} = ${item.price * item.qty} BDT</div>
                <div class="cart-item-controls">
                    <div class="cart-qty-picker">
                        <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)">-</button>
                        <span class="cart-qty-val">${item.qty}</span>
                        <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Remove item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function openCartDrawer() {
    document.getElementById('cartOverlay')?.classList.add('active');
    document.getElementById('cartDrawer')?.classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cartOverlay')?.classList.remove('active');
    document.getElementById('cartDrawer')?.classList.remove('active');
}

// 8. CHECKOUT ENGINE & BKASH
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModalOverlay');
    if (!modal) return;

    updateCheckoutSummary();
    modal.classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModalOverlay')?.classList.remove('active');
}

function updateCheckoutSummary() {
    const list = document.getElementById('checkoutItemsList');
    const coSub = document.getElementById('coSubtotal');
    const coDel = document.getElementById('coDelivery');
    const coGrand = document.getElementById('coGrandTotal');
    const payables = document.querySelectorAll('.checkout-payable-amount');

    const subtotal = getSubtotal();
    const grandTotal = subtotal + deliveryCharge;

    if (list) {
        list.innerHTML = cart.map(item => `
            <div class="co-item">
                <div>
                    <span class="co-item-title">${item.title}</span>
                    <span class="co-item-meta"> (${item.size}, ${item.color}) &times; ${item.qty}</span>
                </div>
                <span class="co-item-price">${item.price * item.qty} BDT</span>
            </div>
        `).join('');
    }

    if (coSub) coSub.innerText = `${subtotal} BDT`;
    if (coDel) coDel.innerText = `${deliveryCharge} BDT`;
    if (coGrand) coGrand.innerText = `${grandTotal} BDT`;

    payables.forEach(el => {
        el.innerText = `${grandTotal} BDT`;
    });
}

function handleCheckoutSubmit() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const city = document.getElementById('custCity').value.trim();
    const payMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    let bkashSender = '';
    let bkashTrxId = '';

    if (payMethod === 'bKash') {
        bkashSender = document.getElementById('bkashSender').value.trim();
        bkashTrxId = document.getElementById('bkashTrxId').value.trim();

        if (!bkashSender || !bkashTrxId) {
            showToast('Please provide your bKash Sender Number and TrxID.');
            return;
        }
    }

    const orderId = '#UE-' + Math.floor(10000 + Math.random() * 90000);
    const subtotal = getSubtotal();
    const grandTotal = subtotal + deliveryCharge;
    const orderDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const orderData = {
        id: orderId,
        date: orderDate,
        customer: { name, phone, address, city },
        items: [...cart],
        subtotal,
        deliveryCharge,
        grandTotal,
        paymentMethod: payMethod,
        bkashSender,
        bkashTrxId,
        status: 'Order Placed & Processing'
    };

    // Save to local storage order history
    let orders = JSON.parse(localStorage.getItem('urban_orders')) || [];
    orders.unshift(orderData);
    localStorage.setItem('urban_orders', JSON.stringify(orders));

    // Display Receipt
    displayReceipt(orderData);

    // Clear Cart
    cart = [];
    saveCart();
    updateCartUI();

    closeCheckoutModal();
    showToast(`Order ${orderId} placed successfully!`);
}

// 9. RECEIPT MODAL & WHATSAPP CONFIRMATION
function displayReceipt(order) {
    document.getElementById('receiptOrderId').innerText = order.id;
    document.getElementById('receiptDate').innerText = order.date;
    document.getElementById('receiptPayment').innerText = order.paymentMethod === 'bKash' ? 'bKash Online Payment' : 'Cash on Delivery (COD)';

    const trxRow = document.getElementById('receiptTrxRow');
    if (order.paymentMethod === 'bKash') {
        trxRow.style.display = 'flex';
        document.getElementById('receiptTrxId').innerText = `${order.bkashTrxId} (From ${order.bkashSender})`;
    } else {
        trxRow.style.display = 'none';
    }

    document.getElementById('receiptCustDetails').innerHTML = `
        <strong>${order.customer.name}</strong> (${order.customer.phone})<br>
        ${order.customer.address}, ${order.customer.city}<br>
        Delivery Zone: ${order.deliveryCharge === 80 ? 'Inside Dhaka (80 BDT)' : 'Outside Dhaka (120 BDT)'}
    `;

    document.getElementById('receiptItemsList').innerHTML = order.items.map(item => `
        <li>
            <span>${item.qty}x ${item.title} [${item.size} / ${item.color}]</span>
            <strong>${item.price * item.qty} BDT</strong>
        </li>
    `).join('');

    document.getElementById('receiptSubtotal').innerText = `${order.subtotal} BDT`;
    document.getElementById('receiptDelivery').innerText = `${order.deliveryCharge} BDT`;
    document.getElementById('receiptTotal').innerText = `${order.grandTotal} BDT`;

    // Prefill WhatsApp Confirmation Button
    const waText = `Hi URBAN EDGE! I just placed order ${order.id}.\nCustomer: ${order.customer.name} (${order.customer.phone})\nTotal: ${order.grandTotal} BDT (${order.paymentMethod})\nAddress: ${order.customer.address}, ${order.customer.city}`;
    const waUrl = `https://wa.me/8801712345678?text=${encodeURIComponent(waText)}`;
    document.getElementById('waConfirmBtn').href = waUrl;

    document.getElementById('receiptModalOverlay').classList.add('active');
}

function closeReceiptModal() {
    document.getElementById('receiptModalOverlay').classList.remove('active');
}

// 10. ORDER TRACKER MODAL
function openTrackerModal() {
    const list = document.getElementById('trackerOrdersList');
    const orders = JSON.parse(localStorage.getItem('urban_orders')) || [];

    if (!list) return;

    if (orders.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 30px;">No recent orders placed on this browser.</p>`;
    } else {
        list.innerHTML = orders.map(ord => `
            <div class="tracked-order-card">
                <div class="tracked-order-header">
                    <span class="tracked-order-id">${ord.id}</span>
                    <span class="tracked-order-status">${ord.status}</span>
                </div>
                <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">
                    Date: <strong>${ord.date}</strong> | Payment: <strong>${ord.paymentMethod}</strong>
                </div>
                <div style="font-size: 13px;">
                    Items (${ord.items.length}): ${ord.items.map(i => i.title + ` [${i.size}]`).join(', ')}
                </div>
                <div style="font-family: var(--font-heading); font-weight: 800; color: var(--accent-lime); font-size: 16px; margin-top: 10px;">
                    Total: ${ord.grandTotal} BDT
                </div>
            </div>
        `).join('');
    }

    document.getElementById('trackerModalOverlay').classList.add('active');
}

function closeTrackerModal() {
    document.getElementById('trackerModalOverlay').classList.remove('active');
}

// 11. TOAST NOTIFICATIONS
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
