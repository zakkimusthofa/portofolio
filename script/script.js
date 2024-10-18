const buttom = document.getElementById('dots')
const buttom1 = document.getElementById('dots1')
const buttom2 = document.getElementById('dots2')

const item = document.querySelector('.next')
const item1 = document.querySelector('.nextt')
const item2 = document.querySelector('.nexttt')

buttom.addEventListener('click', (e) => {
    item.classList.toggle('active');
    // buttom.classList.toggle('active');
    // buttom.textContent("minimize")
    if (item.classList.contains("active")) {
        buttom.textContent = "minimize"
    } else {
        buttom.textContent = "read More..."
    }
    console.log('ok')
});

buttom1.addEventListener('click', (e) => {
    item1.classList.toggle('active'); // Menggunakan item1
    // buttom1.classList.toggle('active'); // Menggunakan item1
    // buttom1.textContent("minimize")
    if (item1.classList.contains("active")) {
        buttom1.textContent = "minimize"
    } else {
        buttom1.textContent = "read More..."
    }
    console.log('ok1')
})

buttom2.addEventListener('click', (e) => {
    item2.classList.toggle('active'); // Menggunakan item2
    // buttom2.classList.toggle('active'); // Menggunakan item2
    // buttom2.textContent("minimize")
    if (item2.classList.contains("active")) {
        buttom2.textContent = "minimize"
    } else {
        buttom2.textContent = "read More..."
    }

    console.log('ok2')
});
