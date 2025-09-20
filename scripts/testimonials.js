$(document).ready(function () {

    const testimonialData = [
        {
            image: "./assets/testimonial/user-1.png",
            name: "Esther Howard",
            position: "Professional Developer",
            message: "Joining this marketplace helped me connect with global clients and take control of my freelance development career.",
            quoteIcon: "./assets/testimonial/quote.svg"
        },
        {
            image: "./assets/testimonial/user-2.png",
            name: "Jenny Wilson",
            position: "Product Designer",
            message: "This platform gave me the opportunity to turn creative ideas into real client solutions across multiple industries.",
            quoteIcon: "./assets/testimonial/quote.svg"
        },
        {
            image: "./assets/testimonial/user-3.png",
            name: "Albert Flores",
            position: "AI Services Expert",
            message: "As an AI consultant, I’ve worked on cutting-edge projects that truly challenged and improved my skills.",
            quoteIcon: "./assets/testimonial/quote.svg"
        },
        {
            image: "./assets/testimonial/user-4.png",
            name: "Courtney Henry",
            position: "Digital Marketer",
            message: "I was able to scale client campaigns and deliver measurable results while growing my own personal brand.",
            quoteIcon: "./assets/testimonial/quote.svg"
        },
        {
            image: "./assets/testimonial/user-5.png",
            name: "Ralph Edwards",
            position: "Programmer",
            message: "Freelancing here allowed me to build flexible, long-term coding contracts with startups and entrepreneurs.",
            quoteIcon: "./assets/testimonial/quote.svg"
        },
        {
            image: "./assets/testimonial/user-6.png",
            name: "Kathryn Murphy",
            position: "Customer Support Specialist",
            message: "Working with various clients remotely improved my communication and support skills dramatically. It's been rewarding.",
            quoteIcon: "./assets/testimonial/quote.svg"
        }
    ];




    // Loop with jQuery
    $.each(testimonialData, function (index, testimony) {


        $("#testimonialsCards").append(
            `<div class="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
            <img class="mb-2" src="${testimony.image}" alt="User image">
            <h3 class="text-base-300 font-medium text-[18px]">${testimony.name}</h3>
            <p class="mb-6 text-base-300 text-[14px]">${testimony.position}</p>
            <p class="text-center text-base-300 mb-6">${testimony.message}</p>
            <img class="border border-base-300/20 p-2 rounded-full" src="${testimony.quoteIcon}" alt="quote icon">
        </div>`
        );
    });
});