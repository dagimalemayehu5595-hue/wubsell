const { useEffect, useState } = React;

const featuredProducts = [
  "Custom Phone Cases",
  "Polaroid Pictures",
  "Album Cover Wall Art",
  "Pastel Posters",
  "Photo Booth Pictures",
  "Graphic T-Shirts",
  "Vision Boards",
  "Graduation Caps",
];

const collections = [
  {
    title: "Protect Beautifully",
    text: "Phone cases, accessories, and small custom pieces with a soft luxe finish made to feel personal.",
  },
  {
    title: "Style Your Space",
    text: "Wall art, album covers, posters, postcards, and A4 frames that make a room feel curated and expressive.",
  },
  {
    title: "Keep the Moment",
    text: "Polaroids, photo booth strips, CD scrap, bookmarks, and cards designed like keepsakes instead of throwaways.",
  },
];

const testimonials = [
  "My phone case looked expensive and unique the second I opened it.",
  "The poster wall set made my room look like a Pinterest board.",
  "My graduation cap was one of the prettiest details of the whole day.",
];

const homepagePhotos = [
  { src: "./home-phone-case.jpg", alt: "Custom Wubshell phone case" },
  { src: "./home-poster-wall.jpg", alt: "Wubshell posters and wall art" },
  { src: "./home-polaroids.jpg", alt: "Wubshell polaroids and memory pieces" },
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

function SiteHeader({ current }) {
  const links = [
    { href: "./index.html", label: "Home" },
    { href: "./gallery.html", label: "Gallery" },
    { href: "./order.html", label: "Order" },
  ];

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
      links.map((link) =>
        React.createElement(
          "a",
          {
            key: link.href,
            href: link.href,
            className: `nav-link${current === link.label ? " active" : ""}`,
          },
          link.label
        )
      )
    )
  );
}

function App() {
  const [activeProduct, setActiveProduct] = useState(featuredProducts[0]);

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
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveProduct((current) => {
        const index = featuredProducts.indexOf(current);
        return featuredProducts[(index + 1) % featuredProducts.length];
      });
    }, 2500);

    return () => clearInterval(rotation);
  }, []);

  return React.createElement(
    "main",
    { className: "page-shell" },
    React.createElement(
      "section",
      { className: "hero-section homepage-hero" },
      React.createElement("div", { className: "aurora aurora-one" }),
      React.createElement("div", { className: "aurora aurora-two" }),
      React.createElement(SiteHeader, { current: "Home" }),
      React.createElement(
        "div",
        { className: "hero-grid reveal" },
        React.createElement(
          "div",
          { className: "hero-copy-panel" },
          React.createElement("p", { className: "intro-badge" }, "A premium custom studio for pretty things"),
          React.createElement(
            "h2",
            null,
            "A softer, more premium brand home for the products people actually want to order."
          ),
          React.createElement(
            "p",
            { className: "hero-text" },
            "From custom phone cases to posters, polaroids, wall art, bookmarks, tees, and graduation pieces, Wubshell creates personalized products that turn everyday moments into something beautiful to keep, wear, gift, and show off."
          ),
          React.createElement(
            "div",
            { className: "hero-actions" },
            React.createElement("a", { href: "./gallery.html", className: "primary-button" }, "Explore Gallery"),
            React.createElement("a", { href: "./order.html", className: "secondary-button" }, "Place an Order")
          ),
          React.createElement(
            "div",
            { className: "trust-row" },
            React.createElement("div", null, React.createElement("strong", null, "Custom"), React.createElement("span", null, "Made to match your photos and ideas")),
            React.createElement("div", null, React.createElement("strong", null, "Giftable"), React.createElement("span", null, "Perfect for birthdays, rooms, and milestones")),
            React.createElement("div", null, React.createElement("strong", null, "Beautiful"), React.createElement("span", null, "Designed to protect, decorate, and stand out"))
          )
        ),
        React.createElement(
          "div",
          { className: "hero-visual-panel" },
          React.createElement(
            "div",
            { className: "floating-card main-card" },
            React.createElement("p", { className: "card-label" }, "Featured now"),
            React.createElement("h3", null, activeProduct),
            React.createElement(
              "p",
              null,
              "Built for gifting, mirror selfies, room styling, celebrations, and aesthetic everyday use."
            )
          ),
          React.createElement(
            "div",
            { className: "floating-card mini-card top-right" },
            React.createElement("span", null, "Custom made"),
            React.createElement("span", null, "Gift-ready"),
            React.createElement("span", null, "Made to stand out")
          ),
          React.createElement(
            "div",
            { className: "floating-card mini-card bottom-left" },
            React.createElement("p", null, "Made for sweet gifts, soft spaces, and everyday favorites.")
          ),
          React.createElement(
            "div",
            { className: "shell-window" },
            React.createElement("div", { className: "shell-window-glow" }),
            React.createElement("div", { className: "shell-window-ring" }),
            React.createElement(LogoMark, null)
          )
        )
      )
    ),
    React.createElement(
      "section",
      { className: "collections-section reveal" },
      React.createElement(
        "div",
        { className: "section-heading" },
        React.createElement("p", { className: "eyebrow" }, "Why clients love it"),
        React.createElement("h2", null, "Custom pieces that feel personal from the first look"),
        React.createElement(
          "p",
          null,
          "Wubshell combines soft visuals, thoughtful customization, and everyday practicality to create products people love to keep, gift, wear, and show off."
        )
      ),
      React.createElement(
        "div",
        { className: "collection-grid three-up" },
        collections.map((item) =>
          React.createElement(
            "article",
            { className: "collection-card", key: item.title },
            React.createElement("h3", null, item.title),
            React.createElement("p", null, item.text)
          )
        )
      )
    ),
    React.createElement(
      "section",
      { className: "gallery-section reveal" },
      React.createElement(
        "div",
        { className: "section-heading" },
        React.createElement("p", { className: "eyebrow" }, "Photo preview"),
        React.createElement("h2", null, "Custom details that make people stop and stare"),
        React.createElement(
          "p",
          null,
          "Every Wubshell piece is designed to feel personal, photogenic, and worth showing off, whether it lives on your phone, your wall, your desk, or your outfit."
        )
      ),
      React.createElement(
        "div",
        { className: "gallery-grid" },
        homepagePhotos.map((photo, index) =>
          React.createElement(
            "article",
            { className: `gallery-card gallery-card-${index + 1}`, key: photo.src },
            React.createElement("img", {
              className: "gallery-photo",
              src: photo.src,
              alt: photo.alt,
            }),
            React.createElement("p", { className: "eyebrow" }, ["Phone cases", "Wall styling", "Memory pieces"][index]),
            React.createElement("h3", null, ["Protect beautifully", "Style your space", "Keep the moment"][index])
          )
        )
      )
    ),
    React.createElement(
      "section",
      { className: "testimonial-section reveal" },
      React.createElement(
        "div",
        { className: "section-heading" },
        React.createElement("p", { className: "eyebrow" }, "Why it stands out"),
        React.createElement("h2", null, "Pieces that feel beautiful before they even arrive"),
        React.createElement(
          "p",
          null,
          "Wubshell is made for clients who want their custom pieces to feel thoughtful, stylish, and memorable from the first look to the final product."
        )
      ),
      React.createElement(
        "div",
        { className: "testimonial-grid" },
        testimonials.map((quote, index) =>
          React.createElement(
            "article",
            { className: "testimonial-card", key: quote },
            React.createElement("p", { className: "testimonial-quote" }, `"${quote}"`),
            React.createElement("strong", null, ["Mimi", "Beti", "Ruth"][index]),
            React.createElement("span", null, "Wubshell client")
          )
        )
      )
    ),
    React.createElement(
      "section",
      { className: "final-cta-section reveal" },
      React.createElement(
        "div",
        { className: "final-cta-card" },
        React.createElement("p", { className: "eyebrow" }, "Next step"),
        React.createElement("h2", null, "See the work, then order with confidence"),
        React.createElement(
          "div",
          { className: "hero-actions centered-actions" },
          React.createElement("a", { href: "./gallery.html", className: "secondary-button" }, "Open Gallery"),
          React.createElement("a", { href: "./order.html", className: "primary-button" }, "Go to Order Page")
        )
      )
    ),
    React.createElement(
      "a",
      {
        href: "https://t.me/share/url?url=https://wubshell.com&text=Hi%20Wubshell%2C%20I%20want%20to%20place%20a%20custom%20order.",
        className: "telegram-float",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Order on Telegram",
      },
      React.createElement("span", { className: "telegram-dot" }),
      React.createElement(
        "div",
        null,
        React.createElement("strong", null, "Telegram"),
        React.createElement("span", null, "Quick orders")
      )
    ),
    React.createElement(
      "footer",
      { className: "site-footer" },
      React.createElement(
        "div",
        { className: "footer-group" },
        React.createElement("p", null, "Wubshell Studio, Ethiopia"),
        React.createElement("p", null, "Home | Gallery | Order | Admin")
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

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
