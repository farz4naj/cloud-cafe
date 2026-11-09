// CLOUD CAFE SERVICES

const services = [
  {
    title: "Fresh Coffee",
    text: "Enjoy freshly brewed coffee made with quality beans every day."
  },
  {
    title: "Homemade Desserts",
    text: "Treat yourself to delicious cakes and sweet treats made with care."
  },
  {
    title: "Cozy Atmosphere",
    text: "Relax in a warm and welcoming space perfect for any occasion."
  },
  {
    title: "Light Meals",
    text: "Enjoy tasty snacks and light meals whenever hunger strikes."
  },
  {
    title: "Friendly Service",
    text: "Our welcoming team is here to make every visit special."
  }
];


// DISPLAY SERVICE CARDS

const servicesGrid = document.querySelector("#servicesGrid");

if (servicesGrid) {
  services.forEach((service, index) => {
    const card = document.createElement("article");

    card.className = "service-card";

    const number = String(index + 1).padStart(2, "0");

    card.innerHTML = `
      <span class="service-number">${number}</span>
      <h3>${service.title}</h3>
      <p>${service.text}</p>
    `;

    servicesGrid.appendChild(card);
  });
}


// MOBILE NAVIGATION

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after clicking a navigation link

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}


// CONTACT FORM

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const customerName = document.querySelector("#name").value.trim();

    formMessage.textContent =
      `Thank you, ${customerName}! Your message is ready to be connected to our contact service.`;

    contactForm.reset();
  });
}


// AUTOMATIC FOOTER YEAR

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}