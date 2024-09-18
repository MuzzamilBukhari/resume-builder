// Get form elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const workExperienceInput = document.getElementById(
  "work-experience"
) as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Modal elements
const modal = document.getElementById("resume-modal") as HTMLElement;
const closeModalBtn = document.querySelector(".close-btn") as HTMLElement;

// Get display elements for the generated resume
const displayName = document.getElementById("display-name") as HTMLElement;
const displayEmail = document.getElementById("display-email") as HTMLElement;
const educationContent = document.getElementById(
  "education-content"
) as HTMLElement;
const workExperienceContent = document.getElementById(
  "work-experience-content"
) as HTMLElement;
const skillsList = document.getElementById("skills-list") as HTMLElement;

// Handle form submission and resume generation
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get values from the form
  const name = nameInput.value;
  const email = emailInput.value;
  const education = educationInput.value;
  const workExperience = workExperienceInput.value;
  const skills = skillsInput.value.split(",").map((skill) => skill.trim());

  // Populate the modal with the resume data
  displayName.textContent = name;
  displayEmail.textContent = email;
  educationContent.textContent = education;
  workExperienceContent.textContent = workExperience;

  // Clear the previous skills list and add new skills
  skillsList.innerHTML = ""; // Clear previous skills
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Show the modal
  modal.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Event listeners to detect changes in the contenteditable fields
const resumeFields = document.querySelectorAll('[contenteditable="true"]');

resumeFields.forEach((field) => {
  field.addEventListener("input", (event) => {
    const target = event.target as HTMLElement;

    // Save changes immediately when user edits the content
    if (target.id === "display-name") {
      nameInput.value = target.textContent || ""; // Update the form field
    }
    if (target.id === "display-email") {
      emailInput.value = target.textContent || "";
    }
    if (target.id === "education-content") {
      educationInput.value = target.textContent || "";
    }
    if (target.id === "work-experience-content") {
      workExperienceInput.value = target.textContent || "";
    }
  });
});
