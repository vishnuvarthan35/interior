jQuery(document).ready(function() {
    jQuery('.tp-banner').revolution({
        lazyType: "smart", // Check for the correct lazy load type
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 9000,
        navigation: { arrows: { enable: true } }
    });
});
