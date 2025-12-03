const fs = require('fs');

const modules = [
    { num: 2, dir: '02-navigation', title: 'Navigation & Movement', time: '2-3 hours', difficulty: '🟢 Beginner', day: 'Day 2-3', prev: '01-getting-started.html', next: '03-essential-tools.html' },
    { num: 3, dir: '03-essential-tools', title: 'Essential Tools', time: '4-6 hours', difficulty: '🟡 Beginner+', day: 'Day 4-6', prev: '02-navigation.html', next: '04-first-project.html' },
    { num: 4, dir: '04-first-project', title: 'First Project: Simple Room', time: '3-4 hours', difficulty: '🟡 Intermediate', day: 'Day 7-10', prev: '03-essential-tools.html', next: '05-advanced-modeling.html' },
    { num: 5, dir: '05-advanced-modeling', title: 'Advanced Modeling', time: '3-4 hours', difficulty: '🟡 Intermediate', day: 'Day 11-13', prev: '04-first-project.html', next: '06-materials-textures.html' },
    { num: 6, dir: '06-materials-textures', title: 'Materials & Textures', time: '2-3 hours', difficulty: '🟡 Intermediate', day: 'Day 14-15', prev: '05-advanced-modeling.html', next: '07-second-project.html' },
    { num: 7, dir: '07-second-project', title: 'Second Project: Modern Kitchen', time: '4-6 hours', difficulty: '🔴 Advanced', day: 'Day 16-21', prev: '06-materials-textures.html', next: '08-layers-organization.html' },
    { num: 8, dir: '08-layers-organization', title: 'Layers & Organization', time: '2-3 hours', difficulty: '🟡 Intermediate', day: 'Day 22-23', prev: '07-second-project.html', next: '09-extensions.html' },
    { num: 9, dir: '09-extensions', title: 'Extensions & Plugins', time: '2-3 hours', difficulty: '🟡 Intermediate', day: 'Day 24-25', prev: '08-layers-organization.html', next: '10-going-professional.html' },
    { num: 10, dir: '10-going-professional', title: 'Going Professional', time: '3-4 hours', difficulty: '⭐ Professional', day: 'Day 26-30', prev: '09-extensions.html', next: 'index.html' }
];

const template = (mod) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module ${mod.num}: ${mod.title} | SketchUp Mastery</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        body { background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); }
        .lesson-container { max-width: 1000px; margin: 0 auto; padding: 0 2rem; }
        .content-wrapper { background: white; border-radius: 24px; box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08); margin: 2rem 0; overflow: hidden; }
        .module-hero { background: var(--gradient-primary); color: white; padding: 4rem 3rem; text-align: center; }
        .module-hero h1 { font-size: 2.5rem; margin-bottom: 1rem; color: white !important; border: none !important; text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); }
        .hero-meta { display: flex; justify-content: center; gap: 2rem; margin-top: 2rem; flex-wrap: wrap; }
        .hero-meta-item { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); padding: 0.75rem 1.5rem; border-radius: 50px; }
        .content-body { padding: 4rem 3rem; }
        @media (max-width: 768px) {
            .lesson-container { padding: 0 1rem; }
            .module-hero { padding: 3rem 2rem; }
            .module-hero h1 { font-size: 2rem; }
            .content-body { padding: 2rem 1.5rem; }
        }
    </style>
</head>
<body>
    <div class="top-progress-bar">
        <div class="progress-container">
            <div class="progress-text">Your Learning Progress: <span id="progress-percent">0%</span> • <span id="progress-modules">0 of 10 modules</span></div>
            <div class="progress-bar-outer">
                <div class="progress-bar-inner" id="progress-bar" style="width: 0%"></div>
            </div>
        </div>
    </div>

    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <div class="brand-icon">🏗️</div>
                <div class="brand-text">
                    <h1>SketchUp Mastery</h1>
                    <p class="brand-tagline">Your Complete Learning System</p>
                </div>
            </div>
            <div class="nav-links">
                <a href="index.html" class="nav-link"><span class="nav-icon">🏠</span> Home</a>
                <a href="#" onclick="if(window.app) app.showProgressModal(); return false;" class="nav-link"><span class="nav-icon">📊</span> Progress</a>
                <a href="PROGRESS.md" class="nav-link nav-link-cta"><span class="nav-icon">✓</span> Track Progress</a>
            </div>
        </div>
    </nav>

    <div class="lesson-container">
        <div class="module-nav">
            <a href="${mod.prev}" class="module-nav-btn prev"><span>←</span> Previous</a>
            <div class="module-title-nav"><strong>Module ${mod.num} of 10</strong></div>
            <a href="${mod.next}" class="module-nav-btn next">${mod.num === 10 ? 'Complete! Back to Home' : 'Next Module'} <span>→</span></a>
        </div>

        <div class="content-wrapper">
            <div class="module-hero">
                <div style="display:inline-block;background:rgba(255,255,255,0.25);padding:0.5rem 1.5rem;border-radius:50px;margin-bottom:1rem;font-weight:700;">Module ${mod.num}</div>
                <h1>${mod.title}</h1>
                <div class="hero-meta">
                    <div class="hero-meta-item">⏱️ ${mod.time}</div>
                    <div class="hero-meta-item">${mod.difficulty}</div>
                    <div class="hero-meta-item">📅 ${mod.day}</div>
                </div>
            </div>

            <div class="content-body">
                <div id="module-content" class="markdown-content"></div>
            </div>
        </div>

        <div class="module-nav" style="margin-top: 3rem;">
            <a href="${mod.prev}" class="module-nav-btn prev"><span>←</span> Previous Module</a>
            <div class="module-title-nav"><strong>${mod.num === 10 ? 'Course Complete!' : 'Ready to Continue?'}</strong></div>
            <a href="${mod.next}" class="module-nav-btn next">${mod.num === 10 ? 'Back to Home' : \`Continue to Module \${mod.num + 1}\`} <span>→</span></a>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>SketchUp Mastery Course</h4>
                    <p>Interactive learning for aspiring designers</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js"></script>
    <script src="app.js"></script>
    <script>
        marked.setOptions({ breaks: true, gfm: true });
        fetch('${mod.dir}/README.md')
            .then(r => r.text())
            .then(md => {
                const html = marked.parse(md);
                const content = document.getElementById('module-content');
                content.innerHTML = html;
                const firstH1 = content.querySelector('h1');
                if (firstH1) firstH1.remove();
                const cbs = content.querySelectorAll('input[type="checkbox"]');
                cbs.forEach((cb, i) => {
                    cb.id = \`m${mod.num}-cb-\${i}\`;
                    cb.dataset.module = '${mod.num}';
                    if (window.app) {
                        if (app.progress.checkboxes[cb.id]) cb.checked = true;
                        cb.addEventListener('change', () => app.handleCheckboxChange(cb));
                    }
                });
                content.querySelectorAll('a[href^="#"]').forEach(a => {
                    a.addEventListener('click', e => {
                        e.preventDefault();
                        const t = document.querySelector(a.getAttribute('href'));
                        if (t) t.scrollIntoView({ behavior: 'smooth' });
                    });
                });
            });
    </script>
</body>
</html>`;

modules.forEach(mod => {
    fs.writeFileSync(`${mod.dir}.html`, template(mod));
    console.log(`✓ Created ${mod.dir}.html`);
});

console.log('\n🎉 All 9 module pages generated with perfect spacing and continuity!');
