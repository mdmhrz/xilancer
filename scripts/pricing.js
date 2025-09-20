$(document).ready(function () {
    var plans = [
        {
            id: 1,
            name: "Free Plan",
            price: 0,
            period: "month",
            description: "For starting out teams building apps gor many public & privet users",
            buttonText: "Start Free Trial",
            features: [
                "Get while register",
                "Must register as a freelancer",
                "One time get",
                "Use for job proposal",
                "Totally Free",
                "Get only once",
                "20 connects free for job"
            ],
            popular: false
        },
        {
            id: 2,
            name: "Business Plan",
            price: 49,
            period: "month",
            description: "For starting out teams building apps gor many public & privet users",
            buttonText: "Start Free Trial",
            features: [
                "Get while register",
                "Flexible payment options",
                "One time get",
                "Premium customer support 24/7",
                "Limited",
                "Supported",
                "20 connects free for job"
            ],
            popular: true
        },
        {
            id: 3,
            name: "Enterprise Plan",
            price: 126,
            period: "month",
            description: "For starting out teams building apps gor many public & privet users",
            buttonText: "Start Free Trial",
            features: [
                "Monthly support",
                "Professional",
                "Healthy usecase",
                "Use for job proposal",
                "New feature added",
                "Get for long term",
                "40 connects free for job"
            ],
            popular: false
        }
    ];

    // Generate pricing cards
    $.each(plans, function (index, plan) {
        const cardClass = plan.popular ? 'border-2 border-secondary relative' : 'border border-gray-200';
        const popularBadge = plan.popular ?
            '<div class="absolute -top-4 left-1/2 transform -translate-x-1/2"><span class="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span></div>' : '';

        $("#pricingCards").append(`
            <div class="bg-white rounded-2xl ${cardClass} p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                ${popularBadge}
                
                <!-- Plan Header -->
                <div class="mb-6">
                    <h3 class="text-2xl font-medium text-base-300 mb-3">${plan.name}</h3>
                    <div class="flex items-baseline mb-4">
                        <span class="text-4xl font-semibold text-base-300">$${plan.price}</span>
                        <span class="text-gray-500 ml-2">/${plan.period}</span>
                    </div>
                    <p class="text-gray-600 leading-relaxed">${plan.description}</p>
                </div>

                <!-- CTA Button -->
                <button class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-4 px-6 rounded-xl transition-colors duration-200 mb-6 flex items-center justify-center">
                    ${plan.buttonText}
                    <i class="fas fa-arrow-right ml-2"></i>
                </button>

                <!-- Features Section -->
                <div class="space-y-4">
                    <h4 class="font-semibold text-base-300">Marketplace Plan include:</h4>
                    <ul class="space-y-4">
                        ${plan.features.map(feature => `
                            <li class="flex items-start">
                                <div class="flex-shrink-0 w-5 h-5 rounded-full border-2 border-secondary  flex items-center justify-center mt-0.5 mr-3">
                                    <i class="fa-solid fa-check text-secondary font-semibold text-[10px]"></i>
                                </div>
                                <span class="text-gray-600">${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `);
    });



    // Add hover effects
    $('.bg-white').hover(
        function () {
            $(this).addClass('transform scale-105');
        },
        function () {
            $(this).removeClass('transform scale-105');
        }
    );
});