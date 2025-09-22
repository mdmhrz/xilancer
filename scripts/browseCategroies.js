$(document).ready(function () {
    var browseServices = [
        { id: 1, quantity: 8, name: "Web Development", image: './assets/browse-cotegories/service-1.png' },
        { id: 2, quantity: 12, name: "Content Writer", image: './assets/browse-cotegories/service-2.png' },
        { id: 3, quantity: 10, name: "Design & Creative", image: './assets/browse-cotegories/service-3.png' },
        { id: 4, quantity: 25, name: "SEO Expert", image: './assets/browse-cotegories/service-4.png' },
        { id: 5, quantity: 5, name: "App Development", image: './assets/browse-cotegories/service-1.png' },
        { id: 6, quantity: 4, name: "Game Development", image: './assets/browse-cotegories/service-2.png' }
    ];

    // Generate cards dynamically
    $.each(browseServices, function (index, service) {
        $("#browseCategoriesTrack").append(`
      <div class="browse-service-card rounded-2xl bg-cover bg-center text-white p-6 shadow-lg"
           style="background-image: url('${service.image}'); height: 350px;">
        <span class="text-sm ">${service.quantity} Services</span>
        <h3 class="text-xl font-medium mt-2">${service.name}</h3>
      </div>
    `);
    });

    // Carousel functionality
    let currentIndex = 0;
    const totalCards = browseServices.length;

    function getCardsToShow() {
        if (window.innerWidth >= 1024) return 4; // large → 4
        if (window.innerWidth >= 768) return 3;  // medium → 3
        return 1; // small → 1
    }

    function updateCarousel() {
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, totalCards - cardsToShow);

        currentIndex = Math.min(currentIndex, maxIndex);

        const cardWidth = $('#browseCategoriesTrack .browse-service-card').first().outerWidth(true);
        const translateX = -currentIndex * cardWidth;

        $('#browseCategoriesTrack').css('transform', `translateX(${translateX}px)`);

        // Button state
        $('#browsePrevBtn').toggleClass('opacity-50 cursor-not-allowed', currentIndex === 0);
        $('#browseNextBtn').toggleClass('opacity-50 cursor-not-allowed', currentIndex >= maxIndex);
    }

    $('#browseNextBtn').click(function () {
        const cardsToShow = getCardsToShow();
        const maxIndex = Math.max(0, totalCards - cardsToShow);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    $('#browsePrevBtn').click(function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    $(window).resize(function () {
        updateCarousel();
    });

    setTimeout(updateCarousel, 100);
});
