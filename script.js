/* ===============================
   SHOP BOUJEE – WHATSAPP ORDER LOGIC
   Available Products Request System
================================ */

const WHATSAPP_NUMBER = "2348102578234";

/* ---------- REQUEST BY PRODUCT TYPE ---------- */
function requestType(type) {
  window.location.href =
    `request.html?product=${encodeURIComponent(type)}`;
}

/* ---------- REQUEST PAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("requestForm");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const product = params.get("product") || "";

  const productInput = document.getElementById("product");
  const nameInput = document.getElementById("name");
  const detailsInput = document.getElementById("details");

  productInput.value = product;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const details = detailsInput.value.trim();

    if (!name || !details) return;

    const message =
`Hello Shop Boujee 👋
My name is ${name}.

I would like to order:
${product}

Details:
${details}`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });

});