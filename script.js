let teacherName = "Your Teacher";
let studentName = "Your Name";
let teacherPhoto = "";
let personalMessage = "";

function saveDetails() {
  teacherName =
    document.getElementById("teacherName").value || "Your Teacher";

  studentName =
    document.getElementById("studentName").value || "Your Name";

  personalMessage =
    document.getElementById("personalMessage").value ||
    "Thank you for everything you have taught me.";

  localStorage.setItem("teacherName", teacherName);
  localStorage.setItem("studentName", studentName);
  localStorage.setItem("personalMessage", personalMessage);
}

function loadDetails() {
  teacherName =
    localStorage.getItem("teacherName") || "Your Teacher";

  studentName =
    localStorage.getItem("studentName") || "Your Name";

  personalMessage =
    localStorage.getItem("personalMessage") ||
    "Thank you for everything you have taught me.";
}

function showPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById("page" + pageNumber);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateText() {
  const teacher =
    document.getElementById("teacherName")?.value || "Your Teacher";

  const student =
    document.getElementById("studentName")?.value || "Your Name";

  const message =
    document.getElementById("personalMessage")?.value ||
    "Your heartfelt message will appear here.";

  document.querySelectorAll(".teacher-name").forEach(element => {
    element.textContent = teacher;
  });

  document.querySelectorAll(".student-name").forEach(element => {
    element.textContent = student;
  });

  document.querySelectorAll(".personal-message").forEach(element => {
    element.textContent = message;
  });
}

function handlePhoto(event) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    teacherPhoto = e.target.result;

    document.querySelectorAll(".teacher-photo").forEach(image => {
      image.src = teacherPhoto;
    });
  };

  reader.readAsDataURL(file);
}

function startExperience() {
  saveDetails();
  updateText();
  showPage(1);
}

function goNext(pageNumber) {
  saveDetails();
  updateText();
  showPage(pageNumber);
}

function buyNow() {
  alert("₹49 payment will be connected here next. ❤️");
}

document.addEventListener("DOMContentLoaded", function() {
  loadDetails();
});function createPetals() {
  const symbols = ["✦", "✧", "·", "❀"];

  for (let i = 0; i < 12; i++) {
    const petal = document.createElement("div");

    petal.className = "petal";
    petal.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDelay = Math.random() * 7 + "s";
    petal.style.fontSize = 10 + Math.random() * 10 + "px";

    document.body.appendChild(petal);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  createPetals();
});let musicPlaying = false;
let music = new Audio("music.mp3");

music.loop = true;
music.volume = 0.35;

function toggleMusic() {
  const button = document.getElementById("musicBtn");

  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
    button.textContent = "🎵 Music On";
  } else {
    music.pause();
    musicPlaying = false;
    button.textContent = "🎵 Music Off";
  }
}