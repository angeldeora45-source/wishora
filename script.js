const form = document.getElementById("greetingForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const teacherName = document.getElementById("teacherName").value.trim();
    const studentName = document.getElementById("studentName").value.trim();
    const language = document.getElementById("language").value;
    const feeling = document.getElementById("feeling").value;
    const photoInput = document.getElementById("photo");

    if (!teacherName || !studentName) {
      alert("Please enter both names. 🌸");
      return;
    }

    function saveGreeting(photoData) {
      localStorage.setItem("teacherName", teacherName);
      localStorage.setItem("studentName", studentName);
      localStorage.setItem("language", language);
      localStorage.setItem("feeling", feeling);

      if (photoData) {
        localStorage.setItem("wishoraPhoto", photoData);
      } else {
        localStorage.removeItem("wishoraPhoto");
      }

      window.location.href = "preview.html";
    }

    if (photoInput.files.length > 0) {
      const file = photoInput.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please choose an image file.");
        return;
      }

      const reader = new FileReader();

      reader.onload = function () {
        saveGreeting(reader.result);
      };

      reader.onerror = function () {
        alert("Photo could not be loaded. Please try another photo.");
      };

      reader.readAsDataURL(file);
    } else {
      saveGreeting(null);
    }
  });
}