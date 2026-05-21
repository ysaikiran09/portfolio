const initializeIcons = () => {
    if (window.lucide) {
        window.lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    }
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeIcons);
} else {
    initializeIcons();
}
