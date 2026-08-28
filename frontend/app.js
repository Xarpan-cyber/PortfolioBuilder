/**
 * Portfolio Builder - App Core JS
 */

// Default rich mockup data to make the app instantly interactive and visually appealing
const DEFAULT_STATE = {
  auth: {
    loggedIn: false,
    email: '',
    name: ''
  },
  onboarding: {
    step: 1,
    chosenTemplate: 'developer',
    tempDetails: { name: '', profession: '', tagline: '' },
    chosenTheme: 'indigo'
  },
  profile: {
    name: 'Alex Rivera',
    profession: 'Senior Full Stack Developer',
    tagline: 'Crafting premium, high-performance web applications from concept to deployment.',
    bio: 'Passionate software engineer with 6+ years of experience building scalable products. Focused on React, Node.js, and modern CSS environments. Always keen on performance optimization.',
    location: 'San Francisco, CA',
    availability: 'available',
    photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256&h=256',
    resumeName: 'Alex_Rivera_Resume.pdf'
  },
  education: [
    {
      id: 'edu1',
      degree: 'B.S. in Computer Science',
      institution: 'UC Berkeley',
      startYear: '2016',
      endYear: '2020',
      desc: 'Specialized in Software Engineering. Graduated with Honors. Active member of Computer Science Undergraduate Association.'
    }
  ],
  experience: [
    {
      id: 'exp1',
      role: 'Senior Frontend Engineer',
      company: 'TechNova Solutions',
      duration: '2022 - Present',
      current: true,
      desc: 'Lead engineering for the core metrics dashboard. Implemented glassmorphism design tokens and reduced bundle sizes by 35%.'
    },
    {
      id: 'exp2',
      role: 'Full Stack Web Developer',
      company: 'DevStream Studio',
      duration: '2020 - 2022',
      current: false,
      desc: 'Built custom clients portals. Integrated Stripe gateway payments and optimized PostgreSQL databases for fast full-text searching.'
    }
  ],
  skills: [
    { id: 'sk1', name: 'JavaScript / TypeScript', group: 'Frontend', level: 95 },
    { id: 'sk2', name: 'React / Next.js', group: 'Frontend', level: 90 },
    { id: 'sk3', name: 'CSS / Glassmorphism', group: 'Frontend', level: 85 },
    { id: 'sk4', name: 'Node.js / Express', group: 'Backend', level: 80 },
    { id: 'sk5', name: 'PostgreSQL', group: 'Backend', level: 75 },
    { id: 'sk6', name: 'Git & GitHub Actions', group: 'Tools', level: 85 }
  ],
  projects: [
    {
      id: 'pr1',
      title: 'Aether Metrics Dashboard',
      desc: 'A premium SaaS monitoring tool with dynamic charting, server health alerts, and customizable widget grids.',
      cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: 'React, CSS Variables, Chart.js',
      liveLink: 'https://aether-charts.dev',
      githubLink: 'https://github.com/alexrivera/aether',
      featured: true
    },
    {
      id: 'pr2',
      title: 'Helios Headless Shop',
      desc: 'A super fast headless commerce storefront featuring instant add-to-cart, dark mode, and integrated checkout flow.',
      cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      tech: 'Next.js, Tailwind, Shopify API',
      liveLink: 'https://helios-store.com',
      githubLink: 'https://github.com/alexrivera/helios',
      featured: true
    }
  ],
  services: [
    {
      id: 'sr1',
      name: 'Full Stack Development',
      icon: 'fa-code',
      desc: 'Creating custom responsive web applications with clean, maintainable JS/CSS codebases.',
      price: '$110/hr'
    },
    {
      id: 'sr2',
      name: 'Interface Design Integration',
      icon: 'fa-laptop-code',
      desc: 'Converting layout files (Figma, Sketch) into pixel-perfect CSS components and micro-interactions.',
      price: '$90/hr'
    }
  ],
  testimonials: [
    {
      id: 'ts1',
      clientName: 'Sarah Jenkins',
      role: 'Product Director',
      company: 'NovaCorp Industries',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=128&h=128',
      quote: 'Alex is an exceptional developer. He took our rough wireframes and turned them into a stunning, responsive platform. Highly recommended!',
      rating: 5
    }
  ],
  blog: [
    {
      id: 'bl1',
      title: 'Leveraging Native CSS Variables for Theme Swappers',
      desc: 'Learn how to implement run-time styling swappers using native CSS Custom Properties instead of preprocessors.',
      content: 'Using SASS or LESS variables restricts styling updates to design compiling time. With CSS Custom Properties, variables live inside the browser DOM. This allows developers to adjust values dynamically on the fly using simple JavaScript hooks. For example: document.documentElement.style.setProperty("--pf-primary", newColor). This technique forms the backend of premium customization builders...',
      cover: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
      tags: 'CSS, Frontend, Javascript',
      date: '2026-08-12'
    }
  ],
  socials: {
    github: 'https://github.com/alexrivera',
    linkedin: 'https://linkedin.com/in/alexrivera',
    twitter: 'https://twitter.com/alexrivera_dev',
    instagram: '',
    dribbble: ''
  },
  contactEmail: 'alex.rivera@dev.com',
  appearance: {
    palette: 'indigo',
    primary: '#6366f1',
    accent: '#a855f7',
    font: "'Plus Jakarta Sans', sans-serif",
    bg: '#0f172a',
    text: '#f8fafc',
    mode: 'dark',
    radius: '12px',
    spacing: '1.5rem'
  },
  template: 'developer',
  domain: {
    subdomain: 'alexrivera',
    sslStatus: 'active',
    published: true
  },
  analytics: {
    views: 1420,
    unique: 980,
    clicks: { pr1: 290, pr2: 175 },
    messages: [
      {
        id: 'msg1',
        name: 'Julia Roberts',
        email: 'julia@designhub.io',
        subject: 'Contract Frontend Developer Role',
        message: 'Hi Alex, we have a 3-month remote contract for a React frontend engineer. Your metrics look great. Let me know if you are available to chat.',
        date: '2026-08-16',
        read: false
      }
    ]
  },
  settings: {
    privacyIndex: true,
    hideExperience: false,
    hideBlog: false
  }
};

let state = null;
let activeDashboardTab = 'overview';
let activeDeviceMode = 'desktop';
let currentChart = null;
const API_URL = '/api';

// --- INITIALIZATION & ROUTING ---
window.addEventListener('DOMContentLoaded', async () => {
  await loadState();
  initThemeToggle();
  initRouter();
  initOnboarding();
  initDevSwitcher();
  initContactMessageListener();

  updateAuthUI();

  // Guest Demo Interception: Prevent edits if not logged in
  const dashboardView = document.getElementById('dashboard-view');
  if (dashboardView) {
    const enforceAuth = (e) => {
      if (!state.auth.loggedIn) {
        // Allow navigation clicks and safe interactions
        if (e.target.closest('.dash-menu-link') ||
          e.target.closest('.dev-switch-btn') ||
          e.target.closest('.list-toggle-btn') ||
          e.target.closest('#nav-user-name') ||
          e.target.closest('.user-avatar-placeholder') ||
          e.target.closest('a.nav-link') ||
          e.target.closest('[onclick^="switchView"]') ||
          e.target.closest('[onclick^="showAuthPanel"]')) {
          return;
        }

        // Intercept inputs, selects, textareas, generic action buttons, and div-based buttons
        if (e.target.closest('input') ||
          e.target.closest('textarea') ||
          e.target.closest('select') ||
          e.target.closest('button') ||
          e.target.closest('.theme-palette-btn') ||
          e.target.closest('.template-pick')) {
          e.preventDefault();
          e.stopPropagation();
          triggerGuestAuthTransition();
        }
      }
    };

    let isTransitioning = false;
    const triggerGuestAuthTransition = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      // Create and show toast
      const toast = document.createElement('div');
      toast.innerHTML = `<i class="fas fa-lock"></i> <span>Please sign up to save your progress and edits.</span>`;
      toast.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%) translateY(-20px);
        background: var(--primary-color, #6366f1); color: white; padding: 14px 28px; border-radius: 30px;
        font-weight: 600; box-shadow: 0 10px 25px rgba(99,102,241,0.4);
        display: flex; align-items: center; gap: 10px; z-index: 100000;
        opacity: 0; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      `;
      document.body.appendChild(toast);

      // Animate toast in
      setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
      }, 10);

      // Animate out and transition view
      setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(-20px)';
        toast.style.opacity = '0';

        // Fade out dashboard softly
        dashboardView.style.transition = 'opacity 0.4s ease, filter 0.4s ease';
        dashboardView.style.opacity = '0';
        dashboardView.style.filter = 'blur(4px)';

        setTimeout(() => {
          toast.remove();
          showAuthPanel('signup');

          // Reset dashboard view styles
          setTimeout(() => {
            dashboardView.style.opacity = '1';
            dashboardView.style.filter = 'none';
            dashboardView.style.transition = '';
            isTransitioning = false;
          }, 50);
        }, 400);
      }, 2000);
    };

    // Capture phase to intercept before inline handlers trigger
    dashboardView.addEventListener('click', enforceAuth, true);
    dashboardView.addEventListener('keydown', (e) => {
      if (!state.auth.loggedIn && (e.target.closest('input') || e.target.closest('textarea') || e.target.closest('select') || e.target.closest('button') || e.target.closest('.theme-palette-btn') || e.target.closest('.template-pick'))) {
        e.preventDefault();
        e.stopPropagation();
        triggerGuestAuthTransition();
      }
    }, true);
  }

  // Parse URL path to determine initial view
  const path = window.location.pathname;
  if (path.startsWith('/dashboard')) {
    const tab = path.split('/')[2] || 'overview';
    switchView('dashboard', true);
    switchDashboardTab(tab, true);
  } else if (path.startsWith('/auth')) {
    const type = path.includes('signup') ? 'signup' : 'login';
    showAuthPanel(type, true);
  } else if (path.startsWith('/onboarding')) {
    switchView('onboarding', true);
  } else if (path.startsWith('/published')) {
    switchView('published', true);
  } else {
    switchView('landing', true);
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (e) => {
    const p = window.location.pathname;
    if (p.startsWith('/dashboard')) {
      const tab = p.split('/')[2] || 'overview';
      switchView('dashboard', true);
      switchDashboardTab(tab, true);
    } else if (p.startsWith('/auth')) {
      const type = p.includes('signup') ? 'signup' : 'login';
      showAuthPanel(type, true);
    } else if (p.startsWith('/onboarding')) {
      switchView('onboarding', true);
    } else if (p.startsWith('/published')) {
      switchView('published', true);
    } else {
      switchView('landing', true);
    }
  });
});

// --- THEME TOGGLE LOGIC ---
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
  const savedTheme = localStorage.getItem('portfolio_app_theme') || 'dark';

  // Apply saved theme immediately
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
    if (state && state.appearance) {
      state.appearance.mode = 'light';
    }
    // Persist and refresh preview
    if (state) {
      saveState();
      updateLivePreview();
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');

       if (isLight) {
         icon.classList.remove('fa-moon');
         icon.classList.add('fa-sun');
         localStorage.setItem('portfolio_app_theme', 'light');
         if (state && state.appearance) state.appearance.mode = 'light';
       } else {
         icon.classList.remove('fa-sun');
         icon.classList.add('fa-moon');
         localStorage.setItem('portfolio_app_theme', 'dark');
         if (state && state.appearance) state.appearance.mode = 'dark';
       }
       // Persist and refresh preview
       if (state) {
         saveState();
         updateLivePreview();
       }
    });
  }
}

// Load state from local storage or set default
async function loadState() {
  const token = localStorage.getItem('portfolio_token');
  if (token) {
    try {
      const res = await fetch(`${API_URL}/portfolios`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        const portfolios = await res.json();
        if (portfolios.length > 0) {
          const dbState = portfolios[0];
          state = { ...DEFAULT_STATE, ...dbState, auth: { loggedIn: true, email: '', name: '' } };

          // Auto-sync title if it's out of date with the profile name
          const expectedTitle = state.profile && state.profile.name ? `${state.profile.name}'s Portfolio` : 'My Portfolio';
          if (state.title !== expectedTitle) {
            saveState();
          }

          return;
        }
      }
    } catch (e) {
      console.error('Failed to load from API, falling back', e);
    }
  }

  const saved = localStorage.getItem('portfolio_builder_state');
  if (saved) {
    try {
      state = JSON.parse(saved);
      // If we are falling back to local storage for a logged-in user who has no portfolios,
      // or if we are a guest but somehow have an _id, we must strip the _id so a NEW 
      // portfolio is created rather than trying to update someone else's.
      if (token || !state.auth?.loggedIn) {
        delete state._id;
      }
      // Fallback keys if any were missing from older versions
      if (!state.blog) state.blog = [];
      if (!state.services) state.services = [];
      if (!state.testimonials) state.testimonials = [];
    } catch (e) {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
  } else {
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

async function saveState() {
  try {
    localStorage.setItem('portfolio_builder_state', JSON.stringify(state));
  } catch (err) {
    console.warn("Could not save full state to localStorage (likely due to large resume file):", err);
    // If it's too large, save a copy without resumeData to keep the rest intact
    const smallState = JSON.parse(JSON.stringify(state));
    if (smallState.profile) delete smallState.profile.resumeData;
    localStorage.setItem('portfolio_builder_state', JSON.stringify(smallState));
  }
  updateLivePreview();

  const token = localStorage.getItem('portfolio_token');
  if (token && state.auth && state.auth.loggedIn) {
    try {
      const isNew = !state._id;
      const method = isNew ? 'POST' : 'PUT';
      const url = isNew ? `${API_URL}/portfolios` : `${API_URL}/portfolios/${state._id}`;

      const payload = { ...state };

      if (payload.domain) {
        delete payload.domain.customDomain;
      }

      if (state.domain && state.domain.subdomain) {
        payload.slug = state.domain.subdomain;
      }

      // Dynamically set title based on current profile name
      if (state.profile && state.profile.name) {
        payload.title = `${state.profile.name}'s Portfolio`;
      } else {
        payload.title = 'My Portfolio';
      }

      if (isNew) {
        payload.slug = payload.slug || `user-${Date.now()}`;
      }

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const saved = await res.json();
        state._id = saved._id; // Update with DB id
      }
    } catch (e) {
      console.error('Failed to save state to API', e);
    }
  }
}

// --- AUTH STATE UI UPDATER ---
function updateAuthUI() {
  const authSection = document.getElementById('nav-auth-section');
  if (!authSection) return;

  if (state.auth && state.auth.loggedIn) {
    authSection.innerHTML = `
      <a href="#" class="nav-link" onclick="switchView('dashboard')">Dashboard</a>
      <button class="btn btn-primary" onclick="logout()">Log Out</button>
    `;
  } else {
    authSection.innerHTML = `
      <a href="#" class="nav-link" onclick="showAuthPanel('login')">Log In</a>
      <button class="btn btn-primary btn-start">Build for Free</button>
    `;
    // Rebind the button event listener since it was replaced
    const btn = authSection.querySelector('.btn-start');
    if (btn) {
      btn.addEventListener('click', () => {
        showAuthPanel('signup');
      });
    }
  }
}

window.logout = function () {
  localStorage.removeItem('portfolio_token');
  localStorage.removeItem('portfolio_builder_state');

  // Reset state to default
  state = JSON.parse(JSON.stringify(DEFAULT_STATE));

  updateAuthUI();
  switchView('landing');
};

// Router for switching views (SPA Model)
function initRouter() {
  // Navigation Links
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.getAttribute('data-route');
      switchView(target);
    });
  });

  // Action Buttons
  document.querySelectorAll('.btn-build-free, .btn-start').forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.auth.loggedIn) {
        switchView('dashboard');
      } else {
        showAuthPanel('signup');
      }
    });
  });
}

function switchView(viewName, noPush = false) {
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active', 'flex-active');
  });

  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    if (viewName === 'dashboard' || viewName === 'auth') {
      targetView.classList.add('flex-active');
    } if (viewName === 'dashboard') {
      setupDashboard();
    } else {
      targetView.classList.add('active');
    }
  }



  // Scroll to top
  window.scrollTo(0, 0);

  // Sync dev switcher button highlighting
  document.querySelectorAll('.dev-switch-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-view') === viewName) {
      btn.classList.add('active');
    }
  });

  if (viewName === 'published') {
    renderFullPublishedPortfolio();
  }

  // Update Browser URL
  if (!noPush && viewName !== 'auth' && viewName !== 'dashboard') {
    window.history.pushState({ view: viewName }, '', `/${viewName === 'landing' ? '' : viewName}`);
  }
}

// --- AUTHENTICATION FLOW ---
function showAuthPanel(type, noPush = false) {
  switchView('auth', true);

  if (!noPush) {
    window.history.pushState({ view: 'auth', type }, '', `/auth/${type}`);
  }

  const card = document.querySelector('.auth-card');
  const title = document.getElementById('auth-card-title');
  const subtitle = document.getElementById('auth-card-subtitle');
  const submitBtn = document.getElementById('auth-submit-btn');
  const toggleLink = document.getElementById('auth-toggle-link');
  const nameGroup = document.getElementById('auth-name-group');

  if (card && card.offsetParent !== null) {
    // Remove the entry animation class so its `forwards` state doesn't override our inline transition
    card.classList.remove('animated-slideup');

    card.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    card.style.opacity = '0';
    card.style.transform = type === 'login' ? 'translateX(-20px)' : 'translateX(20px)';

    setTimeout(() => {
      updateAuthContent();

      card.style.transition = 'none';
      card.style.transform = type === 'login' ? 'translateX(20px)' : 'translateX(-20px)';

      void card.offsetWidth;

      card.style.transition = 'opacity 0.15s ease-out, transform 0.15s ease-out';
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
    }, 150);
  } else {
    updateAuthContent();
  }

  function updateAuthContent() {
    const emailGroup = document.getElementById('auth-email-group');
    const passGroup = document.getElementById('auth-pass-group');
    const otpGroup = document.getElementById('auth-otp-group');
    const emailInput = document.getElementById('auth-email');
    const passInput = document.getElementById('auth-pass');
    const otpInput = document.getElementById('auth-otp');

    if (type === 'signup') {
      title.textContent = 'Create an account';
      subtitle.textContent = 'Start building your professional portfolio today.';
      submitBtn.textContent = 'Sign Up';
      toggleLink.innerHTML = 'Already have an account? <a href="#" onclick="showAuthPanel(\'login\')">Log in</a>';
      nameGroup.style.display = 'block';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'block';
      if (otpGroup) otpGroup.style.display = 'none';
      if (emailInput) emailInput.required = true;
      if (passInput) passInput.required = true;
      if (otpInput) otpInput.required = false;
    } else if (type === 'login') {
      title.textContent = 'Welcome back';
      subtitle.textContent = 'Sign in to edit your portfolio and check analytics.';
      submitBtn.textContent = 'Log In';
      toggleLink.innerHTML = 'New to the platform? <a href="#" onclick="showAuthPanel(\'signup\')">Create account</a>';
      nameGroup.style.display = 'none';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'block';
      if (otpGroup) otpGroup.style.display = 'none';
      if (emailInput) emailInput.required = true;
      if (passInput) passInput.required = true;
      if (otpInput) otpInput.required = false;
    } else if (type === 'otp') {
      title.textContent = 'Verify Email';
      subtitle.textContent = 'Enter the 4-digit OTP sent to your email.';
      submitBtn.textContent = 'Verify OTP';
      toggleLink.innerHTML = '<a href="#" onclick="showAuthPanel(\'signup\')">Back to Sign Up</a>';
      nameGroup.style.display = 'none';
      if (emailGroup) emailGroup.style.display = 'none';
      if (passGroup) passGroup.style.display = 'none';
      if (otpGroup) otpGroup.style.display = 'block';
      if (emailInput) emailInput.required = false;
      if (passInput) passInput.required = false;
      if (otpInput) otpInput.required = true;
    } else {
      title.textContent = 'Recover password';
      subtitle.textContent = 'Enter your email to receive recovery instructions.';
      submitBtn.textContent = 'Send Recovery Link';
      toggleLink.innerHTML = 'Remember password? <a href="#" onclick="showAuthPanel(\'login\')">Log in</a>';
      nameGroup.style.display = 'none';
      if (emailGroup) emailGroup.style.display = 'block';
      if (passGroup) passGroup.style.display = 'none';
      if (otpGroup) otpGroup.style.display = 'none';
      if (emailInput) emailInput.required = true;
      if (passInput) passInput.required = false;
      if (otpInput) otpInput.required = false;
    }
  }

  // Bind Submit Action
  const form = document.getElementById('auth-form');
  form.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-pass').value;
    const name = type === 'signup' ? document.getElementById('auth-name').value : 'Demo User';
    const otp = document.getElementById('auth-otp').value;

    try {
      let endpoint, body;
      if (type === 'signup') {
        endpoint = `${API_URL}/auth/register`;
        body = { name, email, password };
      } else if (type === 'otp') {
        endpoint = `${API_URL}/auth/verify-otp`;
        body = { email, otp };
      } else {
        endpoint = `${API_URL}/auth/login`;
        body = { email, password };
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || 'Authentication failed');
        return;
      }

      const data = await res.json();
      
      if (type === 'signup') {
        showAuthPanel('otp');
        return;
      }

      localStorage.setItem('portfolio_token', data.token);

      await loadState(); // Fetch existing portfolio

      state.auth.loggedIn = true;
      state.auth.email = email;
      state.auth.name = data.user.name || name;

      // If creating a brand new portfolio, replace 'Alex Rivera' defaults with the actual user's name
      if (!state._id) {
        const cleanName = state.auth.name || 'My';
        state.profile.name = cleanName;
        state.domain.subdomain = cleanName.toLowerCase().replace(/[^a-z0-9]/g, '');
        state.profile.resumeName = `${cleanName.replace(/\s+/g, '_')}_Resume.pdf`;
        state.onboarding.tempDetails.name = cleanName;
        // The title will dynamically auto-sync on save based on the new profile name
      }

      saveState();
      updateAuthUI();

      if (type === 'otp') {
        // Auto-fill the onboarding wizard with the name they just provided
        const obNameInput = document.getElementById('ob-name');
        if (obNameInput) {
          obNameInput.value = state.auth.name;
        }
        switchView('onboarding');
      } else {
        switchView('dashboard');
      }
    } catch (err) {
      console.error(err);
      alert('Network error during authentication');
    }
  };
}

// --- ONBOARDING WIZARD ---
function initOnboarding() {
  const wizardState = state.onboarding;

  // Template select
  document.querySelectorAll('.template-pick').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.template-pick').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      wizardState.chosenTemplate = card.getAttribute('data-val');
    });
  });

  // Palette select
  document.querySelectorAll('.theme-palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-palette-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      wizardState.chosenTheme = btn.getAttribute('data-val');
    });
  });

  // Wizard Navigation
  window.navigateWizard = function (direction) {
    const currentScreen = document.querySelector(`.onboarding-screen[data-step="${wizardState.step}"]`);

    // Save Step Inputs before moving
    if (wizardState.step === 2) {
      const nameInput = document.getElementById('ob-name').value.trim();
      const professionInput = document.getElementById('ob-profession').value.trim();
      const taglineInput = document.getElementById('ob-tagline').value.trim();

      if (!nameInput || !professionInput) {
        alert('Please fill in your name and profession!');
        return;
      }
      wizardState.tempDetails = { name: nameInput, profession: professionInput, tagline: taglineInput };
    }

    // Calculate next step
    wizardState.step += direction;
    if (wizardState.step < 1) wizardState.step = 1;

    if (wizardState.step > 4) {
      // Finish Wizard - Apply Choices & Redirect to Dashboard
      applyOnboardingChoices();
      return;
    }

    // Render Steps Indicators
    const steps = document.querySelectorAll('.onboarding-step');
    steps.forEach((step, idx) => {
      step.classList.remove('active', 'completed');
      if (idx + 1 < wizardState.step) step.classList.add('completed');
      if (idx + 1 === wizardState.step) step.classList.add('active');
    });

    // Update fill line
    const percent = ((wizardState.step - 1) / 3) * 100;
    document.querySelector('.step-progress-fill').style.width = `${percent}%`;

    // Toggle screens
    document.querySelectorAll('.onboarding-screen').forEach(scr => scr.classList.remove('active'));
    const nextScreen = document.querySelector(`.onboarding-screen[data-step="${wizardState.step}"]`);
    if (nextScreen) nextScreen.classList.add('active');

    // If step 4, summarize information
    if (wizardState.step === 4) {
      document.getElementById('summary-template').innerHTML = `<i class="fas fa-file-layout"></i> Chosen Template: <strong>${wizardState.chosenTemplate.toUpperCase()}</strong>`;
      document.getElementById('summary-theme').innerHTML = `<i class="fas fa-palette"></i> Palette: <strong>${wizardState.chosenTheme.toUpperCase()}</strong>`;
      document.getElementById('summary-details').innerHTML = `<i class="fas fa-user"></i> Name: <strong>${wizardState.tempDetails.name}</strong><br><i class="fas fa-briefcase"></i> Profession: <strong>${wizardState.tempDetails.profession}</strong>`;
    }
  };
}

function applyOnboardingChoices() {
  const wizard = state.onboarding;

  // Overwrite state data with onboarding entries
  state.template = wizard.chosenTemplate;
  state.profile.name = wizard.tempDetails.name;
  state.profile.profession = wizard.tempDetails.profession;
  state.profile.tagline = wizard.tempDetails.tagline || `Portfolio of ${wizard.tempDetails.name}`;

  // Set Appearance Theme Palette
  const themes = {
    indigo: { primary: '#6366f1', accent: '#a855f7', bg: '#0b0f19', text: '#f3f4f6', mode: 'dark' },
    cyan: { primary: '#06b6d4', accent: '#3b82f6', bg: '#080e1a', text: '#f3f4f6', mode: 'dark' },
    sunset: { primary: '#f43f5e', accent: '#fb923c', bg: '#0f0b11', text: '#f5f3f4', mode: 'dark' },
    emerald: { primary: '#10b981', accent: '#059669', bg: '#060b0e', text: '#f2f7f5', mode: 'dark' },
    monochrome: { primary: '#e2e8f0', accent: '#94a3b8', bg: '#020617', text: '#f8fafc', mode: 'dark' },
    light: { primary: '#1c1c1c', accent: '#666666', bg: '#fcfbf7', text: '#1c1c1c', mode: 'light' }
  };

  const chosen = themes[wizard.chosenTheme] || themes.indigo;
  state.appearance.palette = wizard.chosenTheme;
  state.appearance.primary = chosen.primary;
  state.appearance.accent = chosen.accent;
  state.appearance.bg = chosen.bg;
  state.appearance.text = chosen.text;
  state.appearance.mode = chosen.mode;

  saveState();
  switchView('dashboard');
}

// Helper to get initials from name
function getInitials(name) {
  if (!name) return 'U';
  const parts = name.trim().split(' ').filter(p => p.length > 0);
  if (parts.length === 0) return 'U';
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// --- CORE DASHBOARD INTERFACE MANAGER ---
function setupDashboard() {
  // Top Navbar user detail sync
  document.getElementById('nav-user-name').textContent = state.profile.name || 'User';
  document.getElementById('user-avatar-init').textContent = getInitials(state.profile.name);
  document.getElementById('nav-user-badge').textContent = state.analytics.messages.filter(m => !m.read).length > 0 ? 'PRO' : 'FREE';

  // Render sidebar menu interactions
  const links = document.querySelectorAll('.dash-menu-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = link.closest('.dash-menu-item');
      if (parent) {
        document.querySelectorAll('.dash-menu-item').forEach(li => li.classList.remove('active'));
        parent.classList.add('active');

        const tab = link.getAttribute('data-tab');
        switchDashboardTab(tab);
      }
    });
  });

  // Load active tab
  switchDashboardTab(activeDashboardTab);
  initPreviewSimulator();
  updateLivePreview();
}

function switchDashboardTab(tabName, noPush = false) {
  activeDashboardTab = tabName;

  if (!noPush) {
    window.history.pushState({ view: 'dashboard', tab: tabName }, '', `/dashboard/${tabName}`);
  }

  // Hide all sections, show active
  document.querySelectorAll('.dash-page').forEach(page => page.classList.remove('active'));
  const targetPage = document.getElementById(`dash-page-${tabName}`);
  if (targetPage) targetPage.classList.add('active');

  // Sync scroll in live preview iframe
  const iframe = document.getElementById('live-preview-iframe');
  if (iframe && iframe.contentWindow) {
    const tabToIdMap = {
      profile: 'about',
      education: 'timeline',
      experience: 'timeline',
      skills: 'skills',
      projects: 'projects',
      services: 'services',
      testimonials: 'testimonials',
      blog: 'blog',
      contact: 'contact'
    };
    const targetId = tabToIdMap[tabName];
    if (targetId) {
      const targetEl = iframe.contentWindow.document.getElementById(targetId);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      iframe.contentWindow.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Render specific content editors
  switch (tabName) {
    case 'overview':
      renderDashboardHome();
      break;
    case 'profile':
      renderProfileForm();
      break;
    case 'education':
      renderEducationList();
      break;
    case 'experience':
      renderExperienceList();
      break;
    case 'skills':
      renderSkillsList();
      break;
    case 'projects':
      renderProjectsList();
      break;
    case 'services':
      renderServicesList();
      break;
    case 'testimonials':
      renderTestimonialsList();
      break;
    case 'blog':
      renderBlogList();
      break;
    case 'contact':
      renderContactForm();
      break;
    case 'appearance':
      renderAppearanceCustomizer();
      break;
    case 'template':
      renderTemplateGrid();
      break;
    case 'domain':
      renderDomainSettings();
      break;
    case 'analytics':
      renderAnalyticsDashboard();
      break;
    case 'settings':
      renderSettingsPage();
      break;
  }
}

// Live Preview Update Handler
let cachedPortfolioCssText = null;

async function getPortfolioCssText() {
  if (cachedPortfolioCssText) return cachedPortfolioCssText;
  try {
    const res = await fetch('/portfolio.css');
    if (res.ok) {
      cachedPortfolioCssText = await res.text();
      return cachedPortfolioCssText;
    }
  } catch (e) {
    console.warn('Could not fetch portfolio.css relative file:', e);
  }
  return `/* Default Portfolio Styles */
:root {
  --pf-primary: #6366f1;
  --pf-accent: #a855f7;
  --pf-bg: #0f172a;
  --pf-bg-card: #1e293b;
  --pf-text: #f8fafc;
  --pf-text-muted: #94a3b8;
  --pf-border: rgba(255, 255, 255, 0.08);
  --pf-font: 'Plus Jakarta Sans', sans-serif;
  --pf-radius: 12px;
  --pf-spacing: 1.5rem;
}`;
}

async function updateLivePreview() {
  const iframe = document.getElementById('live-preview-iframe');
  if (iframe) {
    if (!cachedPortfolioCssText) {
      await getPortfolioCssText();
    }
    state._embeddedCss = cachedPortfolioCssText;
    const compiled = compilePortfolio(state);
    delete state._embeddedCss;
    iframe.srcdoc = compiled;
  }
}

function initPreviewSimulator() {
  // Mobile / Desktop preview toggle buttons
  document.querySelectorAll('.preview-device-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.preview-device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-device');
      activeDeviceMode = mode;

      const mock = document.getElementById('mock-device-simulator');
      if (mock) {
        mock.className = `mock-device ${mode}`;
      }
    };
  });
}

// Listen for form submissions inside the live preview iframe
function initContactMessageListener() {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'contact_submit') {
      const msg = event.data.data;
      msg.id = 'msg_' + Date.now();
      msg.read = false;

      // Add message to analytics messages array
      state.analytics.messages.unshift(msg);
      // Bump visits view counter for interaction simulation
      state.analytics.views += 3;
      state.analytics.unique += 1;

      saveState();

      // Update UI if user is on relevant page
      if (activeDashboardTab === 'overview') renderDashboardHome();
      if (activeDashboardTab === 'analytics') renderAnalyticsDashboard();

      // Trigger glowing notification bell
      const bell = document.querySelector('.notification-bell');
      if (bell) {
        // Create bell badge if not exists
        let badge = bell.querySelector('.bell-badge');
        if (!badge) {
          badge = document.createElement('div');
          badge.className = 'bell-badge';
          bell.appendChild(badge);
        }
        bell.style.animation = 'pulse 1s infinite';
      }

      alert(`🎉 Simulated Contact Form Submission Received!\nFrom: ${msg.name}\nSubject: ${msg.subject}`);
    }
  });
}

// Calculate setup completion rate
function calculateCompletionProgress() {
  let score = 0;
  let max = 7;

  if (state.profile.name && state.profile.bio) score++;
  if (state.education.length > 0) score++;
  if (state.experience.length > 0) score++;
  if (state.skills.length > 0) score++;
  if (state.projects.length > 0) score++;
  if (state.blog.length > 0) score++;
  if (state.domain.subdomain) score++;

  return Math.round((score / max) * 100);
}

// --- RENDERERS FOR INDIVIDUAL TABS ---

// 1. Overview Dashboard Home
function renderDashboardHome() {
  const prog = calculateCompletionProgress();
  document.getElementById('overview-progress-text').textContent = `Your portfolio is ${prog}% complete`;
  document.getElementById('overview-progress-bar').style.width = `${prog}%`;

  // Stats boxes
  document.getElementById('stat-views').textContent = state.analytics.views;
  document.getElementById('stat-clicks').textContent = Object.values(state.analytics.clicks).reduce((a, b) => a + b, 0);
  document.getElementById('stat-messages').textContent = state.analytics.messages.length;

  // Bind Quick Actions
  window.overviewQuickAction = function (targetTab) {
    const selector = `.dash-menu-link[data-tab="${targetTab}"]`;
    const link = document.querySelector(selector);
    if (link) {
      document.querySelectorAll('.dash-menu-item').forEach(li => li.classList.remove('active'));
      link.closest('.dash-menu-item').classList.add('active');
      switchDashboardTab(targetTab);
    }
  };
}

// 2. Profile Details Form
function renderProfileForm() {
  const p = state.profile;
  const container = document.getElementById('dash-page-profile-content');

  container.innerHTML = `
    <form id="profile-edit-form" class="animated-slideup">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" id="prof-name" class="form-input" value="${p.name}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Profession / Headline</label>
          <input type="text" id="prof-headline" class="form-input" value="${p.profession}" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Short Tagline</label>
        <input type="text" id="prof-tagline" class="form-input" value="${p.tagline}" />
      </div>
      <div class="form-group">
        <label class="form-label">Biography</label>
        <textarea id="prof-bio" class="form-input" rows="4" required>${p.bio}</textarea>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Location</label>
          <input type="text" id="prof-location" class="form-input" value="${p.location}" />
        </div>
        <div class="form-group">
          <label class="form-label">Availability Status</label>
          <select id="prof-avail" class="form-input" style="background:var(--bg-dark-hover);">
            <option value="available" ${p.availability === 'available' ? 'selected' : ''}>Open to Work</option>
            <option value="busy" ${p.availability === 'busy' ? 'selected' : ''}>Not Available</option>
          </select>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Profile Photo URL</label>
          <input type="text" id="prof-photo" class="form-input" value="${p.photo || ''}" />
        </div>
        <div class="form-group">
          <label class="form-label">Resume Filename <span style="font-weight:normal; font-size:0.85em; color:var(--text-muted);">(Max 1MB)</span></label>
          <div style="position: relative; display: flex; align-items: center;">
            <input type="text" id="prof-resume" class="form-input" value="${p.resumeName || ''}" placeholder="my_resume.pdf" style="padding-right: 40px;" />
            <input type="file" id="prof-resume-file" style="display: none;" accept=".pdf,.doc,.docx,.txt,.rtf" />
            <div id="prof-resume-upload-btn" style="position: absolute; right: 12px; color: var(--primary-color); cursor: pointer; opacity: 0.8; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'" title="Select local file">
              <i class="fas fa-file-upload"></i>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save Profile Info</button>
    </form>
  `;

  // Submit Handler
  document.getElementById('profile-edit-form').onsubmit = (e) => {
    e.preventDefault();
    state.profile.name = document.getElementById('prof-name').value.trim();
    state.profile.profession = document.getElementById('prof-headline').value.trim();
    state.profile.tagline = document.getElementById('prof-tagline').value.trim();
    state.profile.bio = document.getElementById('prof-bio').value.trim();
    state.profile.location = document.getElementById('prof-location').value.trim();
    state.profile.availability = document.getElementById('prof-avail').value;
    state.profile.photo = document.getElementById('prof-photo').value.trim();
    state.profile.resumeName = document.getElementById('prof-resume').value.trim();

    saveState();
    setupDashboard(); // Re-sync navbar user details
    alert('✅ Profile details saved successfully.');
  };

  // Resume File Upload Handler
  const fileUploadBtn = document.getElementById('prof-resume-upload-btn');
  const fileInput = document.getElementById('prof-resume-file');
  const textInput = document.getElementById('prof-resume');

  if (fileUploadBtn && fileInput && textInput) {
    fileUploadBtn.onclick = () => {
      fileInput.click();
    };
    fileInput.onchange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];

        // 1MB limit (1024 * 1024 bytes)
        if (file.size > 1048576) {
          alert('Error: File is too large. Please select a document smaller than 1MB.');
          fileInput.value = ''; // clear selection
          return;
        }

        textInput.value = file.name;

        const reader = new FileReader();
        reader.onload = function (evt) {
          state.profile.resumeData = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  }
}

// 3. Education Timeline CRUD
function renderEducationList() {
  const container = document.getElementById('dash-page-education-content');
  let listHtml = '';

  state.education.forEach(edu => {
    listHtml += `
      <div class="crud-item">
        <div class="crud-item-details">
          <h4>${edu.degree}</h4>
          <div class="crud-item-subtitle">${edu.institution}</div>
          <div class="crud-item-meta">${edu.startYear} - ${edu.endYear}</div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openEducationModal('${edu.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteEducation('${edu.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openEducationModal()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Add Education</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No education records added yet. Click Add to insert one.</p>'}
      </div>
    </div>
  `;
}

window.openEducationModal = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.education.find(e => e.id === id) : { degree: '', institution: '', startYear: '', endYear: '', desc: '' };

  const bodyHtml = `
    <form id="modal-education-form">
      <div class="form-group">
        <label class="form-label">Degree Name</label>
        <input type="text" id="edu-form-degree" class="form-input" value="${item.degree}" required placeholder="B.S. in Software Development" />
      </div>
      <div class="form-group">
        <label class="form-label">School / Institution</label>
        <input type="text" id="edu-form-school" class="form-input" value="${item.institution}" required placeholder="Stanford University" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Start Year</label>
          <input type="number" id="edu-form-start" class="form-input" value="${item.startYear}" required placeholder="2018" />
        </div>
        <div class="form-group">
          <label class="form-label">End Year (or Expected)</label>
          <input type="number" id="edu-form-end" class="form-input" value="${item.endYear}" required placeholder="2022" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Short Description</label>
        <textarea id="edu-form-desc" class="form-input" rows="3" placeholder="Specialized in AI algorithms and UX design patterns.">${item.desc}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Education' : 'Add Education', bodyHtml, () => {
    const degree = document.getElementById('edu-form-degree').value.trim();
    const school = document.getElementById('edu-form-school').value.trim();
    const start = document.getElementById('edu-form-start').value.trim();
    const end = document.getElementById('edu-form-end').value.trim();
    const desc = document.getElementById('edu-form-desc').value.trim();

    if (!degree || !school || !start || !end) return false;

    if (isEdit) {
      const idx = state.education.findIndex(e => e.id === id);
      state.education[idx] = { id, degree, institution: school, startYear: start, endYear: end, desc };
    } else {
      state.education.push({
        id: 'edu_' + Date.now(),
        degree,
        institution: school,
        startYear: start,
        endYear: end,
        desc
      });
    }

    saveState();
    renderEducationList();
    return true;
  });
};

window.deleteEducation = function (id) {
  if (confirm('Are you sure you want to delete this educational record?')) {
    state.education = state.education.filter(e => e.id !== id);
    saveState();
    renderEducationList();
  }
};

// 4. Experience CRUD
function renderExperienceList() {
  const container = document.getElementById('dash-page-experience-content');
  let listHtml = '';

  state.experience.forEach(exp => {
    listHtml += `
      <div class="crud-item">
        <div class="crud-item-details">
          <h4>${exp.role}</h4>
          <div class="crud-item-subtitle">${exp.company}</div>
          <div class="crud-item-meta">${exp.duration} ${exp.current ? '<span style="color:#10b981; font-weight:700;">(Current)</span>' : ''}</div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openExperienceModal('${exp.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteExperience('${exp.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openExperienceModal()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Add Job Experience</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No experience entries added yet.</p>'}
      </div>
    </div>
  `;
}

window.openExperienceModal = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.experience.find(e => e.id === id) : { role: '', company: '', duration: '', current: false, desc: '' };

  const bodyHtml = `
    <form id="modal-experience-form">
      <div class="form-group">
        <label class="form-label">Job Title / Role</label>
        <input type="text" id="exp-form-role" class="form-input" value="${item.role}" required placeholder="Senior Frontend Engineer" />
      </div>
      <div class="form-group">
        <label class="form-label">Company Name</label>
        <input type="text" id="exp-form-company" class="form-input" value="${item.company}" required placeholder="Stripe Inc" />
      </div>
      <div class="form-group">
        <label class="form-label">Duration Text</label>
        <input type="text" id="exp-form-duration" class="form-input" value="${item.duration}" required placeholder="2021 - Present" />
      </div>
      <div class="form-group" style="display:flex; align-items:center; gap:10px;">
        <input type="checkbox" id="exp-form-current" ${item.current ? 'checked' : ''} style="width:18px; height:18px;" />
        <label class="form-label" style="margin-bottom:0; cursor:pointer;" for="exp-form-current">I currently work here</label>
      </div>
      <div class="form-group">
        <label class="form-label">Key Achievements / Description</label>
        <textarea id="exp-form-desc" class="form-input" rows="4" placeholder="Implemented layouts, reduced performance bottlenecks, led dev sprints...">${item.desc}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Experience' : 'Add Experience', bodyHtml, () => {
    const role = document.getElementById('exp-form-role').value.trim();
    const company = document.getElementById('exp-form-company').value.trim();
    const duration = document.getElementById('exp-form-duration').value.trim();
    const current = document.getElementById('exp-form-current').checked;
    const desc = document.getElementById('exp-form-desc').value.trim();

    if (!role || !company || !duration) return false;

    if (isEdit) {
      const idx = state.experience.findIndex(e => e.id === id);
      state.experience[idx] = { id, role, company, duration, current, desc };
    } else {
      state.experience.push({
        id: 'exp_' + Date.now(),
        role,
        company,
        duration,
        current,
        desc
      });
    }

    saveState();
    renderExperienceList();
    return true;
  });
};

window.deleteExperience = function (id) {
  if (confirm('Are you sure you want to delete this job experience?')) {
    state.experience = state.experience.filter(e => e.id !== id);
    saveState();
    renderExperienceList();
  }
};

// 5. Skills tag manager
function renderSkillsList() {
  const container = document.getElementById('dash-page-skills-content');
  let tagsHtml = '';

  state.skills.forEach(sk => {
    tagsHtml += `
      <div class="skill-tag">
        <span>${sk.name} (${sk.group}: ${sk.level}%)</span>
        <i class="fas fa-times" onclick="deleteSkill('${sk.id}')"></i>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <div class="progress-bar-container" style="margin-bottom: 25px;">
        <h4 style="margin-bottom:15px;"><i class="fas fa-plus-circle"></i> Add a Skill</h4>
        <div style="display:grid; grid-template-columns:2fr 1fr 1fr; gap:15px; margin-bottom:15px;">
          <div>
            <label class="form-label">Skill Name</label>
            <input type="text" id="skill-add-name" class="form-input" placeholder="React Native, WebGL, UI Design..." />
          </div>
          <div>
            <label class="form-label">Group Category</label>
            <select id="skill-add-group" class="form-input" style="background:var(--bg-dark-hover);">
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Tools">Tools</option>
              <option value="Soft Skills">Soft Skills</option>
            </select>
          </div>
          <div>
            <label class="form-label">Proficiency Level</label>
            <input type="number" id="skill-add-level" class="form-input" min="1" max="100" value="90" />
          </div>
        </div>
        <button class="btn btn-primary" onclick="addSkill()">Add Skill</button>
      </div>

      <h4 style="margin-bottom:12px;">Active Portfolio Skills</h4>
      <div class="tags-input-container">
        ${tagsHtml || '<p class="pf-text-muted">No skills added. Fill in the form above to add some.</p>'}
      </div>
    </div>
  `;
}

window.addSkill = function () {
  const name = document.getElementById('skill-add-name').value.trim();
  const group = document.getElementById('skill-add-group').value;
  const level = parseInt(document.getElementById('skill-add-level').value, 10);

  if (!name || isNaN(level)) {
    alert('Please enter a valid skill name and numeric level.');
    return;
  }

  state.skills.push({
    id: 'sk_' + Date.now(),
    name,
    group,
    level: Math.min(100, Math.max(1, level))
  });

  saveState();
  renderSkillsList();
};

window.deleteSkill = function (id) {
  state.skills = state.skills.filter(s => s.id !== id);
  saveState();
  renderSkillsList();
};

// 6. Projects CRUD (most important)
function renderProjectsList() {
  const container = document.getElementById('dash-page-projects-content');
  let listHtml = '';

  state.projects.forEach(p => {
    listHtml += `
      <div class="crud-item">
        <div style="display:flex; align-items:center; gap:15px;">
          ${p.cover ? `<img src="${p.cover}" style="width:60px; height:45px; object-fit:cover; border-radius:4px; border:1px solid rgba(255,255,255,0.05);" />` : '<div style="width:60px; height:45px; background:var(--bg-dark-hover); border-radius:4px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-image text-muted"></i></div>'}
          <div>
            <h4 style="margin-bottom: 2px;">${p.title} ${p.featured ? '<span style="color:#a855f7; font-size:0.75rem; border:1.5px solid #a855f7; padding:1px 6px; border-radius:10px; margin-left:8px;">Featured</span>' : ''}</h4>
            <div class="crud-item-subtitle">${p.tech}</div>
          </div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openProjectModal('${p.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteProject('${p.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openProjectModal()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Add New Project</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No projects added yet.</p>'}
      </div>
    </div>
  `;
}

window.openProjectModal = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.projects.find(p => p.id === id) : { title: '', desc: '', cover: '', tech: '', liveLink: '', githubLink: '', featured: true };

  const bodyHtml = `
    <form id="modal-project-form">
      <div class="form-group">
        <label class="form-label">Project Title</label>
        <input type="text" id="proj-form-title" class="form-input" value="${item.title}" required placeholder="Fintech Dashboard API" />
      </div>
      <div class="form-group">
        <label class="form-label">Technology Stack Tags (comma separated)</label>
        <input type="text" id="proj-form-tech" class="form-input" value="${item.tech}" required placeholder="React, Node.js, WebSockets, Chart.js" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Live App Link (URL)</label>
          <input type="url" id="proj-form-livelink" class="form-input" value="${item.liveLink}" placeholder="https://myproject.com" />
        </div>
        <div class="form-group">
          <label class="form-label">GitHub Repository Link (URL)</label>
          <input type="url" id="proj-form-gitlink" class="form-input" value="${item.githubLink}" placeholder="https://github.com/myname/project" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Cover Image URL</label>
        <input type="text" id="proj-form-cover" class="form-input" value="${item.cover}" placeholder="https://images.unsplash.com/..." />
      </div>
      <div class="form-group" style="display:flex; align-items:center; gap:10px;">
        <input type="checkbox" id="proj-form-feat" ${item.featured ? 'checked' : ''} style="width:18px; height:18px;" />
        <label class="form-label" style="margin-bottom:0; cursor:pointer;" for="proj-form-feat">Feature this project prominently</label>
      </div>
      <div class="form-group">
        <label class="form-label">Project Overview / Description</label>
        <textarea id="proj-form-desc" class="form-input" rows="4" placeholder="Brief outline explaining why you built it and technical achievements.">${item.desc}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Project' : 'Add Project', bodyHtml, () => {
    const title = document.getElementById('proj-form-title').value.trim();
    const tech = document.getElementById('proj-form-tech').value.trim();
    const liveLink = document.getElementById('proj-form-livelink').value.trim();
    const githubLink = document.getElementById('proj-form-gitlink').value.trim();
    const cover = document.getElementById('proj-form-cover').value.trim();
    const featured = document.getElementById('proj-form-feat').checked;
    const desc = document.getElementById('proj-form-desc').value.trim();

    if (!title || !tech) return false;

    if (isEdit) {
      const idx = state.projects.findIndex(p => p.id === id);
      state.projects[idx] = { id, title, desc, cover, tech, liveLink, githubLink, featured };
    } else {
      state.projects.push({
        id: 'proj_' + Date.now(),
        title,
        desc,
        cover,
        tech,
        liveLink,
        githubLink,
        featured
      });
    }

    saveState();
    renderProjectsList();
    return true;
  });
};

window.deleteProject = function (id) {
  if (confirm('Are you sure you want to delete this project?')) {
    state.projects = state.projects.filter(p => p.id !== id);
    saveState();
    renderProjectsList();
  }
};

// 7. Services CRUD
function renderServicesList() {
  const container = document.getElementById('dash-page-services-content');
  let listHtml = '';

  state.services.forEach(s => {
    listHtml += `
      <div class="crud-item">
        <div style="display:flex; align-items:center; gap:15px;">
          <div class="quick-action-icon" style="margin-bottom:0;"><i class="fas ${s.icon || 'fa-briefcase'}"></i></div>
          <div>
            <h4 style="margin-bottom: 2px;">${s.name}</h4>
            <div class="crud-item-subtitle">${s.price}</div>
          </div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openServiceModal('${s.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteService('${s.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openServiceModal()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Add Freelance Service</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No services added yet.</p>'}
      </div>
    </div>
  `;
}

window.openServiceModal = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.services.find(s => s.id === id) : { name: '', price: '', icon: 'fa-code', desc: '' };

  const bodyHtml = `
    <form id="modal-service-form">
      <div class="form-group">
        <label class="form-label">Service Title</label>
        <input type="text" id="serv-form-title" class="form-input" value="${item.name}" required placeholder="React Web Application Development" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Pricing Rate</label>
          <input type="text" id="serv-form-price" class="form-input" value="${item.price}" required placeholder="$100/hr or $2,500 flat" />
        </div>
        <div class="form-group">
          <label class="form-label">Icon Class (FontAwesome)</label>
          <input type="text" id="serv-form-icon" class="form-input" value="${item.icon}" placeholder="fa-code, fa-palette, fa-mobile-alt" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Brief Description of Deliverables</label>
        <textarea id="serv-form-desc" class="form-input" rows="3" placeholder="Writing custom logic, API configurations...">${item.desc}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Service' : 'Add Service', bodyHtml, () => {
    const name = document.getElementById('serv-form-title').value.trim();
    const price = document.getElementById('serv-form-price').value.trim();
    const icon = document.getElementById('serv-form-icon').value.trim();
    const desc = document.getElementById('serv-form-desc').value.trim();

    if (!name || !price) return false;

    if (isEdit) {
      const idx = state.services.findIndex(s => s.id === id);
      state.services[idx] = { id, name, price, icon, desc };
    } else {
      state.services.push({
        id: 'serv_' + Date.now(),
        name,
        price,
        icon,
        desc
      });
    }

    saveState();
    renderServicesList();
    return true;
  });
};

window.deleteService = function (id) {
  if (confirm('Are you sure you want to delete this service?')) {
    state.services = state.services.filter(s => s.id !== id);
    saveState();
    renderServicesList();
  }
};

// 8. Testimonials CRUD
function renderTestimonialsList() {
  const container = document.getElementById('dash-page-testimonials-content');
  let listHtml = '';

  state.testimonials.forEach(t => {
    listHtml += `
      <div class="crud-item">
        <div style="display:flex; align-items:center; gap:15px;">
          ${t.photo ? `<img src="${t.photo}" style="width:40px; height:40px; object-fit:cover; border-radius:50%;" />` : '<div style="width:40px; height:40px; background:var(--bg-dark-hover); border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-user-circle"></i></div>'}
          <div>
            <h4 style="margin-bottom: 2px;">${t.clientName}</h4>
            <div class="crud-item-subtitle">${t.role} at ${t.company} (${t.rating} Stars)</div>
          </div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openTestimonialModal('${t.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteTestimonial('${t.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openTestimonialModal()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Add Testimonial</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No testimonials added yet.</p>'}
      </div>
    </div>
  `;
}

window.openTestimonialModal = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.testimonials.find(t => t.id === id) : { clientName: '', role: '', company: '', photo: '', quote: '', rating: 5 };

  const bodyHtml = `
    <form id="modal-testimonial-form">
      <div class="form-group">
        <label class="form-label">Client Name</label>
        <input type="text" id="test-form-name" class="form-input" value="${item.clientName}" required placeholder="Sarah Jenkins" />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Client Role</label>
          <input type="text" id="test-form-role" class="form-input" value="${item.role}" required placeholder="Marketing VP" />
        </div>
        <div class="form-group">
          <label class="form-label">Company Name</label>
          <input type="text" id="test-form-comp" class="form-input" value="${item.company}" required placeholder="Stripe Inc" />
        </div>
      </div>
      <div style="display:grid; grid-template-columns:2fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Client Photo URL</label>
          <input type="text" id="test-form-photo" class="form-input" value="${item.photo}" placeholder="https://unsplash.com/..." />
        </div>
        <div class="form-group">
          <label class="form-label">Star Rating (1-5)</label>
          <input type="number" id="test-form-rate" class="form-input" min="1" max="5" value="${item.rating}" required />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Client Quote</label>
        <textarea id="test-form-quote" class="form-input" rows="4" placeholder="Alex was amazing to work with...">${item.quote}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Testimonial' : 'Add Testimonial', bodyHtml, () => {
    const clientName = document.getElementById('test-form-name').value.trim();
    const role = document.getElementById('test-form-role').value.trim();
    const company = document.getElementById('test-form-comp').value.trim();
    const photo = document.getElementById('test-form-photo').value.trim();
    const rating = parseInt(document.getElementById('test-form-rate').value, 10);
    const quote = document.getElementById('test-form-quote').value.trim();

    if (!clientName || !role || !company || isNaN(rating)) return false;

    if (isEdit) {
      const idx = state.testimonials.findIndex(t => t.id === id);
      state.testimonials[idx] = { id, clientName, role, company, photo, quote, rating };
    } else {
      state.testimonials.push({
        id: 'test_' + Date.now(),
        clientName,
        role,
        company,
        photo,
        quote,
        rating
      });
    }

    saveState();
    renderTestimonialsList();
    return true;
  });
};

window.deleteTestimonial = function (id) {
  if (confirm('Are you sure you want to delete this testimonial?')) {
    state.testimonials = state.testimonials.filter(t => t.id !== id);
    saveState();
    renderTestimonialsList();
  }
};

// 9. Blog mini CMS
function renderBlogList() {
  const container = document.getElementById('dash-page-blog-content');
  let listHtml = '';

  state.blog.forEach(post => {
    listHtml += `
      <div class="crud-item">
        <div style="display:flex; align-items:center; gap:15px;">
          ${post.cover ? `<img src="${post.cover}" style="width:60px; height:45px; object-fit:cover; border-radius:4px;" />` : '<div style="width:60px; height:45px; background:var(--bg-dark-hover); border-radius:4px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-file-alt"></i></div>'}
          <div>
            <h4 style="margin-bottom: 2px;">${post.title}</h4>
            <div class="crud-item-subtitle">Published on ${post.date} | Tags: ${post.tags}</div>
          </div>
        </div>
        <div class="crud-item-actions">
          <button class="icon-btn edit" onclick="openBlogModalEdit('${post.id}')"><i class="fas fa-edit"></i></button>
          <button class="icon-btn delete" onclick="deleteBlogPost('${post.id}')"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <button class="btn btn-primary" onclick="openBlogModalEdit()" style="margin-bottom:20px;"><i class="fas fa-plus"></i> Write Blog Post</button>
      <div class="crud-list">
        ${listHtml || '<p class="pf-text-muted">No blog articles written yet.</p>'}
      </div>
    </div>
  `;
}

window.openBlogModalEdit = function (id = null) {
  const isEdit = id !== null;
  const item = isEdit ? state.blog.find(b => b.id === id) : { title: '', desc: '', content: '', cover: '', tags: '', date: new Date().toISOString().split('T')[0] };

  const bodyHtml = `
    <form id="modal-blog-form">
      <div class="form-group">
        <label class="form-label">Article Title</label>
        <input type="text" id="blog-form-title" class="form-input" value="${item.title}" required placeholder="Why Native CSS Variables Beat Sass" />
      </div>
      <div class="form-group">
        <label class="form-label">Short Summary Description</label>
        <input type="text" id="blog-form-desc" class="form-input" value="${item.desc}" required placeholder="A brief 1-sentence outline of what the post covers." />
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label">Cover Image URL</label>
          <input type="text" id="blog-form-cover" class="form-input" value="${item.cover}" placeholder="https://unsplash.com/..." />
        </div>
        <div class="form-group">
          <label class="form-label">Tags (comma separated)</label>
          <input type="text" id="blog-form-tags" class="form-input" value="${item.tags}" placeholder="CSS, WebDev, Design" />
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Full Article Content (Simple Text/Markdown)</label>
        <textarea id="blog-form-content" class="form-input" rows="8" placeholder="Start typing your article here..." required>${item.content || ''}</textarea>
      </div>
    </form>
  `;

  openModal(isEdit ? 'Edit Article' : 'New Blog Article', bodyHtml, () => {
    const title = document.getElementById('blog-form-title').value.trim();
    const desc = document.getElementById('blog-form-desc').value.trim();
    const cover = document.getElementById('blog-form-cover').value.trim();
    const tags = document.getElementById('blog-form-tags').value.trim();
    const content = document.getElementById('blog-form-content').value.trim();

    if (!title || !desc || !content) return false;

    if (isEdit) {
      const idx = state.blog.findIndex(b => b.id === id);
      state.blog[idx] = { id, title, desc, content, cover, tags, date: item.date };
    } else {
      state.blog.push({
        id: 'blog_' + Date.now(),
        title,
        desc,
        content,
        cover,
        tags,
        date: new Date().toISOString().split('T')[0]
      });
    }

    saveState();
    renderBlogList();
    return true;
  });
};

window.deleteBlogPost = function (id) {
  if (confirm('Are you sure you want to delete this blog post?')) {
    state.blog = state.blog.filter(b => b.id !== id);
    saveState();
    renderBlogList();
  }
};

// 10. Contact Details Form
function renderContactForm() {
  const container = document.getElementById('dash-page-contact-content');

  container.innerHTML = `
    <form id="contact-edit-form" class="animated-slideup">
      <div class="form-group">
        <label class="form-label">Primary Portfolio Receiving Email</label>
        <input type="email" id="cont-email" class="form-input" value="${state.contactEmail || ''}" required placeholder="hello@domain.com" />
        <span style="font-size:0.75rem; color:var(--text-muted);">Contact submissions from your published site will trigger simulator inboxes sending emails here.</span>
      </div>
      
      <h4 style="margin-top:30px; margin-bottom:15px;">Social Media & Code Profiles</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label"><i class="fab fa-github"></i> GitHub Profile Link</label>
          <input type="url" id="soc-git" class="form-input" value="${state.socials.github || ''}" placeholder="https://github.com/myname" />
        </div>
        <div class="form-group">
          <label class="form-label"><i class="fab fa-linkedin"></i> LinkedIn Profile Link</label>
          <input type="url" id="soc-link" class="form-input" value="${state.socials.linkedin || ''}" placeholder="https://linkedin.com/in/myname" />
        </div>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div class="form-group">
          <label class="form-label"><i class="fab fa-twitter"></i> Twitter / X Profile Link</label>
          <input type="url" id="soc-twit" class="form-input" value="${state.socials.twitter || ''}" placeholder="https://twitter.com/myname" />
        </div>
        <div class="form-group">
          <label class="form-label"><i class="fab fa-dribbble"></i> Dribbble Profile Link</label>
          <input type="url" id="soc-drib" class="form-input" value="${state.socials.dribbble || ''}" placeholder="https://dribbble.com/myname" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save Contacts</button>
    </form>
  `;

  document.getElementById('contact-edit-form').onsubmit = (e) => {
    e.preventDefault();
    state.contactEmail = document.getElementById('cont-email').value.trim();
    state.socials.github = document.getElementById('soc-git').value.trim();
    state.socials.linkedin = document.getElementById('soc-link').value.trim();
    state.socials.twitter = document.getElementById('soc-twit').value.trim();
    state.socials.dribbble = document.getElementById('soc-drib').value.trim();

    saveState();
    alert('✅ Contact and Social links saved.');
  };
}

// 11. Theme Appearance customizer
function renderAppearanceCustomizer() {
  const container = document.getElementById('dash-page-appearance-content');
  const a = state.appearance;

  container.innerHTML = `
    <div class="animated-slideup">
      <h4 style="margin-bottom:15px;">Choose Theme Presets</h4>
      <div class="theme-picker-grid" style="margin-bottom:30px; display:grid; grid-template-columns:repeat(auto-fill, minmax(170px, 1fr)); gap:15px;">
        <div class="theme-palette-btn ${a.palette === 'indigo' ? 'selected' : ''}" onclick="applyThemePreset('indigo')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#6366f1;"></div>
            <div class="theme-color-dot" style="background:#a855f7;"></div>
            <div class="theme-color-dot" style="background:#0b0f19;"></div>
          </div>
          <div class="theme-palette-name">Indigo Glow</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'cyan' ? 'selected' : ''}" onclick="applyThemePreset('cyan')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#06b6d4;"></div>
            <div class="theme-color-dot" style="background:#3b82f6;"></div>
            <div class="theme-color-dot" style="background:#080e1a;"></div>
          </div>
          <div class="theme-palette-name">Cool Cyan</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'sunset' ? 'selected' : ''}" onclick="applyThemePreset('sunset')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#f43f5e;"></div>
            <div class="theme-color-dot" style="background:#fb923c;"></div>
            <div class="theme-color-dot" style="background:#0f0b11;"></div>
          </div>
          <div class="theme-palette-name">Sunset Glow</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'emerald' ? 'selected' : ''}" onclick="applyThemePreset('emerald')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#10b981;"></div>
            <div class="theme-color-dot" style="background:#059669;"></div>
            <div class="theme-color-dot" style="background:#060b0e;"></div>
          </div>
          <div class="theme-palette-name">Emerald Forest</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'monochrome' ? 'selected' : ''}" onclick="applyThemePreset('monochrome')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#e2e8f0;"></div>
            <div class="theme-color-dot" style="background:#94a3b8;"></div>
            <div class="theme-color-dot" style="background:#020617;"></div>
          </div>
          <div class="theme-palette-name">Dark Mono</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'light' ? 'selected' : ''}" onclick="applyThemePreset('light')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#1c1c1c;"></div>
            <div class="theme-color-dot" style="background:#666666;"></div>
            <div class="theme-color-dot" style="background:#fcfbf7;"></div>
          </div>
          <div class="theme-palette-name">Light Minimalist</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'cyberpunk' ? 'selected' : ''}" onclick="applyThemePreset('cyberpunk')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#00ffcc;"></div>
            <div class="theme-color-dot" style="background:#ff007f;"></div>
            <div class="theme-color-dot" style="background:#050811;"></div>
          </div>
          <div class="theme-palette-name">Cyberpunk Neon</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'nordic' ? 'selected' : ''}" onclick="applyThemePreset('nordic')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#38bdf8;"></div>
            <div class="theme-color-dot" style="background:#2dd4bf;"></div>
            <div class="theme-color-dot" style="background:#0f172a;"></div>
          </div>
          <div class="theme-palette-name">Nordic Frost</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'luxury' ? 'selected' : ''}" onclick="applyThemePreset('luxury')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#eab308;"></div>
            <div class="theme-color-dot" style="background:#ca8a04;"></div>
            <div class="theme-color-dot" style="background:#0b1329;"></div>
          </div>
          <div class="theme-palette-name">Midnight Gold</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'tokyo' ? 'selected' : ''}" onclick="applyThemePreset('tokyo')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#7aa2f7;"></div>
            <div class="theme-color-dot" style="background:#f7768e;"></div>
            <div class="theme-color-dot" style="background:#1a1b26;"></div>
          </div>
          <div class="theme-palette-name">Tokyo Night</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'dracula' ? 'selected' : ''}" onclick="applyThemePreset('dracula')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#ff79c6;"></div>
            <div class="theme-color-dot" style="background:#bd93f9;"></div>
            <div class="theme-color-dot" style="background:#282a36;"></div>
          </div>
          <div class="theme-palette-name">Dracula Dark</div>
        </div>
        <div class="theme-palette-btn ${a.palette === 'glassmorphism' ? 'selected' : ''}" onclick="applyThemePreset('glassmorphism')">
          <div class="theme-colors-row">
            <div class="theme-color-dot" style="background:#a855f7;"></div>
            <div class="theme-color-dot" style="background:#06b6d4;"></div>
            <div class="theme-color-dot" style="background:#0f172a;"></div>
          </div>
          <div class="theme-palette-name">Frosted Glass</div>
        </div>
      </div>

      <h4 style="margin-bottom:15px;">Manual Layout Controls</h4>
      <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:25px; border-radius:var(--radius-md);">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
          <div class="form-group">
            <label class="form-label">Font Family Override</label>
            <select id="ap-form-font" class="form-input" style="background:var(--bg-dark-hover);">
              <option value="'Plus Jakarta Sans', sans-serif" ${a.font.includes('Plus Jakarta') ? 'selected' : ''}>Plus Jakarta Sans (Modern UI)</option>
              <option value="'Fira Code', monospace" ${a.font.includes('Fira Code') ? 'selected' : ''}>Fira Code (Developer Coding)</option>
              <option value="'Outfit', sans-serif" ${a.font.includes('Outfit') ? 'selected' : ''}>Outfit (Clean Circular)</option>
              <option value="'Playfair Display', Georgia, serif" ${a.font.includes('Playfair Display') ? 'selected' : ''}>Playfair Display (Classy Serif)</option>
              <option value="'Share Tech Mono', monospace" ${a.font.includes('Share Tech') ? 'selected' : ''}>Share Tech Mono (Cyberpunk)</option>
              <option value="'Cinzel', serif" ${a.font.includes('Cinzel') ? 'selected' : ''}>Cinzel (Executive)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Border Rounded Corner Radius</label>
            <select id="ap-form-radius" class="form-input" style="background:var(--bg-dark-hover);">
              <option value="0px" ${a.radius === '0px' ? 'selected' : ''}>Square (0px)</option>
              <option value="6px" ${a.radius === '6px' ? 'selected' : ''}>Subtle (6px)</option>
              <option value="12px" ${a.radius === '12px' ? 'selected' : ''}>Medium (12px)</option>
              <option value="24px" ${a.radius === '24px' ? 'selected' : ''}>Pill (24px)</option>
            </select>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
          <div class="form-group">
            <label class="form-label">Primary Color Code</label>
            <div style="display:flex; gap:10px;">
              <input type="color" id="ap-form-primary-picker" value="${a.primary}" style="width:40px; height:40px; border-radius:4px; padding:0; border:none; cursor:pointer;" />
              <input type="text" id="ap-form-primary" class="form-input" value="${a.primary}" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Accent Color Code</label>
            <div style="display:flex; gap:10px;">
              <input type="color" id="ap-form-accent-picker" value="${a.accent}" style="width:40px; height:40px; border-radius:4px; padding:0; border:none; cursor:pointer;" />
              <input type="text" id="ap-form-accent" class="form-input" value="${a.accent}" />
            </div>
          </div>
        </div>
        <button class="btn btn-primary" onclick="saveCustomAppearance()">Save Appearance Tokens</button>
      </div>
    </div>
  `;

  // Bind color pickers to text inputs
  const priPick = document.getElementById('ap-form-primary-picker');
  const priText = document.getElementById('ap-form-primary');
  priPick.oninput = () => priText.value = priPick.value;
  priText.oninput = () => priPick.value = priText.value;

  const accPick = document.getElementById('ap-form-accent-picker');
  const accText = document.getElementById('ap-form-accent');
  accPick.oninput = () => accText.value = accPick.value;
  accText.oninput = () => accPick.value = accText.value;
}

window.applyThemePreset = function (presetName) {
  const presets = {
    indigo: { primary: '#6366f1', accent: '#a855f7', bg: '#0b0f19', text: '#f3f4f6', mode: 'dark' },
    cyan: { primary: '#06b6d4', accent: '#3b82f6', bg: '#080e1a', text: '#f3f4f6', mode: 'dark' },
    sunset: { primary: '#f43f5e', accent: '#fb923c', bg: '#0f0b11', text: '#f5f3f4', mode: 'dark' },
    emerald: { primary: '#10b981', accent: '#059669', bg: '#060b0e', text: '#f2f7f5', mode: 'dark' },
    monochrome: { primary: '#e2e8f0', accent: '#94a3b8', bg: '#020617', text: '#f8fafc', mode: 'dark' },
    light: { primary: '#1c1c1c', accent: '#666666', bg: '#fcfbf7', text: '#1c1c1c', mode: 'light' },
    cyberpunk: { primary: '#00ffcc', accent: '#ff007f', bg: '#050811', text: '#e2f1f8', mode: 'dark' },
    nordic: { primary: '#38bdf8', accent: '#2dd4bf', bg: '#0f172a', text: '#f8fafc', mode: 'dark' },
    luxury: { primary: '#eab308', accent: '#ca8a04', bg: '#0b1329', text: '#fef08a', mode: 'dark' },
    tokyo: { primary: '#7aa2f7', accent: '#f7768e', bg: '#1a1b26', text: '#c0caf5', mode: 'dark' },
    dracula: { primary: '#ff79c6', accent: '#bd93f9', bg: '#282a36', text: '#f8f8f2', mode: 'dark' },
    glassmorphism: { primary: '#a855f7', accent: '#06b6d4', bg: '#0f172a', text: '#ffffff', mode: 'dark' }
  };

  const choice = presets[presetName];
  if (!choice) return;

  state.appearance.palette = presetName;
  state.appearance.primary = choice.primary;
  state.appearance.accent = choice.accent;
  state.appearance.bg = choice.bg;
  state.appearance.text = choice.text;
  state.appearance.mode = choice.mode;

  saveState();
  renderAppearanceCustomizer();
};

window.saveCustomAppearance = function () {
  state.appearance.palette = 'custom';
  state.appearance.font = document.getElementById('ap-form-font').value;
  state.appearance.radius = document.getElementById('ap-form-radius').value;
  state.appearance.primary = document.getElementById('ap-form-primary').value;
  state.appearance.accent = document.getElementById('ap-form-accent').value;

  saveState();
  alert('🎨 Custom appearance configurations loaded into site engine.');
};

// 12. Template Grid Picker
function renderTemplateGrid() {
  const container = document.getElementById('dash-page-template-content');
  const items = [
    { id: 'developer', title: 'Developer & Tech', desc: 'Monospaced fonts, terminal vibes, layout code snippets. Best for engineers.' },
    { id: 'designer', title: 'Creative Designer', desc: 'Floating rounded grids, large aesthetic overlays, bold fonts. Great for UI/UX builders.' },
    { id: 'minimalist', title: 'Minimalist Writer', desc: 'Beautiful high-contrast white pages, elegant serif headings, clean lines. Ideal for copywriters.' },
    { id: 'cyber-tech', title: 'Cyberpunk Tech', desc: 'Futuristic glowing neon accents, dark obsidian grid, terminal scanline aesthetics.' },
    { id: 'executive-pro', title: 'Executive Pro', desc: 'Corporate consultant & executive layout, champagne gold accents, structured elegance.' }
  ];

  let cardsHtml = '';
  items.forEach(it => {
    cardsHtml += `
      <div class="template-pick ${state.template === it.id ? 'selected' : ''}" onclick="applyGlobalTemplate('${it.id}')">
        <div class="template-pick-img" style="background-color: ${it.id === 'minimalist' ? '#fcfbf7' : (it.id === 'cyber-tech' ? '#050811' : '#0f172a')}; border-bottom:1px solid var(--border-color); display:flex; align-items:center; justify-content:center;">
          <span style="font-weight:700; color: ${it.id === 'minimalist' ? '#000' : (it.id === 'cyber-tech' ? '#00ffcc' : '#fff')}; font-size:1.4rem; text-shadow:0px 2px 4px rgba(0,0,0,0.1);">${it.id.toUpperCase()}</span>
        </div>
        <div class="template-pick-title" style="text-align:left;">
          <h4 style="margin-bottom:4px;">${it.title}</h4>
          <p style="font-size:0.75rem; color:var(--text-muted); font-weight:400; line-height:1.4;">${it.desc}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="animated-slideup">
      <p class="pf-text-muted" style="margin-bottom:20px;">Swap your layout with one click. Your written details remain fully preserved while the visual template adjusts.</p>
      <div class="template-picker-grid">
        ${cardsHtml}
      </div>
    </div>
  `;
}

window.applyGlobalTemplate = function (tempId) {
  state.template = tempId;
  saveState();
  renderTemplateGrid();
  alert(`✨ Portfolio template changed to ${tempId.toUpperCase()} layout.`);
};

// 13. Domain & Publishing Setup
function renderDomainSettings() {
  const container = document.getElementById('dash-page-domain-content');
  const d = state.domain;

  container.innerHTML = `
    <div class="animated-slideup" style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:30px; border-radius:var(--radius-lg);">
      <div class="form-group" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-color); padding-bottom:20px; margin-bottom:25px;">
        <div>
          <h4 style="font-size:1.1rem; margin-bottom:4px;">Site Visibility Status</h4>
          <span class="pf-text-muted" style="font-size:0.85rem;">Let search engines index your custom portfolio URL.</span>
        </div>
        <div style="display:flex; align-items:center; gap:10px;">
          <span style="font-weight:700; color:${d.published ? '#10b981' : '#ef4444'}">${d.published ? 'PUBLISHED' : 'UNPUBLISHED'}</span>
          <button class="btn ${d.published ? 'btn-danger' : 'btn-primary'}" onclick="togglePublishState()" style="padding:6px 14px; font-size:0.8rem;">
            ${d.published ? 'Unpublish' : 'Publish Live'}
          </button>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:25px;">
        <label class="form-label">Free Subdomain</label>
        <div style="display:flex; align-items:stretch;">
          <input type="text" id="dom-sub" class="form-input" style="border-radius:6px 0 0 6px;" value="${d.subdomain || ''}" placeholder="alexrivera" />
          <span style="background:var(--bg-dark-hover); border:1px solid var(--border-color); border-left:none; padding:0 15px; display:flex; align-items:center; font-size:0.85rem; color:var(--text-muted); border-radius:0;">
            .portfoliobuilder.com
          </span>
          <button class="btn btn-primary" onclick="saveSubdomain()" style="border-radius:0 6px 6px 0; white-space:nowrap;">Save Subdomain</button>
        </div>
        <div style="margin-top:8px; font-size:0.8rem;">
          <i class="fas fa-link" style="color:var(--primary-color);"></i> Published address: 
          <a href="#" onclick="switchView('published')" style="text-decoration:underline; font-weight:700; color:var(--primary-color);">
            http://${d.subdomain || 'yourname'}.portfoliobuilder.com
          </a>
        </div>
      </div>
    </div>
    
    <div class="animated-slideup" style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:30px; border-radius:var(--radius-lg); margin-top:25px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:15px;">
        <div>
          <h4 style="font-size:1.1rem; margin-bottom:4px; color:#fff;"><i class="fas fa-folder-open" style="color:var(--primary-color);"></i> Download Portfolio Website Folder</h4>
          <span class="pf-text-muted" style="font-size:0.85rem;">Download your complete website files in a zip package (index.html, portfolio.css, README.md) to host anywhere or open locally.</span>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-primary" onclick="downloadPortfolioZip()"><i class="fas fa-file-archive"></i> Download ZIP Folder</button>
          <button class="btn btn-secondary" onclick="downloadStandaloneHTML()"><i class="fas fa-download"></i> Single HTML File</button>
        </div>
      </div>
    </div>

    <div class="animated-slideup" style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:30px; border-radius:var(--radius-lg); margin-top:25px; text-align:center;">
      <div class="form-group" style="margin-bottom:0;">
        <h4 style="font-size:1.2rem; margin-bottom:10px; color:var(--text-light);">Confirm Sync</h4>
        <p class="pf-text-muted" style="font-size:0.9rem; margin-bottom:20px;">Force a complete synchronization of your entire portfolio data to the cloud.</p>
        <button class="btn btn-primary" onclick="syncFullPortfolio()" style="padding:15px 30px; font-size:1.1rem; width:100%; border-radius:var(--radius-md);">
          <i class="fas fa-cloud-upload-alt" style="margin-right:8px;"></i> Sync Entire Portfolio
        </button>
      </div>
    </div>
  `;
}

window.togglePublishState = function () {
  state.domain.published = !state.domain.published;
  saveState();
  renderDomainSettings();
};

window.saveSubdomain = function () {
  const input = document.getElementById('dom-sub');
  const sanitized = input.value.trim().toLowerCase().replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');

  if (sanitized.length < 3) {
    alert("Subdomain must be at least 3 characters.");
    return;
  }

  state.domain.subdomain = sanitized;
  input.value = sanitized;

  // Re-render to update the published link display below it
  renderDomainSettings();

  // Save state immediately
  saveState();
  alert("Subdomain saved! Changes may take a moment to reflect if the URL is taken.");
};

window.syncFullPortfolio = async function () {
  const btn = event.currentTarget;
  const originalText = btn.innerHTML;

  // Show loading state
  btn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i> Syncing to MongoDB...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  try {
    // Force a save state call
    await saveState();

    // Simulate slight network delay for better UX feel
    await new Promise(r => setTimeout(r, 600));

    // Show success
    btn.innerHTML = '<i class="fas fa-check-circle" style="margin-right:8px; color:#10b981;"></i> Synced Successfully!';
    btn.style.background = 'rgba(16, 185, 129, 0.1)';
    btn.style.border = '1px solid #10b981';
    btn.style.color = '#10b981';

  } catch (err) {
    btn.innerHTML = '<i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i> Sync Failed';
  }

  // Reset after 3 seconds
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.opacity = '1';
    btn.disabled = false;
    btn.style.background = '';
    btn.style.border = '';
    btn.style.color = '';
  }, 3000);
};

// 14. Analytics & Inbox Sub-page
function renderAnalyticsDashboard() {
  const container = document.getElementById('dash-page-analytics-content');

  // Create inbox list items
  let inboxHtml = '';
  if (state.analytics.messages && state.analytics.messages.length > 0) {
    state.analytics.messages.forEach(m => {
      inboxHtml += `
        <div class="inbox-card" id="msg-card-${m.id}">
          ${!m.read ? '<span class="inbox-badge-new">New Message</span>' : ''}
          <div class="inbox-meta">
            <span><i class="fas fa-user"></i> <strong>${m.name}</strong> (${m.email})</span>
            <span><i class="fas fa-calendar-alt"></i> ${m.date}</span>
          </div>
          <div style="font-weight:700; margin-bottom:8px; font-size:1.05rem;">Subject: ${m.subject}</div>
          <p class="inbox-message pf-text-muted">${m.message}</p>
          <div style="margin-top:15px; display:flex; gap:10px;">
            ${!m.read ? `<button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem;" onclick="markMessageRead('${m.id}')"><i class="fas fa-check"></i> Mark Read</button>` : ''}
            <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; color:var(--color-danger);" onclick="deleteMessage('${m.id}')"><i class="fas fa-trash-alt"></i> Delete</button>
          </div>
        </div>
      `;
    });
  } else {
    inboxHtml = '<p class="pf-text-muted">Your contact inbox is empty. Try submitting the contact form inside the Live Preview pane to see messages appear here!</p>';
  }

  container.innerHTML = `
    <div class="animated-slideup">
      <!-- Visitors Chart wrapper -->
      <div class="chart-container-wrapper">
        <h4 style="margin-bottom:15px;"><i class="fas fa-chart-line"></i> Profile View History (Views over Time)</h4>
        <canvas id="analytics-chart-canvas" style="width:100%; height:230px;"></canvas>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:30px; margin-bottom:40px;">
        <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:20px; border-radius:var(--radius-md);">
          <h4 style="margin-bottom:15px;"><i class="fas fa-mouse-pointer"></i> Project Clicks</h4>
          <ul style="list-style:none;">
            ${state.projects.map(p => `
              <li style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border-color);">
                <span>${p.title}</span>
                <strong style="color:var(--primary-color);">${state.analytics.clicks[p.id] || 0} clicks</strong>
              </li>
            `).join('') || '<li>No projects added.</li>'}
          </ul>
        </div>
        <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:20px; border-radius:var(--radius-md);">
          <h4 style="margin-bottom:15px;"><i class="fas fa-globe"></i> Geographic Breakdown</h4>
          <ul style="list-style:none;">
            <li style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span>United States</span><strong>64%</strong></li>
            <li style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span>United Kingdom</span><strong>12%</strong></li>
            <li style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-color);"><span>Canada</span><strong>8%</strong></li>
            <li style="display:flex; justify-content:space-between; padding:8px 0;"><span>Germany</span><strong>4%</strong></li>
          </ul>
        </div>
      </div>

      <h3 style="margin-bottom:20px; font-size:1.4rem; font-weight:800; border-top:1px solid var(--border-color); padding-top:30px;"><i class="fas fa-inbox"></i> Client Submissions Inbox</h3>
      <div class="inbox-list">
        ${inboxHtml}
      </div>
    </div>
  `;

  // Draw chart in next tick so the Canvas is added to DOM
  setTimeout(() => {
    drawAnalyticsChart();
  }, 10);
}

function drawAnalyticsChart() {
  const canvas = document.getElementById('analytics-chart-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  if (currentChart) {
    currentChart.destroy();
  }

  // Use Chart.js from CDN loaded in HTML
  if (typeof Chart !== 'undefined') {
    currentChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17'],
        datasets: [{
          label: 'Unique Views',
          data: [120, 210, 180, 240, 310, 290, 480],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3
        }, {
          label: 'Total Impressions',
          data: [200, 350, 300, 390, 520, 450, 780],
          borderColor: '#a855f7',
          backgroundColor: 'rgba(168, 85, 247, 0.05)',
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          borderDash: [5, 5]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: '#9ca3af', font: { family: 'Plus Jakarta Sans' } }
          }
        },
        scales: {
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#9ca3af' }
          },
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#9ca3af' }
          }
        }
      }
    });
  } else {
    // Basic SVG fallback if Chart.js fails to load
    ctx.fillStyle = "#1e2638";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("Chart.js failed to load. Displaying text representation.", 20, 100);
  }
}

window.markMessageRead = function (msgId) {
  const msg = state.analytics.messages.find(m => m.id === msgId);
  if (msg) {
    msg.read = true;
    saveState();
    renderAnalyticsDashboard();
    setupDashboard(); // Sync notifications badge in headers
  }
};

window.deleteMessage = function (msgId) {
  if (confirm('Delete this message?')) {
    state.analytics.messages = state.analytics.messages.filter(m => m.id !== msgId);
    saveState();
    renderAnalyticsDashboard();
    setupDashboard();
  }
};

// 15. Settings & Export Options
function renderSettingsPage() {
  const container = document.getElementById('dash-page-settings-content');
  const s = state.settings;

  container.innerHTML = `
    <div class="animated-slideup" style="display:flex; flex-direction:column; gap:30px;">
      <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:25px; border-radius:var(--radius-md);">
        <h4 style="margin-bottom:15px;"><i class="fas fa-lock"></i> Privacy Controls</h4>
        <div class="form-group" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px;">
          <div>
            <div style="font-weight:600;">Search Engine Indexing</div>
            <span class="pf-text-muted" style="font-size:0.8rem;">Allow Google and Bing to list your portfolio in search queries.</span>
          </div>
          <input type="checkbox" id="set-index" style="width:20px; height:20px;" ${s.privacyIndex ? 'checked' : ''} />
        </div>
        <div class="form-group" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px;">
          <div>
            <div style="font-weight:600;">Hide Experience Section</div>
            <span class="pf-text-muted" style="font-size:0.8rem;">Temporarily suppress your job timeline from showing on your public site.</span>
          </div>
          <input type="checkbox" id="set-hide-exp" style="width:20px; height:20px;" ${s.hideExperience ? 'checked' : ''} />
        </div>
        <div class="form-group" style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
          <div>
            <div style="font-weight:600;">Hide Blog / Articles Section</div>
            <span class="pf-text-muted" style="font-size:0.8rem;">Hide published blog posts from display.</span>
          </div>
          <input type="checkbox" id="set-hide-blog" style="width:20px; height:20px;" ${s.hideBlog ? 'checked' : ''} />
        </div>
        <button class="btn btn-primary" onclick="saveSettingsPrivacies()">Save Settings</button>
      </div>

      <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:25px; border-radius:var(--radius-md);">
        <h4 style="margin-bottom:10px;"><i class="fas fa-folder-open"></i> Portfolio Download & Data Portability</h4>
        <p class="pf-text-muted" style="font-size:0.85rem; margin-bottom:20px;">Download your custom portfolio website folder as a complete ZIP archive (HTML, CSS, README) or export JSON data.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="downloadPortfolioZip()"><i class="fas fa-file-archive"></i> Download Website Package (ZIP)</button>
          <button class="btn btn-secondary" onclick="downloadStandaloneHTML()"><i class="fas fa-download"></i> Download Standalone HTML</button>
          <button class="btn btn-secondary" onclick="exportPortfolioJSON()"><i class="fas fa-file-export"></i> Export Data (JSON)</button>
        </div>
      </div>

      <div style="background:var(--bg-dark-card); border:1px solid var(--border-color); padding:25px; border-radius:var(--radius-md); border-color:var(--color-danger);">
        <h4 style="margin-bottom:10px; color:var(--color-danger);"><i class="fas fa-exclamation-triangle"></i> Danger Zone</h4>
        <p class="pf-text-muted" style="font-size:0.85rem; margin-bottom:20px;">Permanently delete your account and clear all local portfolio settings from this browser.</p>
        <button class="btn btn-danger" onclick="deleteLocalAccount()"><i class="fas fa-trash-alt"></i> Delete Account</button>
      </div>
    </div>
  `;
}

window.saveSettingsPrivacies = function () {
  state.settings.privacyIndex = document.getElementById('set-index').checked;
  state.settings.hideExperience = document.getElementById('set-hide-exp').checked;
  state.settings.hideBlog = document.getElementById('set-hide-blog').checked;

  saveState();
  alert('⚙️ Privacy settings synced.');
};

window.exportPortfolioJSON = function () {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `portfolio_backup_${state.profile.name.toLowerCase().replace(/ /g, '_')}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

/**
 * PORTFOLIO ZIP PACKAGE DOWNLOADER
 */
window.downloadPortfolioZip = async function () {
  try {
    const cssText = await getPortfolioCssText();
    state._embeddedCss = cssText;
    const compiledHtml = compilePortfolio(state);
    delete state._embeddedCss;

    const zip = typeof JSZip !== 'undefined' ? new JSZip() : null;
    const folderName = ((state.profile && state.profile.name) || 'my-portfolio').toLowerCase().replace(/[^a-z0-9]/g, '-') + '-website';

    if (zip) {
      zip.file('index.html', compiledHtml);
      zip.file('portfolio.css', cssText);
      zip.file('README.md', `# ${state.profile.name || 'User'}'s Custom Portfolio Website

Downloaded from PortfolioBuilder on ${new Date().toLocaleDateString()}.

## How to use your Portfolio Website:
1. **Local Viewing**: Double click \`index.html\` to open your website in any browser.
2. **Online Deployment**:
   - **GitHub Pages**: Create a repo, upload \`index.html\` and \`portfolio.css\`, and enable GitHub Pages in repository Settings -> Pages.
   - **Netlify / Vercel**: Drag and drop this folder onto netlify.com/drop or vercel.com.

Enjoy your new personal website!
`);

      const content = await zip.generateAsync({ type: 'blob' });
      if (typeof saveAs !== 'undefined') {
        saveAs(content, `${folderName}.zip`);
      } else {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${folderName}.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
      alert('🎉 Portfolio folder ZIP downloaded successfully!');
    } else {
      downloadStandaloneHTML();
    }
  } catch (err) {
    console.error('ZIP export error:', err);
    downloadStandaloneHTML();
  }
};

/**
 * STANDALONE SINGLE HTML FILE DOWNLOADER
 */
window.downloadStandaloneHTML = async function () {
  const cssText = await getPortfolioCssText();
  state._embeddedCss = cssText;
  const compiledHtml = compilePortfolio(state);
  delete state._embeddedCss;

  const fileName = ((state.profile && state.profile.name) || 'my-portfolio').toLowerCase().replace(/[^a-z0-9]/g, '-') + '.html';
  const blob = new Blob([compiledHtml], { type: 'text/html;charset=utf-8' });

  if (typeof saveAs !== 'undefined') {
    saveAs(blob, fileName);
  } else {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  alert('🎉 Standalone HTML Portfolio downloaded successfully!');
};

window.deleteLocalAccount = function () {
  if (confirm('⚠️ WARNING: This will delete your simulated account and wipe out all local data changes! Are you absolutely sure?')) {
    localStorage.removeItem('portfolio_builder_state');
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
    saveState();
    switchView('landing');
    alert('Account cleared. Redirecting to landing page.');
  }
};

// --- DYNAMIC STANDARDIZED MODAL ---
let activeModalSaveCallback = null;

function openModal(title, bodyHTML, onSaveCallback) {
  document.getElementById('modal-title-text').textContent = title;
  document.getElementById('modal-body-container').innerHTML = bodyHTML;
  activeModalSaveCallback = onSaveCallback;

  document.getElementById('dash-modal').classList.add('active');
}

window.closeDashboardModal = function () {
  document.getElementById('dash-modal').classList.remove('active');
  activeModalSaveCallback = null;
};

window.saveDashboardModal = function () {
  if (activeModalSaveCallback) {
    const success = activeModalSaveCallback();
    if (success) {
      closeDashboardModal();
    }
  }
};

// --- FLOATING DEV MODE VIEW SWITCHER ---
function initDevSwitcher() {
  document.querySelectorAll('.dev-switch-btn').forEach(btn => {
    btn.onclick = () => {
      const view = btn.getAttribute('data-view');
      switchView(view);
    };
  });
}

// Render the Full-Screen published portfolio output
async function renderFullPublishedPortfolio() {
  const container = document.getElementById('published-portfolio-iframe-wrapper');
  if (container) {
    container.innerHTML = `
      <iframe srcdoc="" id="full-published-iframe" style="width:100%; height:100vh; border:none; background:white;"></iframe>
    `;
    if (!cachedPortfolioCssText) {
      await getPortfolioCssText();
    }
    setTimeout(() => {
      const iframe = document.getElementById('full-published-iframe');
      if (iframe) {
        state._embeddedCss = cachedPortfolioCssText;
        iframe.srcdoc = compilePortfolio(state);
        delete state._embeddedCss;
      }
    }, 10);
  }
}
