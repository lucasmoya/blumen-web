document.addEventListener('DOMContentLoaded', function() {
    // Room data
    const rooms = [
        {
            name: "GARDEN VIEW SUITE",
            description: "CAMA MATRIMONIAL | KITCHENETTE | COMEDOR | BAÑO | TERRAZA",
            details: "Dormitorio con cama matrimonial, espacio de comedor, kitchenette, baño y terraza exterior al jardín.",
            image: "https://i.ibb.co/PZH0QP2G/IMG-2659.jpg", // Updated image URL
            features: {
                size: "30 m² Room | 10 m² Terraza",
                capacity: 2
            },
            price: 85000
        },
        {
            name: "PARTIAL SEA VIEW SUITE",
            description: "CAMA MATRIMONIAL | KITCHENETTE | COMEDOR | BAÑO CON TINA | BALCÓN",
            details: "Dormitorio con cama matrimonial, kitchenette con espacio de comedor, baño con tina y balcón exterior con vista parcial al mar.",
            image: "https://i.ibb.co/ccJPbLW2/IMG-2683.jpg", // Updated image URL
            features: {
                size: "32 m² Room | 8 m² Balcón",
                capacity: 2
            },
            price: 95000
        },
        {
            name: "SUPERIOR SEA VIEW SUITE",
            description: "CAMA MATRIMONIAL | KITCHENETTE | COMEDOR | BAÑO CON TINA | BALCÓN",
            details: "Dormitorio con cama matrimonial, kitchenette con espacio de comedor, baño con tina y balcón exterior con vista completa al mar.",
            image: "https://i.ibb.co/vvDXpjLC/IMG-2681.jpg", // Updated image URL
            features: {
                size: "35 m² Room | 10 m² Balcón",
                capacity: 2
            },
            price: 110000
        },
        {
            name: "SEA VIEW SUITE + LIVING",
            description: "CAMA MATRIMONIAL | SALA DE ESTAR | BAÑO | VISTA AL MAR",
            details: "Dormitorio con cama matrimonial, una cómoda sala de estar con vista completa al mar y baño. No tiene kitchenette.",
            image: "https://i.ibb.co/4ZjGFZ2y/IMG-2691.jpg", // Updated image URL
            features: {
                size: "40 m² Room",
                capacity: 2
            },
            price: 110000
        },
        {
            name: "SEA VIEW TWO-BEDROOM APARTMENT",
            description: "2 DORMITORIOS | KITCHENETTE | BAÑO CON TINA | ESTAR | BALCÓN",
            details: "Con dos dormitorios incluidos, el primero con cama matrimonial y el segundo con un camarote, más otra cama individual. Tiene kitchenette completamente equipada, baño con tina, un amplio y cómodo estar, balcón con vista al mar.",
            image: "https://i.ibb.co/sdN47fBq/IMG-2684.jpg", // Updated image URL
            features: {
                size: "60 m² Room | 12 m² Balcón",
                capacity: 5
            },
            price: 155000
        },
        {
            name: "SEA VIEW LOFT",
            description: "CAMA MATRIMONIAL | 2 CAMAS INDIVIDUALES | KITCHENETTE | BAÑO CON TINA | BALCÓN",
            details: "En un solo gran espacio, cuenta con una cama matrimonial y dos camas individuales. Tiene kitchenette completamente equipada, baño con tina, un amplio y cómodo estar, balcón con vista al mar.",
            image: "https://i.ibb.co/ZjPpjGQ/IMG-2663.jpg", // Updated image URL
            features: {
                size: "55 m² Room | 10 m² Balcón",
                capacity: 4
            },
            price: 155000
        }
    ];

    // Obtener el contenedor del carrusel Swiper
    const carousel = document.getElementById('roomsCarousel');
    if (!carousel) return;
    carousel.innerHTML = '';

    // Crear slides dinámicamente
    rooms.forEach(room => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        let capacityIcons = '';
        for (let i = 0; i < room.features.capacity; i++) {
            capacityIcons += '<i class="fas fa-user"></i> ';
        }
        const formattedPrice = room.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        slide.innerHTML = `
            <div class="room-card">
                <div class="room-image" style="background-image: url('${room.image}')"></div>
                <div class="room-details">
                    <div class="room-top-content">
                        <h3 class="room-name">${room.name}</h3>
                        <p class="room-description">${room.description}</p>
                        <p class="room-text">${room.details}</p>
                    </div>
                    <div class="room-bottom-content">
                        <div class="room-info">
                            <div class="room-capacity">${capacityIcons}</div>
                            <div class="room-size">${room.features.size}</div>
                            <div class="room-price">$${formattedPrice} CLP por noche</div>
                        </div>
                        <div class="room-actions">
                            <a href="#" class="view-room-btn">VER HABITACIÓN</a>
                            <a href="#" class="book-now-btn">RESERVAR AHORA</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carousel.appendChild(slide);
    });

    // Inicializar Swiper
    new Swiper('#roomsSwiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        grabCursor: true,
        loop: false
    });
});