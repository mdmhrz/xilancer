$(document).ready(function () {
    var services = [
        {
            id: 1,
            image: "/assets/popular-categories/web.svg",
            name: "Website Development",
            description: "Designing and building responsive business websites.",
            jobs: 6
        },
        {
            id: 2,
            image: "/assets/popular-categories/app.svg",
            name: "Mobile App Development",
            description: "Creating apps for Android and iOS devices.",
            jobs: 18
        },
        {
            id: 3,
            image: "/assets/popular-categories/marketing.svg",
            name: "Digital Marketing",
            description: "Promoting brands through digital marketing strategies.",
            jobs: 22
        },
        {
            id: 4,
            image: "/assets/popular-categories/video.svg",
            name: "Video Editing",
            description: "Editing video content for various digital platforms.",
            jobs: 20
        },
    ];


    // Loop with jQuery
    $.each(services, function (index, service) {
        $("#popularCards").append(
            `<div class="bg-base-100 shadow-xl p-6 rounded-lg border border-primary/10 hover:scale-110 transition-all duration-300">
                    <img class="p-2 bg-primary/10 rounded-full mb-[12px]" src="${service.image}"
                        alt="Categories Logo">
                    <h3 class="text-[18px] font-medium text-base-300 mb-[6px]">${service.name}</h3>
                    <p class="text-base-300 text-[14px] mb-[12px]">${service.description}</p>
                    <span class="text-base-300 text-[14px]">${service.jobs} jobs</span>
            </div>`
        );
    });
});