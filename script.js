document.addEventListener('DOMContentLoaded', function() {
    // 模拟产品数据
    const products = [
        {
            name: '家常豆腐',
            price: '12.9',
            origin: '上海青浦',
            image: 'images/tofu.jpg',
            badge: '新品'
        },
        {
            name: '鱼香肉丝',
            price: '18.9',
            origin: '四川眉山',
            image: 'images/yuxiang.jpg',
            badge: '热销'
        },
        {
            name: '宫保鸡丁',
            price: '16.9',
            origin: '山东临沂',
            image: 'images/gongbao.jpg',
            badge: ''
        }
    ];

    const productGrid = document.querySelector('.product-grid');

    if (productGrid) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">¥${product.price}</div>
                    <div class="product-origin"><i class="fas fa-map-marker-alt"></i> ${product.origin}</div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // 懒加载动画
    const animatedElements = document.querySelectorAll('.animate-fade, .hero-content, .feature-item, .step-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add hover effects or other interactions
    const items = document.querySelectorAll('.item, .product-card');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});