const params = new URLSearchParams(window.location.search);
const product = params.get("product");
if (product) document.getElementById("product").value = product;

document.getElementById("requestForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const prod = document.getElementById("product").value;
  const details = document.getElementById("details").value;

  const msg = `Hello, my name is ${name}. I want a custom ${prod}. Details: ${details}`;
  window.open(`https://wa.me/2348102578234?text=${encodeURIComponent(msg)}`);
  const reveals = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));
});
