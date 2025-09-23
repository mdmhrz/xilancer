$(document).ready(function () {
    // Open mobile menu
    $("#mobileMenuBtn").click(function () {
        $("#mobileMenuArea").removeClass("hidden");
        $("#mobileMenuDropdown").removeClass("translate-x-full").addClass("translate-x-0");
    });

    // Close menu on overlay or close button
    $("#mobileMenuOverlay, #closeMobileMenu").click(function () {
        $("#mobileMenuDropdown").removeClass("translate-x-0").addClass("translate-x-full");
        setTimeout(() => { $("#mobileMenuArea").addClass("hidden"); }, 300);
    });

    // Add background on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $("#mainNav").addClass("bg-primary/30 backdrop-blur-md shadow-md");
        } else {
            $("#mainNav").removeClass("bg-primary/30 backdrop-blur-md shadow-md");
        }
    });
});