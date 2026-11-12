const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

const form = document.querySelector("#contact-form");
const fields = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  course: document.querySelector("#course")
};
const status = document.querySelector("#form-status");

function showError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  error.textContent = message;
  field.setAttribute("aria-invalid", message ? "true" : "false");
}

function validate() {
  let valid = true;
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const course = fields.course.value;

  showError(fields.name, name.length < 2 ? "Please enter your name (at least 2 characters)." : "");
  showError(fields.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Enter a valid email address.");
  showError(fields.course, course ? "" : "Please choose a course.");

  Object.values(fields).forEach((field) => {
    if (field.getAttribute("aria-invalid") === "true") valid = false;
  });
  return valid;
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", () => {
    status.textContent = "";
    if (field.getAttribute("aria-invalid") === "true") validate();
  });
  field.addEventListener("change", () => {
    status.textContent = "";
    if (field.getAttribute("aria-invalid") === "true") validate();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";
  if (!validate()) {
    form.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  // Front-end demo only: connect this form to a backend or form service to receive enquiries.
  status.textContent = "Thanks! Your details look good. This demo form is ready to connect to a backend.";
  form.reset();
  Object.values(fields).forEach((field) => showError(field, ""));
});
