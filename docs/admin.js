async function loadOrders() {
  const status = document.getElementById("adminStatus");
  const ordersGrid = document.getElementById("ordersGrid");

  status.textContent = "Loading saved inquiries...";
  ordersGrid.innerHTML = "";

  try {
    const response = await fetch("/api/inquiries");
    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.message || "Could not load inquiries.");
    }

    if (!data.orders.length) {
      status.textContent = "No orders yet. New custom requests will appear here.";
      return;
    }

    status.textContent = `${data.orders.length} order${data.orders.length === 1 ? "" : "s"} saved`;

    data.orders.forEach((order) => {
      const card = document.createElement("article");
      card.className = "admin-order-card";
      card.innerHTML = `
        <p class="eyebrow">Order ID ${order.id}</p>
        <h2>${order.product}</h2>
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Contact:</strong> ${order.contact}</p>
        <p><strong>Details:</strong> ${order.details || "No extra details provided."}</p>
        <p><strong>Submitted:</strong> ${new Date(order.createdAt).toLocaleString()}</p>
      `;
      ordersGrid.appendChild(card);
    });
  } catch (error) {
    status.textContent = error.message || "Could not load orders right now.";
  }
}

document.getElementById("refreshOrders").addEventListener("click", loadOrders);
loadOrders();
