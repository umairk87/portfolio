// Cursor glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat-box");

  const msg = input.value;
  if (!msg) return;

  chat.innerHTML += `<div><b>You:</b> ${msg}</div>`;

  let reply = "I am Umair's portfolio AI.";

  if (msg.toLowerCase().includes("unity")) {
    reply = "Umair is a Unity developer specializing in VR, multiplayer & AI systems.";
  } 
  else if (msg.toLowerCase().includes("project")) {
    reply = "Check the Projects section to see VR CAD, Ludo, and AI Tutor apps.";
  }

  chat.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
  input.value = "";
}

gsap.from(".hero h1", {
  duration: 1,
  y: -50,
  opacity: 0
});

gsap.from(".hero p", {
  duration: 1,
  delay: 0.3,
  y: 30,
  opacity: 0
});

gsap.utils.toArray(".project-card").forEach(card => {
  gsap.from(card, {
    scrollTrigger: card,
    opacity: 0,
    y: 50,
    duration: 0.8
  });
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(draw);
}

draw();

function animateCount(el, target) {
  let count = 0;
  let step = target / 100;

  let interval = setInterval(() => {
    count += step;
    if (count >= target) {
      el.innerText = target + "+";
      clearInterval(interval);
    } else {
      el.innerText = Math.floor(count) + "+";
    }
  }, 20);
}

window.addEventListener("load", () => {
  const stats = document.querySelectorAll(".stat-card h3");

  animateCount(stats[0], 12);
  animateCount(stats[1], 5);
  animateCount(stats[2], 20);
});

function openModal(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modalBody");

  let content = "";

  if (type === "vr") {
    content = "<h2>VR CAD System</h2><p>Real-time VR engineering review system using Photon Fusion.</p>";
  }

  if (type === "ludo") {
    content = "<h2>Multiplayer Ludo</h2><p>Online multiplayer game built in Unity with real-time sync.</p>";
  }

  if (type === "ai") {
    content = "<h2>AI Tutor App</h2><p>AI-powered learning assistant built with Unity + GPT API.</p>";
  }

  body.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
}
