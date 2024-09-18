// Utility function to toggle the visibility of a section
const toggleVisibility = (section: HTMLElement) => {
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
};

// Personal Information
const togglePersonalInfoButton = document.getElementById(
  "toggle-personal-info-btn"
) as HTMLButtonElement;
const personalInfoSection = document.getElementById(
  "personal-info-section"
) as HTMLElement;

togglePersonalInfoButton.addEventListener("click", () => {
  toggleVisibility(personalInfoSection);
});

// Education
const toggleEducationButton = document.getElementById(
  "toggle-education-btn"
) as HTMLButtonElement;
const educationSection = document.getElementById(
  "education-section"
) as HTMLElement;

toggleEducationButton.addEventListener("click", () => {
  toggleVisibility(educationSection);
});

// Skills
const toggleSkillsButton = document.getElementById(
  "toggle-skills-btn"
) as HTMLButtonElement;
const skillsSection = document.getElementById("skills-section") as HTMLElement;

toggleSkillsButton.addEventListener("click", () => {
  toggleVisibility(skillsSection);
});

// Work Experience
const toggleWorkExperienceButton = document.getElementById(
  "toggle-work-experience-btn"
) as HTMLButtonElement;
const workExperienceSection = document.getElementById(
  "work-experience-section"
) as HTMLElement;

toggleWorkExperienceButton.addEventListener("click", () => {
  toggleVisibility(workExperienceSection);
});
