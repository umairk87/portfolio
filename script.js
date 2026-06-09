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
