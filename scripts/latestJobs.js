$(document).ready(function () {
    var jobData = [
        {
            title: "Logo Design for Business Loan Brokerage",
            datePosted: "Jun 5, 2025",
            experienceLevel: "MidLevel",
            price: 260,
            paymentType: "Fixed",
            postedAgo: "3 hours ago",
            description: "We are seeking a talented graphic designer to create a professional logo for our company based on specific instructions.",
            tags: [
                "Business Card Design",
                "Graphic Design",
                "Branding",
                "Adobe Illustrator"
            ],
            buttonText: "View More"
        },
        {
            title: "Full-time professional Android and IOS app developer",
            datePosted: "Jun 8, 2025",
            experienceLevel: "MidLevel",
            price: 300,
            paymentType: "Hourly",
            postedAgo: "2 hours ago",
            description: "We are seeking a professional Android and IOS app developer to contribute to our mobile platform.",
            tags: [
                "Firebase on Android",
                "App Development",
                "Software Development",
                "Android"
            ],
            buttonText: "View More"
        },
        {
            title: "SEO Expert for E-commerce Website Optimization",
            datePosted: "Jun 9, 2025",
            experienceLevel: "Expert",
            price: 180,
            paymentType: "Fixed",
            postedAgo: "1 hour ago",
            description: "Looking for an SEO specialist to boost search rankings and improve visibility for our e-commerce site.",
            tags: [
                "SEO Optimization",
                "Google Analytics",
                "E-commerce SEO",
                "Keyword Research"
            ],
            buttonText: "View More"
        },
        {
            title: "Social Media Manager for Fashion Brand",
            datePosted: "Jun 10, 2025",
            experienceLevel: "MidLevel",
            price: 120,
            paymentType: "Hourly",
            postedAgo: "5 hours ago",
            description: "We need a social media expert to manage our Instagram, Facebook, and TikTok accounts with engaging content.",
            tags: [
                "Social Media Strategy",
                "Instagram Marketing",
                "Content Creation",
                "Brand Awareness"
            ],
            buttonText: "View More"
        },
        {
            title: "Custom WordPress Website Design and Development",
            datePosted: "Jun 12, 2025",
            experienceLevel: "Expert",
            price: 450,
            paymentType: "Fixed",
            postedAgo: "30 minutes ago",
            description: "Seeking an experienced developer to build a responsive, SEO-friendly WordPress website from scratch.",
            tags: [
                "WordPress Development",
                "Elementor",
                "Responsive Design",
                "UI/UX"
            ],
            buttonText: "View More"
        },
        {
            title: "Professional Video Editor for YouTube Content",
            datePosted: "Jun 14, 2025",
            experienceLevel: "Entry",
            price: 80,
            paymentType: "Fixed",
            postedAgo: "10 minutes ago",
            description: "Looking for a creative video editor to edit and enhance YouTube videos with transitions, effects, and sound design.",
            tags: [
                "Video Editing",
                "Adobe Premiere Pro",
                "YouTube Content",
                "Motion Graphics"
            ],
            buttonText: "View More"
        }
    ];



    // Loop with jQuery
    $.each(jobData, function (index, job) {
        var tagHTML = job.tags.map(function (tag) {
            return `<span class="px-2 py-1 border border-gray-300 text-gray-600 text-xs rounded-full hover:bg-primary/10 transition-colors">${tag}</span>`;
        }).join("");


        $("#jobCard").append(
            `<div class="rounded-2xl border border-gray-200 p-6 shadow-sm">
                    <h2 class="text-xl font-semibold text-base-300 mb-4 leading-tight">${job.title}</h2>

                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-base-300 text-sm">${job.datePosted}</span>
                        <span class="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        <span class="text-base-300 font-semibold text-sm">${job.experienceLevel}</span>
                    </div>

                    <div class="flex items-center gap-4 mb-6">
                        <span class="text-xl font-semibold text-base-300">$${job.price}</span>
                        <span
                            class="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">${job.paymentType}</span>
                        <span class="text-gray-500 text-sm">Posted ${job.postedAgo}</span>
                    </div>

                    <p class="text-base-300 text-[16px] mb-6 leading-relaxed line-clamp-2">
                        ${job.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-6">${tagHTML}</div>

                    <button
                        class="flex items-center gap-2 text-primary font-medium text-sm hover:text-teal-700 transition-colors">
                        ${job.buttonText}
                        <i class="fas fa-arrow-right text-xs"></i>
                    </button>
                </div>`
        );
    });
});