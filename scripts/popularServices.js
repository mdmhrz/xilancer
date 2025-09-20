$(document).ready(function () {
    var services = [
        {
            id: 1,
            category: "Design & Creative",
            title: "I will do professional Figma design for website UI/UX and mobile app interfaces",
            bannerImage: "./assets/popular-services/service_1_banner.png",
            author: {
                name: "Robert Bross",
                profileImage: "./assets/popular-services/service_1_author.png",
                status: "online"
            },
            rating: 4.0,
            reviews: 3,
            price: 29
        },
        {
            id: 2,
            category: "Design & Creative",
            title: "I will design mobile app l ike provider and customer both.",
            bannerImage: "./assets/popular-services/service_2_banner.png",
            author: {
                name: "John Sina",
                profileImage: "./assets/popular-services/service_2_author.png",
                status: "offline"
            },
            rating: 3.0,
            reviews: 5,
            price: 40
        },
        {
            id: 3,
            category: "Design & Creative",
            title: "I will create quality, SEO driven web content for your ecommerce business.",
            bannerImage: "./assets/popular-services/service_3_banner.png",
            author: {
                name: "Michael Anjelo",
                profileImage: "./assets/popular-services/service_3_author.png",
                status: "online"
            },
            rating: 5.0,
            reviews: 15,
            price: 35
        },
        {
            id: 4,
            category: "Design & Creative",
            title: "I will build responsive WordPress website design and ecommerce design.",
            bannerImage: "./assets/popular-services/service_4_banner.png",
            author: {
                name: "Jim Carry",
                profileImage: "./assets/popular-services/service_4_author.png",
                status: "online"
            },
            rating: 4.0,
            reviews: 5,
            price: 25
        },
        {
            id: 5,
            category: "Design & Creative",
            title: "I will design an attractive Youtube , thhumb for your new video",
            bannerImage: "./assets/popular-services/service_5_banner.png",
            author: {
                name: "Robert Plant",
                profileImage: "./assets/popular-services/service_5_author.png",
                status: "online"
            },
            rating: 5.0,
            reviews: 35,
            price: 25
        },
        {
            id: 6,
            category: "Design & Creative",
            title: "I will do professional dashboard design and sass product",
            bannerImage: "./assets/popular-services/service_6_banner.png",
            author: {
                name: "Gary More",
                profileImage: "./assets/popular-services/service_6_author.png",
                status: "offline"
            },
            rating: 5.0,
            reviews: 15,
            price: 28
        },
    ];


    // Loop with jQuery
    $.each(services, function (index, service) {
        $("#servicesCards").append(
            `<div class="bg-white rounded-2xl shadow-lg w-full max-w-sm overflow-hidden">
                        <!-- Card Image Section -->
                        <figure class="relative w-full h-58 overflow-hidden px-4 pt-4">
                            <img src="${service.bannerImage}" alt="${service.title}"
                                class="w-full h-full object-cover">
                            <!-- Favorite button with Heroicon -->
                            <button aria-label="Add to favorites"
                                class="absolute top-6 right-6 p-2 bg-white rounded-full hover:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </figure>

                        <!-- Card Body -->
                        <div class="p-4 space-y-3">
                            <hgroup class="space-y-1">
                                <p class="text-sm font-medium text-gray-500">${service.category}</p>
                                <h2 class="text-base-300 text-xl font-medium leading-tight text-gray-800 line-clamp-2">
                                    ${service.title}
                                </h2>
                            </hgroup>

                            <!-- Reviews -->
                            <div class="flex items-center gap-1 text-yellow-500">
                                <i class="fa-solid fa-star"></i>
                                <span class="text-sm font-semibold text-gray-700">${service.rating}</span>
                                <span class="text-sm text-gray-500">(${service.reviews} Reviews)</span>
                            </div>

                            <!-- Seller & Price -->
                            <footer class="flex items-center justify-between pt-4 border-t border-base-200/50">
                                <div class="flex items-center gap-3">
                                    <!-- Profile Picture with Status Badge -->
                                    <div class="relative w-10 h-10">
                                        <img src="${service.author.profileImage}"
                                            alt="Profile picture of ${service.author.name}"
                                            class="w-full h-full rounded-full object-cover border-2 border-white shadow">
                                        <div
                                            class="absolute bottom-0 right-0 w-3 h-3 ${service.author.status === 'online' ? 'bg-green-500' : 'bg-gray-400'} rounded-full border-2 border-white">
                                        </div>
                                    </div>
                                    <span class="text-sm font-semibold text-gray-700">${service.author.name}</span>
                                </div>
                                <div class="text-right flex items-center gap-1">
                                    <p class="text-xs text-base-300">Starting at:</p>
                                    <p class="text-lg font-semibold text-gray-800">$${service.price}</p>
                                </div>
                            </footer>
                        </div>
                    </div>`
        );
    });
});