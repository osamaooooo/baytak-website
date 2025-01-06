// التمرير السلس إلى قسم المنتجات عند الضغط على الزر
document.getElementById('scrollToProducts').addEventListener('click', function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// عرض رسالة عند الضغط على زر "شراء الآن"
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
  button.addEventListener('click', function () {
    alert('شكرًا لاختيارك منتجات بيتك! سيتم توجيهك لإتمام الطلب.');
  });
});
// التمرير السلس إلى قسم المنتجات
document.getElementById('scrollToProducts').addEventListener('click', function () {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// تأثير حركة للخلفية عند التمرير
window.addEventListener('scroll', function () {
  const heroSection = document.querySelector('.hero');
  const scrollPosition = window.scrollY;
  heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
