function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value.toUpperCase(),
        message : document.getElementById("message").value
    }

    emailjs.send("service_aika6ob","template_uld8ype",parms).then(alert("✅ Email Sent Successfully!"))

}

// ========== DARK/LIGHT MODE TOGGLE ==========
document.addEventListener("DOMContentLoaded", () => {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  // Load saved mode from localStorage
  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    body.classList.add(savedMode);
    modeToggle.textContent = savedMode === "dark-mode" ? "Light Mode" : "Dark Mode";
  } else {
    // Default is dark mode
    body.classList.add("dark-mode");
    modeToggle.textContent = "Light Mode";
  }

  // Button click listener
  modeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.replace("dark-mode", "light-mode");
      modeToggle.textContent = "Dark Mode";
      localStorage.setItem("mode", "light-mode");
    } else {
      body.classList.replace("light-mode", "dark-mode");
      modeToggle.textContent = "Light Mode";
      localStorage.setItem("mode", "dark-mode");
    }
  });
});
