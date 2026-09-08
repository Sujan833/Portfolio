/* ==========================================================================
   Akula Sujan Portfolio - Main Application Logic & Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initTypewriter();
  renderHeroStats();
  renderCodingPlatforms();
  renderInternships();
  renderExperience();
  renderProjects('all');
  renderSkills();
  renderCertifications();
  renderEducation();
  initNavigation();
  initThemeToggle();
  initModals();
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Particle Canvas Ambient Animation
   -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const count = Math.min(Math.floor(width / 18), 70);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(139, 92, 246, '
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.6)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color + (0.15 - dist / 1300) + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* --------------------------------------------------------------------------
   2. Typewriter Effect
   -------------------------------------------------------------------------- */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    "AI Engineer & Full-Stack Developer",
    "600+ Problems Solved across Platforms",
    "GenAI, RAG & AI-Agent Developer",
    "FastAPI, MCP & LangChain Specialist"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }
  type();
}

/* --------------------------------------------------------------------------
   3. Render Core Data Sections & Coding Platforms
   -------------------------------------------------------------------------- */
function renderHeroStats() {
  const container = document.getElementById('hero-stats-grid');
  if (!container) return;

  container.innerHTML = portfolioData.stats.map(s => `
    <div class="stat-card">
      <div class="stat-number">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>
  `).join('');
}

function renderCodingPlatforms() {
  const container = document.getElementById('coding-platforms-container');
  if (!container) return;

  const cp = portfolioData.codingPlatforms;

  container.innerHTML = `
    <div class="glass-card" style="border-color:var(--border-glow); box-shadow:var(--shadow-glow); padding:32px; margin-bottom:32px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px; border-bottom:1px solid var(--border-color); padding-bottom:20px; margin-bottom:24px;">
        <div style="display:flex; align-items:center; gap:16px;">
          <div style="width:50px; height:50px; border-radius:50%; background:var(--gradient-primary); display:flex; align-items:center; justify-content:center; color:#000; font-weight:800; font-size:1.3rem;">
            🦉
          </div>
          <div>
            <h3 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:700;">Sujan Akula <span style="font-size:0.9rem; color:var(--accent-cyan); font-weight:500;">${cp.handle}</span></h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">${cp.summaryText}</p>
          </div>
        </div>
        <a href="${cp.codolioProfile}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration:none;">
          <i data-lucide="external-link" style="width:16px; height:16px;"></i> View Codolio Profile
        </a>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; text-align:center;">
        <div style="background:rgba(0,0,0,0.3); border:1px solid var(--border-color); padding:20px; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:2.4rem; font-weight:800; color:var(--accent-cyan);">${cp.totalSolved}</div>
          <div style="font-size:0.95rem; color:var(--text-main); font-weight:600;">Overall Problems Solved</div>
          <div style="font-size:0.8rem; color:var(--text-subtle); margin-top:2px;">LeetCode, CodeChef, GeeksforGeeks, HackerRank</div>
        </div>

        <div style="background:rgba(0,0,0,0.3); border:1px solid var(--border-color); padding:20px; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:2.4rem; font-weight:800; color:var(--accent-purple);">${cp.activeDays}</div>
          <div style="font-size:0.95rem; color:var(--text-main); font-weight:600;">Active Coding Days</div>
          <div style="font-size:0.8rem; color:var(--text-subtle); margin-top:2px;">Continuous Problem Solving & Contests</div>
        </div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px;">
      ${cp.platforms.map(p => `
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="glass-card" style="text-decoration:none; display:flex; flex-direction:column; justify-content:space-between; padding:20px; transition:var(--transition-fast);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 style="font-family:var(--font-heading); font-size:1.15rem; font-weight:700; color:var(--text-main);">${p.name}</h4>
              <span class="tag-badge" style="background:rgba(0,242,254,0.1); color:var(--accent-cyan);">${p.badge}</span>
            </div>
            <p style="font-size:0.86rem; color:var(--text-muted);">${p.desc}</p>
          </div>
          <div style="margin-top:16px; color:var(--accent-cyan); font-size:0.82rem; font-weight:600; display:flex; align-items:center; gap:4px;">
            Explore Track <i data-lucide="arrow-right" style="width:14px; height:14px;"></i>
          </div>
        </a>
      `).join('')}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function renderInternships() {
  const container = document.getElementById('internships-container');
  if (!container) return;

  container.innerHTML = portfolioData.internships.map(item => `
    <div class="glass-card timeline-card" style="margin-bottom:24px;">
      <div class="timeline-header">
        <div>
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-company">${item.company}</span>
        </div>
        <span class="timeline-period">${item.period}</span>
      </div>
      <ul class="timeline-list">
        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
      <div class="tags-wrap" style="margin-top:16px;">
        ${item.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderExperience() {
  const container = document.getElementById('experience-container');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(item => `
    <div class="glass-card timeline-card" style="margin-bottom:20px;">
      <div class="timeline-header">
        <div>
          <h3 class="timeline-role">${item.role}</h3>
          <span class="timeline-company">${item.company}</span> <span class="tag-badge" style="margin-left:8px; background:rgba(139,92,246,0.15); color:var(--accent-purple);">${item.type}</span>
        </div>
        <span class="timeline-period">${item.period}</span>
      </div>
      <ul class="timeline-list">
        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="glass-card project-card">
      <div>
        <div class="project-header-row">
          <h3 class="project-title">${p.title}</h3>
          ${p.featured ? `<span class="tag-badge" style="background:rgba(236,72,153,0.15); color:#ec4899; border-color:rgba(236,72,153,0.3); font-size:0.7rem; padding:2px 6px;">Featured</span>` : ''}
        </div>
        <div class="project-subtitle">${p.subtitle}</div>
        <div class="project-desc">${p.description}</div>
        <div class="project-metrics">⚡ ${p.metrics}</div>
      </div>

      <div>
        <div class="tags-wrap" style="margin-bottom:12px;">
          ${p.tech.map(t => `<span class="tag-badge" style="font-size:0.72rem; padding:2px 6px;">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <a href="${p.githubUrl || 'https://github.com/Sujan833'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="padding:5px 12px; font-size:0.78rem;">
            <i data-lucide="github" style="width:13px; height:13px;"></i> GitHub Repo
          </a>
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:5px 12px; font-size:0.78rem; text-decoration:none;">
              <i data-lucide="external-link" style="width:13px; height:13px;"></i> Live Demo
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = portfolioData.skills.map(s => `
    <div class="glass-card skill-card">
      <div class="skill-info">
        <span class="skill-name">${s.name}</span>
        <span class="skill-perc">${s.level}%</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  container.innerHTML = portfolioData.certifications.map(c => `
    <div class="glass-card cert-card" style="display:flex; flex-direction:column; justify-content:space-between;">
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; gap:10px;">
          <h3 class="cert-title">${c.title}</h3>
          <span class="tag-badge" style="background:rgba(139,92,246,0.15); color:var(--accent-purple); border-color:rgba(139,92,246,0.3); whitespace:nowrap;">${c.badge}</span>
        </div>
        <div class="cert-issuer">Issuer: ${c.issuer}</div>
      </div>
      <div style="margin-top:16px; pt:12px; border-top:1px solid var(--border-color); display:flex; align-items:center; gap:6px; color:var(--accent-green); font-size:0.82rem; font-weight:600;">
        <i data-lucide="check-circle" style="width:14px; height:14px;"></i> Verified Certificate
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function renderEducation() {
  const container = document.getElementById('education-container');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(e => `
    <div class="glass-card" style="margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:10px;">
        <div>
          <h3 style="font-family:var(--font-heading); font-size:1.25rem; font-weight:700;">${e.institution}</h3>
          <div style="color:var(--accent-cyan); font-weight:600; margin-top:2px;">${e.degree}</div>
        </div>
        <div style="text-align:right;">
          <span class="tag-badge" style="font-size:0.85rem; padding:4px 12px; background:rgba(0,242,254,0.1); color:var(--accent-cyan);">${e.score}</span>
          <div style="font-size:0.82rem; color:var(--text-subtle); margin-top:4px;">${e.period}</div>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Filter Tabs Logic
   -------------------------------------------------------------------------- */
window.filterProjects = function(category, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(category);
};

/* --------------------------------------------------------------------------
   5. Interactive Simulators Modal Logic
   -------------------------------------------------------------------------- */
window.openSimulator = function(type, projectId) {
  const modal = document.getElementById('interactive-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  const project = portfolioData.projects.find(p => p.id === projectId);

  body.innerHTML = `
    <h2 style="font-family:var(--font-heading); font-size:1.8rem; margin-bottom:8px;">${project ? project.title : 'Project Details'}</h2>
    <p style="color:var(--text-muted); margin-bottom:16px;">${project ? project.subtitle : ''}</p>
    <div style="background:rgba(0,0,0,0.4); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border-color);">
      <h4 style="color:var(--accent-cyan); margin-bottom:10px;">Key Technical Innovations:</h4>
      <ul class="timeline-list">
        ${project ? project.highlights.map(h => `<li>${h}</li>`).join('') : ''}
      </ul>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  modal.classList.add('active');
};

/* --------------------------------------------------------------------------
   6. PDF Resume Viewer & Download Modal
   -------------------------------------------------------------------------- */
window.openResumeModal = function() {
  const modal = document.getElementById('interactive-modal');
  const body = document.getElementById('modal-body-content');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1px solid var(--border-color); padding-bottom:10px; flex-wrap:wrap; gap:10px;">
      <h2 style="font-family:var(--font-heading); font-size:1.6rem;">📄 Akula Sujan - Original PDF Resume</h2>
      <div style="display:flex; gap:10px;">
        <a href="Akula_Sujan_Resume.pdf" target="_blank" download="Akula_Sujan_Resume.pdf" class="btn btn-primary" style="padding:6px 16px; font-size:0.85rem; text-decoration:none;">
          <i data-lucide="download" style="width:14px; height:14px;"></i> Download PDF
        </a>
        <a href="Akula_Sujan_Resume.pdf" target="_blank" class="btn btn-secondary" style="padding:6px 16px; font-size:0.85rem; text-decoration:none;">
          <i data-lucide="external-link" style="width:14px; height:14px;"></i> Open Full Screen
        </a>
      </div>
    </div>

    <div style="width:100%; height:750px; background:#ffffff; border-radius:8px; overflow:hidden;">
      <iframe src="Akula_Sujan_Resume.pdf" style="width:100%; height:100%; border:none;"></iframe>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  modal.classList.add('active');
};

function initModals() {
  const modal = document.getElementById('interactive-modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* --------------------------------------------------------------------------
   7. Navigation, Theme & Utilities
   -------------------------------------------------------------------------- */
function initNavigation() {
  const nav = document.querySelector('header.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const currentTheme = localStorage.getItem('sujan_theme') || 'dark';
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('sujan_theme', isLight ? 'light' : 'dark');
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('progress-bar-fill')) {
          const level = entry.target.getAttribute('data-level');
          entry.target.style.width = level + '%';
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.progress-bar-fill').forEach(el => observer.observe(el));
}

window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    showToast(`Copied ${text}`);
  });
};

function showToast(msg) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle" style="color:var(--accent-green);"></i> ${msg}`;
  container.appendChild(toast);

  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
