// scripts.jss
// Function to display cars based on selected category
function showCategory(category) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const cars = {
        semua: [
            { name: 'Mobil Vios', category: 'SEDAN', price: 'Rp. 500.000/hari', img: 'img/Vios.jpg' },
            { name: 'Mobil City', category: 'SEDAN', price: 'Rp. 600.000/hari', img: 'img/City.jpg' },
            { name: 'Mobil Civic', category: 'SEDAN', price: 'Rp. 700.000/hari', img: 'img/civic.jpg' },
            { name: 'Mobil Yaris', category: 'SEDAN', price: 'Rp. 550.000/hari', img: 'img/yaris.png' }
        ],
        vios: [
            { name: 'Mobil Vios', category: 'SEDAN', price: 'Rp. 500.000/hari', img: 'img/Vios.jpg' }
        ],
        city: [
            { name: 'Mobil City', category: 'SEDAN', price: 'Rp. 600.000/hari', img: 'img/City.jpg' }
        ],
        civic: [
            { name: 'Mobil Civic', category: 'SEDAN', price: 'Rp. 700.000/hari', img: 'img/civic.jpg' }
        ],
        yaris: [
            { name: 'Mobil Yaris', category: 'SEDAN', price: 'Rp. 550.000/hari', img: 'img/yaris.png' }
        ]
    };

    cars[category].forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.className = 'car';

        const img = document.createElement('img');
        img.src = car.img;
        img.alt = car.name;

        const h3 = document.createElement('h3');
        h3.textContent = car.name;

        const p1 = document.createElement('p');
        p1.textContent = `Kategori: ${car.category}`;

        const p2 = document.createElement('p');
        p2.textContent = `Harga: ${car.price}`;

        const button = document.createElement('p');
        
        

        carDiv.append(img, h3, p1, p2, button);
        content.appendChild(carDiv);
    });
}













