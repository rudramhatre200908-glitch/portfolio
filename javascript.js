// ===============================
// Apple Store JavaScript
// ===============================

// Cart Counter
let cartCount = 0;

// Add to Cart Function
function addCart() {
    cartCount++;

    alert("✅ Product added to cart!");

    // Update cart icon if available
    const bagIcon = document.querySelector(".fa-shopping-bag");

    if (bagIcon) {
        bagIcon.innerHTML = `<span style="font-size:18px;">🛍️ ${cartCount}</span>`;
    }
}

// ===============================
// Shop Now Button
// ===============================

const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", () => {
        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// ===============================
// Learn More Button
// ===============================

const learnBtn = document.querySelector(".banner button");

if (learnBtn) {
    learnBtn.addEventListener("click", () => {
        alert("🍎 Apple Intelligence is smarter, faster, and more personal.");
    });
}

// ===============================
// Subscribe Button
// ===============================

const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

        const email = document.querySelector(".newsletter input").value;

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("🎉 Thank you for subscribing!");

        document.querySelector(".newsletter input").value = "";
    });

}

// ===============================
// Product Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }

});

// ===============================
// Welcome Message
// ===============================

window.onload = function () {
    console.log("🍎 Welcome to Apple Store Clone");
};

// ===============================
// Search Icon
// ===============================

const searchIcon = document.querySelector(".fa-search");

if (searchIcon) {

    searchIcon.addEventListener("click", () => {

        const search = prompt("Search Apple Products:");

        if (search && search.trim() !== "") {
            alert(`Searching for: ${search}`);
        }

    });

}