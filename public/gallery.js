const { useEffect, useState } = React;

const gallerySections = [
  {
    title: "Phone Cases and Accessories",
    text: "Designed to protect beautifully with shell-soft tones, glossy details, and custom photo or graphic styling.",
    items: ["Custom phone cases", "Charms and keychains", "Accessories styling"],
    tone: "blue",
    image: "/gallery-phone-case.jpg",
    detailImages: ["/gallery-phone-case-detail-1.jpg", "/gallery-phone-case-detail-2.jpg"],
    bestFor: "Mirror selfies, gifts, everyday use, and matching your favorite aesthetic.",
  },
  {
    title: "Wall Art and Posters",
    text: "Pastel posters, album cover art, postcards, and framed prints that instantly style a room or work corner.",
    items: ["Album cover wall art", "A4 frame prints", "Postcards and pastel posters"],
    tone: "pearl",
    image: "/gallery-wall-art.jpg",
    detailImages: ["/gallery-wall-art-detail-1.jpg", "/gallery-wall-art-detail-2.jpg"],
    bestFor: "Dorm rooms, bedrooms, studio corners, and gifting something personal for a space.",
  },
  {
    title: "Memory Pieces",
    text: "Polaroids, photo booth strips, bookmarks, custom cards, and CD scrap made to feel collectible and personal.",
    items: ["Polaroid packs", "Photo booth pictures", "Bookmarks and custom cards"],
    tone: "blush",
    image: "/gallery-memory-pieces.jpg",
    detailImages: ["/gallery-memory-detail-1.jpg", "/gallery-memory-detail-2.jpg"],
    bestFor: "Birthdays, friendship gifts, journaling, scrapbooks, and keepsakes worth holding onto.",
  },
  {
    title: "Wearable Statements",
    text: "Graphic T-shirts, baby tees, and graduation caps that make an outfit or event look unforgettable.",
    items: ["Graphic T-shirts", "Baby tees", "Custom graduation caps"],
    tone: "ink",
    image: "/gallery-wearables.jpg",
    detailImages: ["/gallery-wearables-detail-1.jpg", "/gallery-wearables-detail-2.jpg"],
    bestFor: "Celebrations, campus looks, event outfits, and standout custom moments.",
  },
];

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return React.createElement("img", {
      className: "logo-image",
      src: "/logo.png",
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
      { href: "/", className: "brand-lockup brand-link" },
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
      React.createElement("a", { href: "/", className: "nav-link" }, "Home"),
      React.createElement("a", { href: "/gallery", className: "nav-link active" }, "Gallery"),
      React.createElement("a", { href: "/order", className: "nav-link" }, "Order")
    )
  );
}

function GalleryPage() {
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
        React.createElement("p", { className: "intro-badge" }, "Gallery"),
        React.createElement("h2", null, "A closer look at the pieces people love to keep and show off"),
        React.createElement(
          "p",
          null,
          "From custom phone cases to wall art, memory pieces, and wearable designs, every Wubshell product is made to feel personal, photogenic, and worth remembering."
        )
      )
    ),
    React.createElement(
      "section",
      { className: "gallery-section reveal page-block" },
      React.createElement(
        "div",
        { className: "editorial-gallery" },
        gallerySections.map((section, index) =>
          React.createElement(
            "article",
            { className: "editorial-section", key: section.title },
            React.createElement(
              "div",
              { className: `editorial-copy tone-${section.tone}` },
              React.createElement("span", { className: "tile-number editorial-number" }, `0${index + 1}`),
              React.createElement("p", { className: "eyebrow" }, section.title),
              React.createElement("h3", null, section.items[0]),
              React.createElement("p", { className: "editorial-text" }, section.text),
              React.createElement(
                "div",
                { className: "editorial-meta" },
                React.createElement("strong", null, "Best for"),
                React.createElement("span", null, section.bestFor)
              ),
              React.createElement(
                "ul",
                { className: "pricing-list" },
                section.items.map((item) => React.createElement("li", { key: item }, item))
              )
            ),
            React.createElement(
              "div",
              { className: "editorial-images" },
              React.createElement(
                "div",
                { className: "editorial-main-image" },
                React.createElement("img", {
                  className: "editorial-photo",
                  src: section.image,
                  alt: section.title,
                })
              ),
              React.createElement(
                "div",
                { className: "editorial-detail-grid" },
                section.detailImages.map((image, detailIndex) =>
                  React.createElement(
                    "div",
                    { className: "editorial-detail-image", key: image },
                    React.createElement("img", {
                      className: "editorial-photo",
                      src: image,
                      alt: `${section.title} detail ${detailIndex + 1}`,
                    })
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      "section",
      { className: "pricing-section reveal page-block" },
      React.createElement(
        "div",
        { className: "section-heading" },
        React.createElement("p", { className: "eyebrow" }, "Made for every moment"),
        React.createElement("h2", null, "A collection of pieces for your phone, your space, and your memories"),
        React.createElement(
          "p",
          null,
          "Whether you are ordering for yourself, a gift, a room makeover, or a special event, Wubshell offers custom designs that feel soft, personal, and made to stand out."
        )
      ),
      React.createElement(
        "div",
        { className: "gallery-grid" },
        gallerySections.slice(0, 3).map((section) =>
          React.createElement(
            "article",
            { className: "gallery-card tone-card", key: section.title },
            React.createElement("img", {
              className: "gallery-photo",
              src: section.image,
              alt: section.title,
            }),
            React.createElement("p", { className: "eyebrow" }, section.title),
            React.createElement("h3", null, section.items[0]),
            React.createElement("p", null, section.text)
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
        React.createElement("p", { className: "eyebrow" }, "Ready to order"),
        React.createElement("h2", null, "Seen enough? Move to the custom order page"),
        React.createElement(
          "div",
          { className: "hero-actions centered-actions" },
          React.createElement("a", { href: "/order", className: "primary-button" }, "Start Your Order"),
          React.createElement("a", { href: "/", className: "secondary-button" }, "Back Home")
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
        React.createElement("p", null, "Gallery curated for custom products and brand visuals")
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

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(GalleryPage));
