const form = document.getElementById("greetingForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const teacherName = document.getElementById("teacherName").value;
    const studentName = document.getElementById("studentName").value;
    const language = document.getElementById("language").value;
    const feeling = document.getElementById("feeling").value;
    const photoInput = document.getElementById("photo");

    if (photoInput.files.length > 0) {
      const reader = new FileReader();

      reader.onload = function () {
        localStorage.setItem("wishoraPhoto", reader.result);
        saveGreeting();
      };

      reader.readAsDataURL(photoInput.files[0]);
    } else {
      localStorage.removeItem("wishoraPhoto");
      saveGreeting();
    }

    function saveGreeting() {
      localStorage.setItem("teacherName", teacherName);
      localStorage.setItem("studentName", studentName);
      localStorage.setItem("language", language);
      localStorage.setItem("feeling", feeling);

      window.location.href = "preview.html";
    }
  });
}