const { useEffect, useState } = React;

const products = [
  "Custom Phone Cases",
  "Polaroid Pictures",
  "Album Cover Wall Art",
  "Pastel Posters",
  "Photo Booth Pictures",
  "Postcards",
  "CD Scrap",
  "A4 Frame",
  "Custom Bookmarks",
  "Keychains",
  "Graphic T-Shirts",
  "Baby Tees",
  "Vision Boards",
  "Custom Cards",
  "Custom Graduation Caps",
];

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return React.createElement("img", {
      className: "logo-image",
      src: "./logo.png",
      alt: "Wubshell Studio logo",
      onError: () => setFailed(true),
    });
  }

  return React.createElement(
    "div",
    { className: "shell-logo", "aria-label": "Wubshell Studio logo" },
    React.createElement("div", { className: "shell-circle shell-main" }),
    React.createElement("div", { className: "shell-circle shell-small shell-top" }),
    React.createElement("div", { className: "shell-circle shell-small shell-bottom" }),
    React.createElement(
      "div",
      { className: "shell-wordmark" },
      React.createElement("span", null, "Wub"),
      React.createElement("strong", null, "shell")
    )
  );
}

function SiteHeader() {
  return React.createElement(
    "header",
    { className: "site-topbar" },
    React.createElement(
      "a",
      { href: "./index.html", className: "brand-lockup brand-link" },
      React.createElement(LogoMark, null),
      React.createElement(
        "div",
        { className: "brand-copy" },
        React.createElement("p", { className: "eyebrow" }, "Addis-made custom studio"),
        React.createElement("h1", null, "Wubshell Studio")
      )
    ),
    React.createElement(
      "nav",
      { className: "site-nav" },
      React.createElement("a", { href: "./index.html", className: "nav-link" }, "Home"),
      React.createElement("a", { href: "./gallery.html", className: "nav-link" }, "Gallery"),
      React.createElement("a", { href: "./order.html", className: "nav-link active" }, "Order")
    )
  );
}

function PlatformIcon({ type }) {
  if (type === "instagram") {
    return React.createElement(
      "svg",
      { viewBox: "0 0 24 24", className: "platform-svg", "aria-hidden": "true" },
      React.createElement("rect", {
        x: "3.5",
        y: "3.5",
        width: "17",
        height: "17",
        rx: "5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
      }),
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
      }),
      React.createElement("circle", { cx: "17.2", cy: "6.8", r: "1.2", fill: "currentColor" })
    );
  }

  if (type === "tiktok") {
    return React.createElement(
      "svg",
      { viewBox: "0 0 24 24", className: "platform-svg", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M14 4c.6 2 1.9 3.4 4 4v2.7c-1.5 0-2.9-.4-4-1.1V15a5 5 0 1 1-5-5c.3 0 .7 0 1 .1v2.8a2.7 2.7 0 1 0 1.3 2.3V4H14z",
        fill: "currentColor",
      })
    );
  }

  if (type === "email") {
    return React.createElement(
      "svg",
      { viewBox: "0 0 24 24", className: "platform-svg", "aria-hidden": "true" },
      React.createElement("rect", {
        x: "3.5",
        y: "6",
        width: "17",
        height: "12",
        rx: "2.4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
      }),
      React.createElement("path", {
        d: "M5.5 8l6.5 5 6.5-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  }

  if (type === "telegram") {
    return React.createElement(
      "svg",
      { viewBox: "0 0 24 24", className: "platform-svg", "aria-hidden": "true" },
      React.createElement("path", {
        d: "M20.3 5.3 3.9 11.6c-1.1.4-1.1 1 .2 1.4l4.2 1.3 1.6 5c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.3-2.2 4.7 3.4c.9.5 1.5.2 1.7-.8l2.8-13.1c.3-1.2-.4-1.8-1.3-1.4ZM9 13.9l8.2-5.2c.4-.2.7-.1.4.2l-6.8 6.2-.3 3.3L9 13.9Z",
        fill: "currentColor",
      })
    );
  }

  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", className: "platform-svg", "aria-hidden": "true" },
    React.createElement("path", {
      d: "M12 4a8 8 0 0 0-6.9 12l-1 3.5 3.6-.9A8 8 0 1 0 12 4zm4.5 11.1c-.2.6-1.3 1.1-1.8 1.2-.5.1-1.2.2-3.5-.7-2.8-1.2-4.6-4-4.8-4.3-.2-.3-1.1-1.5-1.1-2.9s.8-2.1 1.1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .9 2.1.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.5.5c-.2.2-.3.4-.1.7.2.3 1 1.6 2.1 2.5 1.5 1.3 2.7 1.7 3.1 1.9.3.1.6.1.8-.1l1-1.1c.2-.2.4-.3.7-.2.3.1 1.8.8 2.1 1 .3.1.5.2.6.4.1.1.1.8-.1 1.4z",
      fill: "currentColor",
    })
  );
}

function OrderChannel({ href, label, value, icon, accent, external }) {
  return React.createElement(
    "a",
    {
      href,
      className: "order-channel",
      target: external ? "_blank" : undefined,
      rel: external ? "noreferrer" : undefined,
    },
    React.createElement(
      "span",
      { className: `channel-icon ${accent}` },
      React.createElement(PlatformIcon, { type: icon })
    ),
    React.createElement(
      "div",
      { className: "channel-copy" },
      React.createElement("span", null, label),
      React.createElement("strong", null, value)
    )
  );
}

function OrderPage() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    contact: "",
    product: products[0],
    details: "",
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your custom request..." });

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus({ type: "success", message: data.message });
      setForm({
        name: "",
        contact: "",
        product: products[0],
        details: "",
      });
    } catch (error) {
      setStatus({
        type: "success",
        message:
          "Preview mode: online form submission is not active yet. Please place your order through Instagram, Telegram, TikTok, or email using the contact options on this page.",
      });
    }
  }

  return React.createElement(
    "main",
    { className: "page-shell" },
    React.createElement(
      "section",
      { className: "subpage-hero" },
      React.createElement(SiteHeader, null),
      React.createElement(
        "div",
        { className: "subpage-copy reveal" },
        React.createElement("p", { className: "intro-badge" }, "Order"),
        React.createElement("h2", null, "Bring your idea to life with a custom order made just for you"),
        React.createElement(
          "p",
          null,
          "Share your product choice, photos, colors, or inspiration, and Wubshell will turn your vision into something beautiful, personal, and made to stand out."
        )
      )
    ),
    React.createElement(
      "section",
      { className: "contact-section reveal page-block" },
      React.createElement(
        "div",
        { className: "contact-card socials-card" },
        React.createElement("p", { className: "eyebrow" }, "Ways to order"),
        React.createElement("h2", null, "Use the form or message Wubshell directly"),
        React.createElement(
          "p",
          { className: "contact-intro" },
          "Choose the platform that feels easiest for you and send your custom idea, photo references, or inspiration."
        ),
        React.createElement(
          "div",
          { className: "social-list" },
          React.createElement(OrderChannel, {
            href: "https://www.instagram.com/wubshell",
            label: "Instagram",
            value: "@wubshell",
            icon: "instagram",
            accent: "instagram-accent",
            external: true,
          }),
          React.createElement(OrderChannel, {
            href: "https://www.tiktok.com/@wubshell",
            label: "TikTok",
            value: "@wubshell",
            icon: "tiktok",
            accent: "tiktok-accent",
            external: true,
          }),
          React.createElement(OrderChannel, {
            href: "mailto:wubshellphonecaseseth.co@gmail.com",
            label: "Email",
            value: "wubshellphonecaseseth.co@gmail.com",
            icon: "email",
            accent: "email-accent",
          }),
          React.createElement(OrderChannel, {
            href: "https://t.me/share/url?url=https://wubshell.com&text=Hi%20Wubshell%2C%20I%20want%20to%20place%20a%20custom%20order.",
            label: "Telegram",
            value: "Quick order chat",
            icon: "telegram",
            accent: "telegram-accent",
            external: true,
          })
        )
      ),
      React.createElement(
        "div",
        { className: "contact-card order-card" },
        React.createElement("p", { className: "eyebrow" }, "Custom request form"),
        React.createElement("h2", null, "Tell Wubshell what you want made"),
        React.createElement(
          "form",
          { className: "order-form", onSubmit: handleSubmit },
          React.createElement("input", {
            type: "text",
            placeholder: "Your name",
            value: form.name,
            onChange: (event) => setForm({ ...form, name: event.target.value }),
          }),
          React.createElement("input", {
            type: "text",
            placeholder: "Instagram, TikTok, email, or phone",
            value: form.contact,
            onChange: (event) => setForm({ ...form, contact: event.target.value }),
          }),
          React.createElement(
            "select",
            {
              value: form.product,
              onChange: (event) => setForm({ ...form, product: event.target.value }),
            },
            products.map((product) =>
              React.createElement("option", { key: product, value: product }, product)
            )
          ),
          React.createElement("textarea", {
            rows: 6,
            placeholder: "Describe your idea, preferred colors, photos, references, or deadline",
            value: form.details,
            onChange: (event) => setForm({ ...form, details: event.target.value }),
          }),
          React.createElement(
            "button",
            { type: "submit", className: "primary-button wide-button" },
            status.type === "loading" ? "Sending..." : "Send Order Request"
          ),
          status.message
            ? React.createElement("p", { className: `form-status ${status.type}` }, status.message)
            : null
        )
      )
    ),
    React.createElement(
      "footer",
      { className: "site-footer" },
      React.createElement(
        "div",
        { className: "footer-group" },
        React.createElement("p", null, "Wubshell Studio, Ethiopia"),
        React.createElement("p", null, "Clean order flow for faster inquiries")
      ),
      React.createElement(
        "p",
        { className: "footer-credit" },
        "Designed and developed by Dagim Alemayehu",
        React.createElement("span", null, "0930105595 / 0917923211")
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(OrderPage));
