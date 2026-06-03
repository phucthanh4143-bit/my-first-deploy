document.getElementById('clickBtn').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.classList.add('show');
    this.textContent = '✅ Đã nhấn!';
    setTimeout(() => {
        this.textContent = '👋 Nhấn vào đây!';
    }, 2000);
});

console.log('🚀 Dự án đã sẵn sàng để deploy lên Vercel!');