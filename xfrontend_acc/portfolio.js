const SVG_FALLBACK_ICONS = {
  'fa-envelope': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  'fa-map-marker-alt': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  'fa-github': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-0.125em;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',
  'fa-linkedin': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-0.125em;"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"/></svg>',
  'fa-twitter': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-0.125em;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
  'fa-dribbble': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-0.125em;"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.948 11.031c-.34-.055-2.784-.429-5.545.184 1.253 3.42 1.777 6.471 1.888 7.164 2.282-1.921 3.657-4.767 3.657-7.348zm-5.46 8.528c-.126-.816-.677-3.896-1.957-7.33-3.69 1.206-7.07 1.157-7.464 1.148a10.021 10.021 0 0 0 6.04 6.782c1.297-.132 2.474-.33 3.381-.6zm-11.45-3.056c.143-.004 3.738-.073 7.375-1.398.423-1.026.814-2.079 1.163-3.136-4.606-1.428-9.085-.357-9.529-.247a10.05 10.05 0 0 0 1.001 4.781zm-3.018-6.503c.47-.116 4.385-1.042 8.799.309.288-.636.56-1.282.809-1.933C7.202 6.577 3.313 7.893 2.87 8.048a10.007 10.007 0 0 0-.45 3.952zm11.96-6.425c-2.316.002-4.484.774-6.223 2.076.402-.14 3.774-1.284 7.625.26.82-1.002 1.488-1.748 1.696-1.972A9.957 9.957 0 0 0 14.02 3.575zm3.626 2.766c-.237.257-.962 1.056-1.847 2.13 2.585-.516 4.885-.162 5.21-.108a10.023 10.023 0 0 0-3.363-2.022z"/></svg>',
  'fa-file-download': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',
  'fa-external-link-alt': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  'fa-paper-plane': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
  'fa-user-circle': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  'fa-code': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  'fa-laptop-code': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
  'fa-magic': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
  'fa-concierge-bell': '<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-0.125em;"><path d="M2 18h20"></path><path d="M20 18a8 8 0 1 0-16 0"></path><path d="M12 4v6"></path><path d="M10 4h4"></path></svg>'
};

function buildIconTag(className) {
  return `<i class="${className}"></i>`;
}

/**
 * Icon rendering normalizer function
 * Fixes FontAwesome, DevIcons, SVGs, and generic icon name rendering issues.
 */
function renderIconHtml(iconInput, defaultIconClass = 'fas fa-cog') {
  if (!iconInput || typeof iconInput !== 'string') {
    return buildIconTag(defaultIconClass);
  }
  const trimmed = iconInput.trim();
  if (trimmed.startsWith('<svg') || trimmed.startsWith('<img')) {
    return trimmed;
  }

  if (trimmed.includes(' ') || trimmed.startsWith('devicon-')) {
    return buildIconTag(trimmed);
  }

  if (trimmed.startsWith('fa-')) {
    const brands = ['github', 'linkedin', 'twitter', 'dribbble', 'facebook', 'instagram', 'youtube', 'react', 'node', 'python', 'js', 'html5', 'css3', 'vue', 'angular', 'figma', 'spotify', 'twitch', 'discord'];
    const nameWithoutPrefix = trimmed.replace(/^fa-/, '');
    if (brands.includes(nameWithoutPrefix)) {
      return buildIconTag(`fab ${trimmed}`);
    }
    return buildIconTag(`fas ${trimmed}`);
  }

  const brandKeywords = ['github', 'linkedin', 'twitter', 'dribbble', 'facebook', 'instagram', 'youtube', 'react', 'vue', 'angular', 'figma', 'spotify', 'twitch', 'discord'];
  if (brandKeywords.includes(trimmed.toLowerCase())) {
    return buildIconTag(`fab fa-${trimmed}`);
  }

  return buildIconTag(`fas fa-${trimmed}`);
}

/**
 * Auto Skill Icon Lookup
 */
function getSkillIcon(name) {
  if (!name) return '';
  const lower = name.toLowerCase();
  if (lower.includes('js') || lower.includes('javascript')) return '<i class="devicon-javascript-plain colored"></i>';
  if (lower.includes('typescript') || lower.includes('ts')) return '<i class="devicon-typescript-plain colored"></i>';
  if (lower.includes('react')) return '<i class="devicon-react-original colored"></i>';
  if (lower.includes('css')) return '<i class="devicon-css3-plain colored"></i>';
  if (lower.includes('html')) return '<i class="devicon-html5-plain colored"></i>';
  if (lower.includes('node')) return '<i class="devicon-nodejs-plain colored"></i>';
  if (lower.includes('postgres') || lower.includes('sql')) return '<i class="devicon-postgresql-plain colored"></i>';
  if (lower.includes('git') || lower.includes('github')) return '<i class="devicon-git-plain colored"></i>';
  if (lower.includes('python')) return '<i class="devicon-python-plain colored"></i>';
  if (lower.includes('figma')) return '<i class="devicon-figma-plain colored"></i>';
  if (lower.includes('docker')) return '<i class="devicon-docker-plain colored"></i>';
  if (lower.includes('aws')) return '<i class="devicon-amazonwebservices-original colored"></i>';
  if (lower.includes('vue')) return '<i class="devicon-vuejs-plain colored"></i>';
  if (lower.includes('angular')) return '<i class="devicon-angularjs-plain colored"></i>';
  return '<i class="fas fa-check-circle" style="color:var(--pf-primary);"></i>';
}

/**
 * Portfolio Compiler
 * Generates the HTML string representing the user's published website.
 */
function compilePortfolio(state) {
  const profile = state.profile || {};
  const appearance = state.appearance || {};
  const settings = state.settings || {};
  const socials = state.socials || {};
  const isMinimalist = state.template === 'minimalist';

  // Font loaders for Google Fonts
  let fontLink = '';
  if (state.template === 'developer') {
    fontLink = '<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet">';
  } else if (state.template === 'designer') {
    fontLink = '<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">';
  } else if (state.template === 'cyber-tech') {
    fontLink = '<link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">';
  } else if (state.template === 'executive-pro') {
    fontLink = '<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">';
  } else {
    fontLink = '<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">';
  }

  // Generate Projects HTML
  let projectsHtml = '';
  if (state.projects && state.projects.length > 0) {
    state.projects.forEach(p => {
      const tags = (p.tech || '').split(',').map(t => `<span class="pf-project-tag">${t.trim()}</span>`).join('');
      projectsHtml += `
        <div class="pf-card pf-project-card" data-tags="${p.tech.toLowerCase()}">
          ${p.cover ? `<img src="${p.cover}" alt="${p.title}" class="pf-project-img" />` : ''}
          <div class="pf-project-info">
            <h3 class="pf-project-title">${p.title}</h3>
            <p class="pf-project-desc">${p.desc}</p>
            <div class="pf-project-tags">${tags}</div>
            <div class="pf-project-links">
              ${p.liveLink ? `<a href="${p.liveLink}" target="_blank">${renderIconHtml('fas fa-external-link-alt')} Live Demo</a>` : ''}
              ${p.githubLink ? `<a href="${p.githubLink}" target="_blank">${renderIconHtml('fab fa-github')} Code</a>` : ''}
            </div>
          </div>
        </div>
      `;
    });
  } else {
    projectsHtml = '<p class="pf-text-muted">No projects added yet.</p>';
  }

  // Generate Experience Timeline
  let expHtml = '';
  if (state.experience && state.experience.length > 0 && !settings.hideExperience) {
    state.experience.forEach(e => {
      expHtml += `
        <div class="pf-timeline-item">
          <div class="pf-timeline-date">${e.duration}</div>
          <h3 class="pf-timeline-title">${e.role}</h3>
          <div class="pf-timeline-company">${e.company} ${e.current ? '<span class="pf-hero-badge" style="margin-left: 10px; padding: 2px 8px; font-size: 0.7rem;"><span class="availability-dot"></span>Active</span>' : ''}</div>
          <p class="pf-timeline-desc">${e.desc}</p>
        </div>
      `;
    });
  }

  // Generate Education Timeline
  let eduHtml = '';
  if (state.education && state.education.length > 0) {
    state.education.forEach(ed => {
      eduHtml += `
        <div class="pf-timeline-item">
          <div class="pf-timeline-date">${ed.startYear} - ${ed.endYear}</div>
          <h3 class="pf-timeline-title">${ed.degree}</h3>
          <div class="pf-timeline-company">${ed.institution}</div>
          <p class="pf-timeline-desc">${ed.desc}</p>
        </div>
      `;
    });
  }

  // Generate Skills grouped
  const skillsList = state.skills || [];
  const frontendSkills = skillsList.filter(s => s.group === 'Frontend');
  const backendSkills = skillsList.filter(s => s.group === 'Backend');
  const toolsSkills = skillsList.filter(s => s.group === 'Tools');
  const softSkills = skillsList.filter(s => s.group === 'Soft Skills');

  const renderSkillGroup = (title, items) => {
    if (items.length === 0) return '';
    const itemsHtml = items.map(s => {
      const iconMarkup = s.icon ? renderIconHtml(s.icon) : getSkillIcon(s.name);
      return `
      <div class="pf-skill-badge">
        <span class="pf-skill-icon">${iconMarkup}</span>
        <span>${s.name}</span>
        <span style="font-size:0.75rem; color: var(--pf-primary)">${s.level}%</span>
      </div>
    `;
    }).join('');
    return `
      <div class="pf-skills-group">
        <h4 class="pf-skills-group-title">${title}</h4>
        <div class="pf-skills-grid">${itemsHtml}</div>
      </div>
    `;
  };

  const skillsHtml = `
    ${renderSkillGroup('Frontend Dev', frontendSkills)}
    ${renderSkillGroup('Backend & Database', backendSkills)}
    ${renderSkillGroup('Tools & Platforms', toolsSkills)}
    ${renderSkillGroup('Soft Skills', softSkills)}
  `;

  // Generate Services
  let servicesHtml = '';
  if (state.services && state.services.length > 0) {
    state.services.forEach(s => {
      servicesHtml += `
        <div class="pf-card pf-service-card">
          <div class="pf-service-icon">${renderIconHtml(s.icon, 'fa-concierge-bell')}</div>
          <h3 class="pf-service-title">${s.name}</h3>
          <p class="pf-service-desc">${s.desc}</p>
          <div class="pf-service-price">${s.price}</div>
        </div>
      `;
    });
  }

  // Generate Testimonials Carousel items
  let testimonialsHtml = '';
  if (state.testimonials && state.testimonials.length > 0) {
    state.testimonials.forEach((t, i) => {
      testimonialsHtml += `
        <div class="pf-testimonial-card testimonial-slide ${i === 0 ? 'active' : ''}" style="display: ${i === 0 ? 'block' : 'none'}">
          <p class="pf-testimonial-text">"${t.quote}"</p>
          ${t.photo ? `<img src="${t.photo}" class="pf-testimonial-avatar" alt="${t.clientName}" />` : ''}
          <div class="pf-testimonial-author">${t.clientName}</div>
          <div class="pf-testimonial-role">${t.role}, ${t.company}</div>
          <div class="rating-stars" style="color: #f59e0b; margin-top: 8px;">
            ${'<i class="fas fa-star"></i>'.repeat(t.rating)}
          </div>
        </div>
      `;
    });
  }

  // Generate Blog posts CMS list
  let blogHtml = '';
  if (state.blog && state.blog.length > 0 && !settings.hideBlog) {
    state.blog.forEach((b, idx) => {
      blogHtml += `
        <div class="pf-card pf-blog-card" onclick="openBlogModal(${idx})">
          ${b.cover ? `<img src="${b.cover}" alt="${b.title}" class="pf-blog-img" />` : ''}
          <div class="pf-blog-info">
            <div class="pf-blog-date">${b.date}</div>
            <h3 class="pf-blog-title">${b.title}</h3>
            <p class="pf-project-desc">${b.desc}</p>
            <span style="color: var(--pf-primary); font-size: 0.85rem; font-weight: 600;">Read Article <i class="fas fa-arrow-right"></i></span>
          </div>
        </div>
      `;
    });
  }

  // Domain SSL setup mockup
  const platformBacklink = `<div class="pf-footer-platform">Built with <a href="#" target="_blank"><i class="fas fa-magic"></i> PortfolioBuilder</a></div>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} | ${profile.profession}</title>
  
  <!-- FontAwesome & DevIcons for symbols -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  
  ${fontLink}
  
  <!-- Embedded Stylesheet links -->
  ${state._embeddedCss ? `<style>${state._embeddedCss}</style>` : ''}
  <link rel="stylesheet" href="portfolio.css">
  
  <style>
    :root {
      --pf-primary: ${appearance.primary};
      --pf-accent: ${appearance.accent};
      --pf-bg: ${appearance.bg};
      --pf-text: ${appearance.text};
      --pf-bg-card: ${appearance.mode === 'dark' ? (isMinimalist ? '#ffffff' : '#1e293b') : '#ffffff'};
      --pf-text-muted: ${appearance.mode === 'dark' ? '#94a3b8' : '#64748b'};
      --pf-border: ${appearance.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'};
      --pf-btn-text: ${appearance.palette === 'monochrome' ? '#020617' : '#ffffff'};
      --pf-font: ${appearance.font};
      --pf-radius: ${appearance.radius};
      --pf-spacing: ${appearance.spacing};
    }
  </style>
</head>
<body class="portfolio-body pf-template-${state.template}">

  <!-- Header Nav -->
  <nav class="pf-nav">
    <div class="portfolio-container" style="display:flex; width:100%; justify-content:space-between; align-items:center;">
      <a href="#" class="pf-logo">
        <i class="fas fa-user-circle"></i> ${profile.name}
      </a>
      <ul class="pf-nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        ${expHtml || eduHtml ? '<li><a href="#timeline">Timeline</a></li>' : ''}
        ${servicesHtml ? '<li><a href="#services">Services</a></li>' : ''}
        ${blogHtml ? '<li><a href="#blog">Blog</a></li>' : ''}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <div class="portfolio-container">
    
    <!-- Hero Block -->
    <section class="pf-hero" id="about">
      <div class="pf-hero-content">
        ${profile.availability === 'available' ? `
          <div class="pf-hero-badge">
            <span class="availability-dot"></span> Open for Freelance & Projects
          </div>
        ` : ''}
        <h1 class="pf-hero-title">I'm <span style="color: var(--pf-primary)">${profile.name}</span></h1>
        <h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 15px;">${profile.profession}</h2>
        <p class="pf-hero-tagline">${profile.tagline}</p>
        <p style="margin-bottom: 30px; font-size: 1rem; color: var(--pf-text-muted);">${profile.bio}</p>
        <div class="pf-hero-ctas">
          <a href="#contact" class="pf-btn pf-btn-primary">Contact Me</a>
          <a href="#projects" class="pf-btn pf-btn-secondary">View Work</a>
          ${profile.resumeName ? (profile.resumeData ? `<a href="${profile.resumeData}" download="${profile.resumeName}" class="pf-btn pf-btn-secondary"><i class="fas fa-file-download"></i> CV</a>` : `<a href="#" class="pf-btn pf-btn-secondary" onclick="alert('Downloading resume mockup: ${profile.resumeName}')"><i class="fas fa-file-download"></i> CV</a>`) : ''}
        </div>
      </div>
      ${profile.photo ? `
        <div class="pf-hero-img-container">
          <img src="${profile.photo}" alt="${profile.name}" class="pf-hero-img" />
        </div>
      ` : ''}
    </section>

    <!-- Skills Group Section -->
    ${state.skills && state.skills.length > 0 ? `
      <section class="pf-section" id="skills">
        <h2 class="pf-section-title">Skills & Technologies</h2>
        <div style="margin-top: 30px;">
          ${skillsHtml}
        </div>
      </section>
    ` : ''}

    <!-- Projects Grid -->
    <section class="pf-section" id="projects">
      <h2 class="pf-section-title">Featured Projects</h2>
      <p class="pf-section-subtitle">A collection of technical solutions and creative projects I've built.</p>
      
      <!-- Mini client side filter -->
      <div style="margin-bottom: 30px; display: flex; gap: 10px; flex-wrap: wrap;">
        <button class="pf-btn pf-btn-secondary active filter-btn" onclick="filterProjects('all')" style="padding: 6px 14px; font-size: 0.8rem;">All Projects</button>
        <button class="pf-btn pf-btn-secondary filter-btn" onclick="filterProjects('react')" style="padding: 6px 14px; font-size: 0.8rem;">React</button>
        <button class="pf-btn pf-btn-secondary filter-btn" onclick="filterProjects('css')" style="padding: 6px 14px; font-size: 0.8rem;">CSS / Web</button>
        <button class="pf-btn pf-btn-secondary filter-btn" onclick="filterProjects('node')" style="padding: 6px 14px; font-size: 0.8rem;">Node.js</button>
      </div>

      <div class="pf-grid" id="pf-projects-grid">
        ${projectsHtml}
      </div>
    </section>

    <!-- Timelines -->
    ${(expHtml && !settings.hideExperience) || eduHtml ? `
      <section class="pf-section" id="timeline">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 20px;">
          
          ${expHtml && !settings.hideExperience ? `
            <div>
              <h2 class="pf-section-title" style="margin-bottom: 35px;">Work Experience</h2>
              <div class="pf-timeline">
                ${expHtml}
              </div>
            </div>
          ` : ''}

          ${eduHtml ? `
            <div>
              <h2 class="pf-section-title" style="margin-bottom: 35px;">Education</h2>
              <div class="pf-timeline">
                ${eduHtml}
              </div>
            </div>
          ` : ''}

        </div>
      </section>
    ` : ''}

    <!-- Services Section -->
    ${servicesHtml ? `
      <section class="pf-section" id="services">
        <h2 class="pf-section-title">Services Offered</h2>
        <p class="pf-section-subtitle">Services I can provide as a freelancer or contract developer.</p>
        <div class="pf-grid">
          ${servicesHtml}
        </div>
      </section>
    ` : ''}

    <!-- Testimonials Carousel -->
    ${testimonialsHtml ? `
      <section class="pf-section" id="testimonials">
        <h2 class="pf-section-title" style="display:block; text-align:center; width:100%;">What Clients Say</h2>
        <div class="pf-testimonials-wrapper">
          <div style="position: relative;">
            ${testimonialsHtml}
            <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
              <button onclick="changeTestimonial(-1)" class="pf-btn pf-btn-secondary" style="padding: 8px 16px;"><i class="fas fa-chevron-left"></i></button>
              <button onclick="changeTestimonial(1)" class="pf-btn pf-btn-secondary" style="padding: 8px 16px;"><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>
    ` : ''}

    <!-- Blog Posts mini CMS -->
    ${blogHtml && !settings.hideBlog ? `
      <section class="pf-section" id="blog">
        <h2 class="pf-section-title">Articles & Insights</h2>
        <p class="pf-section-subtitle">Read my latest publications about design systems, web development, and coding practices.</p>
        <div class="pf-grid">
          ${blogHtml}
        </div>
      </section>
    ` : ''}

    <!-- Contact Form Section -->
    <section class="pf-section" id="contact" style="border-bottom:none;">
      <h2 class="pf-section-title">Get In Touch</h2>
      <p class="pf-section-subtitle">Let's talk about contract work, project opportunities, or say hello.</p>
      
      <div class="pf-contact-row">
        <div class="pf-contact-info">
          <div class="pf-contact-info-item">
            <div class="pf-contact-icon">${renderIconHtml('fas fa-envelope')}</div>
            <div>
              <div style="font-weight:700;">Email</div>
              <div class="pf-text-muted">${state.contactEmail || 'contact@portfolio.com'}</div>
            </div>
          </div>
          <div class="pf-contact-info-item">
            <div class="pf-contact-icon">${renderIconHtml('fas fa-map-marker-alt')}</div>
            <div>
              <div style="font-weight:700;">Location</div>
              <div class="pf-text-muted">${profile.location || 'Remote'}</div>
            </div>
          </div>
          ${socials.github || socials.linkedin || socials.twitter || socials.dribbble ? `
            <div class="pf-contact-info-item" style="align-items: flex-start; flex-direction:column; margin-top:30px;">
              <div style="font-weight:700; margin-bottom: 12px;">Follow Me</div>
              <div style="display:flex; gap: 12px;">
                ${socials.github ? `<a href="${socials.github}" target="_blank" class="pf-btn pf-btn-secondary" style="padding:8px 12px;">${renderIconHtml('fab fa-github')}</a>` : ''}
                ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank" class="pf-btn pf-btn-secondary" style="padding:8px 12px;">${renderIconHtml('fab fa-linkedin')}</a>` : ''}
                ${socials.twitter ? `<a href="${socials.twitter}" target="_blank" class="pf-btn pf-btn-secondary" style="padding:8px 12px;">${renderIconHtml('fab fa-twitter')}</a>` : ''}
                ${socials.dribbble ? `<a href="${socials.dribbble}" target="_blank" class="pf-btn pf-btn-secondary" style="padding:8px 12px;">${renderIconHtml('fab fa-dribbble')}</a>` : ''}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="pf-contact-form-container">
          <form id="pf-portfolio-contact-form">
            <div class="pf-form-grid">
              <div>
                <label style="font-size:0.8rem; font-weight:700; display:block; margin-bottom:6px;">Your Name</label>
                <input type="text" id="contact-name" class="pf-input" placeholder="Sarah Parker" required />
              </div>
              <div>
                <label style="font-size:0.8rem; font-weight:700; display:block; margin-bottom:6px;">Email Address</label>
                <input type="email" id="contact-email" class="pf-input" placeholder="sarah@company.com" required />
              </div>
            </div>
            <div class="pf-form-group">
              <label style="font-size:0.8rem; font-weight:700; display:block; margin-bottom:6px;">Subject</label>
              <input type="text" id="contact-subject" class="pf-input" placeholder="Project inquiry for ${profile.profession || 'you'}" required />
            </div>
            <div class="pf-form-group">
              <label style="font-size:0.8rem; font-weight:700; display:block; margin-bottom:6px;">Message</label>
              <textarea id="contact-message" class="pf-textarea" placeholder="Hi ${profile.name ? profile.name.split(' ')[0] : 'there'}, I would love to discuss a potential project with you..." required></textarea>
            </div>
            <button type="submit" class="pf-btn pf-btn-primary" style="width: 100%;">Send Message <i class="fas fa-paper-plane" style="margin-left: 8px;"></i></button>
          </form>
          <div id="contact-success-msg" style="display:none; text-align:center; color: #10b981; font-weight:700; margin-top:15px; font-size:0.95rem;">
            <i class="fas fa-check-circle"></i> Message sent successfully! It has been posted to the builder dashboard inbox.
          </div>
        </div>
      </div>
    </section>

  </div>

  <!-- Footer -->
  <footer class="pf-footer">
    <div class="portfolio-container">
      <div class="pf-footer-socials">
        ${socials.github ? `<a href="${socials.github}" target="_blank">${renderIconHtml('fab fa-github')}</a>` : ''}
        ${socials.linkedin ? `<a href="${socials.linkedin}" target="_blank">${renderIconHtml('fab fa-linkedin')}</a>` : ''}
        ${socials.twitter ? `<a href="${socials.twitter}" target="_blank">${renderIconHtml('fab fa-twitter')}</a>` : ''}
        ${socials.dribbble ? `<a href="${socials.dribbble}" target="_blank">${renderIconHtml('fab fa-dribbble')}</a>` : ''}
      </div>
      <div>&copy; ${new Date().getFullYear()} ${profile.name}. All rights reserved.</div>
      ${platformBacklink}
    </div>
  </footer>

  <!-- Blog Article Reader Modal -->
  <div class="pf-blog-reader-modal" id="blog-reader-modal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.8); backdrop-filter:blur(8px); z-index:100000; align-items:center; justify-content:center;">
    <div class="pf-card" style="width:100%; max-width:650px; max-height:85vh; display:flex; flex-direction:column; overflow:hidden; background: var(--pf-bg-card); border-color: var(--pf-border);">
      <div style="padding:20px; border-bottom:1px solid var(--pf-border); display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:700;" id="blog-modal-title">Blog Article</span>
        <button onclick="closeBlogModal()" style="font-size:1.2rem; cursor:pointer; color: var(--pf-text-muted);">&times;</button>
      </div>
      <div style="padding:30px; overflow-y:auto; flex-grow:1;" id="blog-modal-body">
        <!-- Content will be populated -->
      </div>
    </div>
  </div>

  <!-- INTERACTIVE FUNCTIONALITY SCRIPT -->
  <script>
    // Handle smooth scrolling for hash links to prevent iframe navigation issues
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    // Project tag filtering
    function filterProjects(tag) {
      // Update filter button styling
      const buttons = document.querySelectorAll('.filter-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      const cards = document.querySelectorAll('.pf-project-card');
      cards.forEach(card => {
        const itemTags = card.getAttribute('data-tags');
        if (tag === 'all' || itemTags.includes(tag)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    // Testimonials slideshow changer
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    function changeTestimonial(direction) {
      if (slides.length <= 1) return;
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }

    // Blog modal logic
    const articles = ${JSON.stringify(state.blog || [])};
    function openBlogModal(index) {
      const art = articles[index];
      if (!art) return;
      document.getElementById('blog-modal-title').textContent = art.title;
      document.getElementById('blog-modal-body').innerHTML = \`
        \${art.cover ? \`<img src="\${art.cover}" style="width:100%; height:240px; object-fit:cover; border-radius:var(--pf-radius); margin-bottom:20px;" />\` : ''}
        <div style="font-size:0.8rem; color:var(--pf-text-muted); margin-bottom:12px;">Published on \${art.date} | Tags: \${art.tags}</div>
        <div style="font-size:1rem; line-height:1.7; color: var(--pf-text);">\${art.content || art.desc}</div>
      \`;
      document.getElementById('blog-reader-modal').style.display = 'flex';
    }
    function closeBlogModal() {
      document.getElementById('blog-reader-modal').style.display = 'none';
    }

    // Capture contact submission and post message back to Dashboard state manager
    document.getElementById('pf-portfolio-contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      // Send to parent dashboard
      window.parent.postMessage({
        type: 'contact_submit',
        data: {
          name: name,
          email: email,
          subject: subject,
          message: message,
          date: new Date().toISOString().split('T')[0]
        }
      }, '*');

      // Clear form & show success
      document.getElementById('pf-portfolio-contact-form').reset();
      document.getElementById('contact-success-msg').style.display = 'block';
      setTimeout(() => {
        document.getElementById('contact-success-msg').style.display = 'none';
      }, 5000);
    });
  </script>
</body>
</html>
  `;
}
