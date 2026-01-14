document.getElementById("requestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("customerName").value;
  const type = document.getElementById("productType").value;
  const desc = document.getElementById("description").value;

  const phone = "2348102578234";

  let message =
    "Hello Shop Boujee,%0A%0A" +
    "Customer Name: " + name + "%0A" +
    "Product Type: " + type + "%0A" +
    "Request Details: " + desc + "%0A%0A" +
    "I understand the displayed products are samples only and I am requesting a custom design.";

  window.open("https://wa.me/" + phone + "?text=" + message, "_blank");
});