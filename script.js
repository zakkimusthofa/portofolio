const buttom = document.getElementById('dots')
const buttom1 = document.getElementById('dots1')
const buttom2 = document.getElementById('dots2')

const item = document.querySelector('.next')
const item1 = document.querySelector('.nextt')
const item2 = document.querySelector('.nexttt')

buttom.addEventListener('click', (e) => {
    item.classList.toggle('active');
    console.log('ok')
});

buttom1.addEventListener('click', (e) => {
    item1.classList.toggle('active'); // Menggunakan item1
    console.log('ok1')
})

buttom2.addEventListener('click', (e) => {
    item2.classList.toggle('active'); // Menggunakan item2
    console.log('ok2')
});
