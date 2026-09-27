const projects = {
  employee: {
    tag: "TYPESCRIPT · BACKEND",
    title: "Employee Management System",
    text: "A backend-focused employee management application with structured APIs, database operations and application-level business logic. The public repository contains the personal project version.",
    stack: ["TypeScript", "Node.js", "MongoDB", "REST API"]
  },
  voting: {
    tag: "JAVA · SPRING BOOT",
    title: "Online Voting Management",
    text: "A Spring Boot REST API covering voter, candidate, election and voting modules. The repository documents a three-role setup, one-time voting logic and an election lifecycle.",
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Postman"]
  },
  food: {
    tag: "JAVA · WEB",
    title: "Food Delivery Application",
    text: "A Java web application with authentication, restaurant and menu browsing, cart management, checkout and order placement using JDBC and MySQL.",
    stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL"]
  },
  blinkit: {
    tag: "DATA · DASHBOARD",
    title: "Blinkit Sales Dashboard",
    text: "A grocery sales analysis dashboard built with Power BI, DAX and Excel.",
    stack: ["Power BI", "DAX", "Excel"]
  },
  tor: {
    tag: "PYTHON · MACHINE LEARNING",
    title: "Tor Traffic Classification",
    text: "A machine-learning project studying altered Tor traffic and its impact on onion-service classification, including work with AdaBoost.",
    stack: ["Python", "Machine Learning", "AdaBoost"]
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalTag = document.getElementById("modalTag");
const modalText = document.getElementById("modalText");
const modalStack = document.getElementById("modalStack");

document.querySelectorAll(".details").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = projects[btn.dataset.project];
    modalTag.textContent = p.tag;
    modalTitle.textContent = p.title;
    modalText.textContent = p.text;
    modalStack.innerHTML = p.stack.map(s => `<span>${s}</span>`).join("");
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

document.querySelectorAll(".filter").forEach(filter => {
  filter.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const value = filter.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.classList.toggle("hide", value !== "all" && !card.dataset.tags.split(" ").includes(value));
    });
  });
});

document.getElementById("copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("bharathbalivada4@gmail.com");
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1600);
  } catch {}
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeBtn").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => {
  document.getElementById("nav").classList.remove("open");
}));
