"use strict";
// Utility function to toggle the visibility of a section
const toggleVisibility = (section) => {
    if (section.style.display === "none") {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
};
// Personal Information
const togglePersonalInfoButton = document.getElementById("toggle-personal-info-btn");
const personalInfoSection = document.getElementById("personal-info-section");
togglePersonalInfoButton.addEventListener("click", () => {
    toggleVisibility(personalInfoSection);
});
// Education
const toggleEducationButton = document.getElementById("toggle-education-btn");
const educationSection = document.getElementById("education-section");
toggleEducationButton.addEventListener("click", () => {
    toggleVisibility(educationSection);
});
// Skills
const toggleSkillsButton = document.getElementById("toggle-skills-btn");
const skillsSection = document.getElementById("skills-section");
toggleSkillsButton.addEventListener("click", () => {
    toggleVisibility(skillsSection);
});
// Work Experience
const toggleWorkExperienceButton = document.getElementById("toggle-work-experience-btn");
const workExperienceSection = document.getElementById("work-experience-section");
toggleWorkExperienceButton.addEventListener("click", () => {
    toggleVisibility(workExperienceSection);
});
