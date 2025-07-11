'use strict';

const profiles = [
  {
    pictureUrl: "img/adna_mask.jpg",
    name: "Edna Mask",
    jobTitle: "Software Engineer",
    description: "Experienced in developing scalable web applications.",
  },
  {
    pictureUrl: "img/peter_cat.jpg",
    name: "Peter Cat",
    jobTitle: "Product Manager",
    description: "Guides product vision, strategy, and success.",
  },
  {
    pictureUrl: "img/grace_picasso.jpg",
    name: "Grace Picasso",
    jobTitle: "UX Designer",
    description: "Passionate about creating user-friendly designs.",
  },
];

const container = document.getElementById('profile-cards-container');
const template = document.getElementById('profile-card-template');

profiles.forEach(profile => {
  
  const clone = template.content.cloneNode(true);

  clone.querySelector('img').src = profile.pictureUrl;
  clone.querySelector('img').alt = profile.name;
  clone.querySelector('.profile-title').textContent = profile.name;
  clone.querySelector('.profile-job-title').textContent = profile.jobTitle;
  clone.querySelector('.profile-description').textContent = profile.description;

  container.appendChild(clone);
});
