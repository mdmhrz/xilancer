$(document).ready(function () {
    // JSON data (3 profiles)
    const profiles = [
        {
            name: "Guy Hawkins",
            image: "./assets/testimonial/user-1.png",
            status: "online",
            badge: "Vetted Pro",
            rating: 4.0,
            reviews: 212,
            role: "Graphic & UI UX Designer",
            skills: ["Figma", "Mobile App", "Branding", "Sales Copy", "Adobe Photoshop", "Illustrator"],
            location: "Nicosia, Cyprus",
            rate: "$25-30 / hr"
        },
        {
            name: "Luis Henry",
            image: "./assets/testimonial/user-2.png",
            status: "offline",
            badge: "Top Rated",
            rating: 4.8,
            reviews: 540,
            role: "Full Stack Developer",
            skills: ["JavaScript", "React", "Node.js", "MongoDB", "TailwindCSS"],
            location: "Berlin, Germany",
            rate: "$40-50 / hr"
        },
        {
            name: "Jim Carry",
            image: "./assets/testimonial/user-3.png",
            status: "online",
            badge: "Rising Talent",
            rating: 4.5,
            reviews: 320,
            role: "Digital Marketer",
            skills: ["SEO", "Content Writing", "Google Ads", "Facebook Ads", "Analytics"],
            location: "New York, USA",
            rate: "$30-35 / hr"
        }
    ];

    // Append profiles dynamically
    profiles.forEach(profile => {
        let skillsHtml = "";
        const maxSkills = 5;

        // Take only the first 5 skills
        const slicedSkills = profile.skills.slice(0, maxSkills);

        slicedSkills.forEach(skill => {
            skillsHtml += `<span class="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">${skill}</span>`;
        });


        if (profile.skills.length > maxSkills) {
            let extra = profile.skills.length - maxSkills;
            skillsHtml += `<span class="text-gray-800 text-xs font-medium px-3 py-1 rounded-full">+${extra}</span>`;
        }


        let statusColor = profile.status === "online" ? "bg-green-500" : "bg-gray-400";

        let card = `
        <div class="card-animate rounded-2xl shadow-xl p-6 w-full border bg-white">
            <!-- Header Section -->
            <div class="flex items-start gap-4 mb-6 sm:mb-8">
                <!-- Profile Image and Status Dot -->
                <div class="relative flex-shrink-0">
                    <img src="${profile.image}" alt="${profile.name}"
                        class="w-20 h-20 rounded-full object-cover border border-gray-200">
                    <div class="absolute bottom-1 right-1 w-4 h-4 ${statusColor} border-2 border-white rounded-full"></div>
                </div>

                <!-- Profile Info -->
                <div class="flex-grow">
                    <div class="flex items-center flex-wrap gap-2 mb-1">
                        <h2 class="text-xl font-medium text-gray-800">${profile.name}</h2>
                        <span class="text-gray-400 font-light">|</span>
                        <span class="text-sm font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">${profile.badge}</span>
                    </div>
                    <!-- Rating -->
                    <div class="flex items-start gap-1 mb-2">
                        <div class="flex text-yellow-400 items-center">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.373 4.225a1 1 0 00.95.691h4.444c.969 0 1.371 1.24.588 1.81l-3.593 2.617a1 1 0 00-.364 1.118l1.373 4.225c.3.921-.755 1.688-1.542 1.118l-3.593-2.617a1 1 0 00-1.176 0l-3.593 2.617c-.787.57-1.842-.197-1.542-1.118l1.373-4.225a1 1 0 00-.364-1.118L2.091 9.653c-.783-.57-.381-1.81.588-1.81h4.444a1 1 0 00.95-.691l1.373-4.225z">
                                </path>
                            </svg>
                        </div>
                        <span class="text-sm font-semibold text-gray-800">${profile.rating}</span>
                        <span class="text-sm text-gray-500">(${profile.reviews})</span>
                    </div>
                    <p class="text-gray-600 font-medium text-sm sm:text-md">${profile.role}</p>
                </div>
            </div>

            <!-- Skills Section -->
            <div class="flex flex-wrap gap-2 mb-6">${skillsHtml}</div>            

            <!-- Location and Rate Section -->
            <div class="grid grid-cols-2 gap-4 mb-6 pb-6">
                <div>
                    <p class="text-sm font-medium text-gray-500">Location:</p>
                    <p class="text-sm font-semibold text-base-300">${profile.location}</p>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-500">Rate:</p>
                    <p class="text-sm font-semibold text-base-300">${profile.rate}</p>
                </div>
            </div>

            <!-- Call to Action Button -->
            <button
                class="text-primary flex font-medium hover:text-base-100 hover:bg-primary transition-all duration-300 border px-4 py-2 rounded-lg border-primary/50 items-center gap-2">
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </button>
        </div>
        `;

        $("#freelancersCard").append(card);
    });
});
