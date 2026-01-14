// Fade animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// Autofill product type from URL
const params = new URLSearchParams(window.location.search);
const productField = document.getElementById("product");

if (productField && params.get("type")) {
  productField.value = params.get("type");
}

// WhatsApp request handling
const form = document.getElementById("requestForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const product = document.getElementById("product").value.trim();
    const details = document.getElementById("details").value.trim();

    const message =
      `Hello, my name is ${name}.\n` +
      `I would like a custom ${product}.\n` +
      `Details: ${details}`;

    const whatsappURL =
      `https://wa.me/2348102578234?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}