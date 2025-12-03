// SketchUp Mastery Course - Full Interactive Application
// Complete learning management system with progress tracking

class SketchUpCourse {
    constructor() {
        this.totalModules = 10;
        this.progress = this.loadProgress();
        this.currentModule = this.progress.currentModule || 1;
        this.init();
    }

    init() {
        this.updateProgressBar();
        this.initializeModuleCards();
        this.initializeCheckboxes();
        this.initializeNavigation();
        this.loadModuleContent();
        this.initializeQuickActions();
        this.showWelcomeMessage();
    }

    // Progress Management
    loadProgress() {
        const saved = localStorage.getItem('sketchup-course-progress');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            currentModule: 1,
            completedModules: [],
            moduleProgress: {},
            startDate: new Date().toISOString(),
            lastAccessed: new Date().toISOString(),
            totalTimeSpent: 0,
            checkboxes: {}
        };
    }

    saveProgress() {
        this.progress.lastAccessed = new Date().toISOString();
        localStorage.setItem('sketchup-course-progress', JSON.stringify(this.progress));
        this.updateProgressBar();
    }

    updateProgressBar() {
        const completedCount = this.progress.completedModules.length;
        const percentComplete = Math.round((completedCount / this.totalModules) * 100);
        
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-percent');
        const progressModules = document.getElementById('progress-modules');
        
        if (progressBar) {
            progressBar.style.width = percentComplete + '%';
            progressBar.setAttribute('aria-valuenow', percentComplete);
        }
        
        if (progressText) {
            progressText.textContent = percentComplete + '%';
        }
        
        if (progressModules) {
            progressModules.textContent = `${completedCount} of ${this.totalModules} modules completed`;
        }

        // Update visual path
        this.updateVisualPath();
    }

    updateVisualPath() {
        const steps = document.querySelectorAll('.path-step');
        steps.forEach((step, index) => {
            const moduleNum = Math.floor(index / 2) + 1; // Account for lines
            if (this.progress.completedModules.includes(moduleNum)) {
                step.classList.add('completed');
            } else {
                step.classList.remove('completed');
            }
        });
    }

    // Module Management
    initializeModuleCards() {
        const moduleCards = document.querySelectorAll('.module-card');
        
        moduleCards.forEach((card, index) => {
            const moduleNum = index + 1;
            
            // Add completion indicator
            this.addCompletionBadge(card, moduleNum);
            
            // Add click tracking
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    this.trackModuleClick(moduleNum);
                }
            });

            // Add hover effects
            card.addEventListener('mouseenter', () => {
                this.showModulePreview(card, moduleNum);
            });
        });
    }

    addCompletionBadge(card, moduleNum) {
        const isCompleted = this.progress.completedModules.includes(moduleNum);
        const isCurrent = this.currentModule === moduleNum;
        
        if (isCompleted) {
            const badge = document.createElement('div');
            badge.className = 'completion-badge completed';
            badge.innerHTML = '✓ Completed';
            card.querySelector('.module-header')?.appendChild(badge);
            card.classList.add('module-completed');
        } else if (isCurrent) {
            const badge = document.createElement('div');
            badge.className = 'completion-badge current';
            badge.innerHTML = '▶ In Progress';
            card.querySelector('.module-header')?.appendChild(badge);
            card.classList.add('module-current');
        } else if (moduleNum < this.currentModule) {
            card.classList.add('module-available');
        } else {
            card.classList.add('module-locked');
        }
    }

    trackModuleClick(moduleNum) {
        this.currentModule = moduleNum;
        this.progress.currentModule = moduleNum;
        
        if (!this.progress.moduleProgress[moduleNum]) {
            this.progress.moduleProgress[moduleNum] = {
                startedAt: new Date().toISOString(),
                visits: 0,
                timeSpent: 0
            };
        }
        
        this.progress.moduleProgress[moduleNum].visits++;
        this.saveProgress();
    }

    showModulePreview(card, moduleNum) {
        const moduleData = this.getModuleData(moduleNum);
        
        // Create tooltip with module details
        const tooltip = document.createElement('div');
        tooltip.className = 'module-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-header">
                <strong>Module ${moduleNum}</strong>
                ${this.progress.completedModules.includes(moduleNum) ? '<span class="badge-success">✓</span>' : ''}
            </div>
            <div class="tooltip-body">
                <p>${moduleData.quickSummary}</p>
                <div class="tooltip-stats">
                    <span>⏱️ ${moduleData.timeRequired}</span>
                    <span>📚 ${moduleData.lessons} lessons</span>
                </div>
            </div>
        `;
        
        card.appendChild(tooltip);
        
        card.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    }

    getModuleData(moduleNum) {
        const modules = {
            1: { quickSummary: 'Get started with SketchUp and create your first 3D object', timeRequired: '1-2 hours', lessons: 7 },
            2: { quickSummary: 'Master camera navigation and view controls', timeRequired: '2-3 hours', lessons: 8 },
            3: { quickSummary: 'Learn all essential modeling tools', timeRequired: '4-6 hours', lessons: 12 },
            4: { quickSummary: 'Build your first portfolio project - a bedroom', timeRequired: '3-4 hours', lessons: 11 },
            5: { quickSummary: 'Advanced techniques: components and organization', timeRequired: '3-4 hours', lessons: 9 },
            6: { quickSummary: 'Create photorealistic materials and textures', timeRequired: '2-3 hours', lessons: 10 },
            7: { quickSummary: 'Your showpiece project - complete kitchen design', timeRequired: '4-6 hours', lessons: 11 },
            8: { quickSummary: 'Professional file organization and scenes', timeRequired: '2-3 hours', lessons: 10 },
            9: { quickSummary: 'Supercharge with extensions and plugins', timeRequired: '2-3 hours', lessons: 10 },
            10: { quickSummary: 'Launch your design business and find clients', timeRequired: '3-4 hours', lessons: 9 }
        };
        
        return modules[moduleNum] || {};
    }

    // Checkbox System
    initializeCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"][data-module]');
        
        checkboxes.forEach(checkbox => {
            const checkboxId = checkbox.id || checkbox.dataset.checkboxId;
            
            // Load saved state
            if (this.progress.checkboxes[checkboxId]) {
                checkbox.checked = true;
            }
            
            // Add change listener
            checkbox.addEventListener('change', (e) => {
                this.handleCheckboxChange(e.target);
            });
        });
    }

    handleCheckboxChange(checkbox) {
        const checkboxId = checkbox.id || checkbox.dataset.checkboxId;
        const moduleNum = parseInt(checkbox.dataset.module);
        
        this.progress.checkboxes[checkboxId] = checkbox.checked;
        
        // Show visual feedback
        if (checkbox.checked) {
            this.showCheckboxFeedback(checkbox, 'Great job! ✓');
            this.playSuccessSound();
        }
        
        // Calculate module completion
        this.checkModuleCompletion(moduleNum);
        
        this.saveProgress();
    }

    showCheckboxFeedback(checkbox, message) {
        const feedback = document.createElement('span');
        feedback.className = 'checkbox-feedback';
        feedback.textContent = message;
        
        checkbox.parentElement.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.add('fade-out');
            setTimeout(() => feedback.remove(), 500);
        }, 2000);
    }

    playSuccessSound() {
        // Optional: play a subtle success sound
        // Can be enhanced with actual audio files
    }

    checkModuleCompletion(moduleNum) {
        const moduleCheckboxes = document.querySelectorAll(`input[type="checkbox"][data-module="${moduleNum}"]`);
        const totalCheckboxes = moduleCheckboxes.length;
        const checkedCount = Array.from(moduleCheckboxes).filter(cb => cb.checked).length;
        
        const percentComplete = totalCheckboxes > 0 ? Math.round((checkedCount / totalCheckboxes) * 100) : 0;
        
        // Update module progress indicator
        this.updateModuleProgressIndicator(moduleNum, percentComplete);
        
        // Mark as complete if 100%
        if (percentComplete === 100 && !this.progress.completedModules.includes(moduleNum)) {
            this.completeModule(moduleNum);
        }
    }

    updateModuleProgressIndicator(moduleNum, percent) {
        const moduleCard = document.querySelector(`[data-module-num="${moduleNum}"]`);
        if (moduleCard) {
            let indicator = moduleCard.querySelector('.module-progress-indicator');
            if (!indicator) {
                indicator = document.createElement('div');
                indicator.className = 'module-progress-indicator';
                moduleCard.querySelector('.module-footer')?.appendChild(indicator);
            }
            
            indicator.innerHTML = `
                <div class="progress-bar-mini">
                    <div class="progress-fill" style="width: ${percent}%"></div>
                </div>
                <span class="progress-text">${percent}% complete</span>
            `;
        }
    }

    completeModule(moduleNum) {
        if (!this.progress.completedModules.includes(moduleNum)) {
            this.progress.completedModules.push(moduleNum);
            this.progress.completedModules.sort((a, b) => a - b);
            
            // Show celebration
            this.showModuleCompletionCelebration(moduleNum);
            
            // Unlock next module
            if (moduleNum < this.totalModules) {
                this.currentModule = moduleNum + 1;
                this.progress.currentModule = this.currentModule;
            }
            
            this.saveProgress();
            
            // Refresh UI
            setTimeout(() => {
                location.reload();
            }, 3000);
        }
    }

    showModuleCompletionCelebration(moduleNum) {
        const celebration = document.createElement('div');
        celebration.className = 'celebration-modal';
        celebration.innerHTML = `
            <div class="celebration-content">
                <div class="celebration-icon">🎉</div>
                <h2>Module ${moduleNum} Complete!</h2>
                <p>Awesome work! You're making real progress!</p>
                <div class="celebration-stats">
                    <div class="stat">
                        <strong>${this.progress.completedModules.length}</strong>
                        <span>of ${this.totalModules} modules</span>
                    </div>
                    <div class="stat">
                        <strong>${Math.round((this.progress.completedModules.length / this.totalModules) * 100)}%</strong>
                        <span>complete</span>
                    </div>
                </div>
                ${moduleNum < this.totalModules ? `
                    <button class="btn-next-module" onclick="app.goToModule(${moduleNum + 1})">
                        Continue to Module ${moduleNum + 1} →
                    </button>
                ` : `
                    <div class="course-complete">
                        <h3>🏆 Course Complete! 🏆</h3>
                        <p>You're now a professional SketchUp designer!</p>
                    </div>
                `}
                <button class="btn-close" onclick="this.closest('.celebration-modal').remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(celebration);
        
        // Confetti effect
        this.launchConfetti();
    }

    launchConfetti() {
        // Create confetti animation
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.backgroundColor = ['#0066FF', '#00C896', '#FF6B6B', '#FFC107', '#9C27B0'][Math.floor(Math.random() * 5)];
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }
    }

    goToModule(moduleNum) {
        window.location.href = `module-${moduleNum}.html`;
    }

    // Navigation
    initializeNavigation() {
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Create floating navigation
        this.createFloatingNav();
    }

    createFloatingNav() {
        const floatingNav = document.createElement('div');
        floatingNav.className = 'floating-nav';
        floatingNav.innerHTML = `
            <button class="nav-btn" data-action="home" title="Home">
                <span class="icon">🏠</span>
            </button>
            <button class="nav-btn" data-action="progress" title="Your Progress">
                <span class="icon">📊</span>
            </button>
            <button class="nav-btn" data-action="previous" title="Previous Module">
                <span class="icon">←</span>
            </button>
            <button class="nav-btn" data-action="next" title="Next Module">
                <span class="icon">→</span>
            </button>
            <button class="nav-btn" data-action="bookmark" title="Bookmark">
                <span class="icon">🔖</span>
            </button>
        `;
        
        document.body.appendChild(floatingNav);
        
        floatingNav.addEventListener('click', (e) => {
            const btn = e.target.closest('.nav-btn');
            if (btn) {
                this.handleNavAction(btn.dataset.action);
            }
        });
    }

    handleNavAction(action) {
        switch(action) {
            case 'home':
                window.location.href = 'index.html';
                break;
            case 'progress':
                this.showProgressModal();
                break;
            case 'previous':
                if (this.currentModule > 1) {
                    this.goToModule(this.currentModule - 1);
                }
                break;
            case 'next':
                if (this.currentModule < this.totalModules) {
                    this.goToModule(this.currentModule + 1);
                }
                break;
            case 'bookmark':
                this.toggleBookmark();
                break;
        }
    }

    // Progress Modal
    showProgressModal() {
        const modal = document.createElement('div');
        modal.className = 'progress-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="this.closest('.progress-modal').remove()">×</button>
                <h2>Your Learning Progress</h2>
                
                <div class="progress-overview">
                    <div class="progress-circle">
                        <svg viewBox="0 0 36 36" class="circular-chart">
                            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle" stroke-dasharray="${(this.progress.completedModules.length / this.totalModules) * 100}, 100"
                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <text x="18" y="20.35" class="percentage">${Math.round((this.progress.completedModules.length / this.totalModules) * 100)}%</text>
                        </svg>
                    </div>
                    
                    <div class="progress-stats">
                        <div class="stat-item">
                            <span class="stat-label">Modules Completed</span>
                            <span class="stat-value">${this.progress.completedModules.length} / ${this.totalModules}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Current Module</span>
                            <span class="stat-value">Module ${this.currentModule}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Started</span>
                            <span class="stat-value">${this.formatDate(this.progress.startDate)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Days Active</span>
                            <span class="stat-value">${this.getDaysActive()} days</span>
                        </div>
                    </div>
                </div>
                
                <div class="module-checklist">
                    <h3>Module Completion</h3>
                    ${this.generateModuleChecklist()}
                </div>
                
                <div class="achievements">
                    <h3>Achievements</h3>
                    ${this.generateAchievements()}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    generateModuleChecklist() {
        let html = '<div class="checklist-grid">';
        for (let i = 1; i <= this.totalModules; i++) {
            const isCompleted = this.progress.completedModules.includes(i);
            const isCurrent = this.currentModule === i;
            html += `
                <div class="checklist-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
                    <span class="check-icon">${isCompleted ? '✓' : isCurrent ? '▶' : '○'}</span>
                    <span class="module-name">Module ${i}</span>
                </div>
            `;
        }
        html += '</div>';
        return html;
    }

    generateAchievements() {
        const achievements = [
            { id: 'first-module', name: 'First Steps', description: 'Complete Module 1', unlocked: this.progress.completedModules.includes(1) },
            { id: 'first-project', name: 'Portfolio Builder', description: 'Complete your first project', unlocked: this.progress.completedModules.includes(4) },
            { id: 'halfway', name: 'Halfway There!', description: 'Complete 5 modules', unlocked: this.progress.completedModules.length >= 5 },
            { id: 'second-project', name: 'Kitchen Designer', description: 'Complete the kitchen project', unlocked: this.progress.completedModules.includes(7) },
            { id: 'professional', name: 'Professional Ready', description: 'Complete all 10 modules', unlocked: this.progress.completedModules.length === 10 },
        ];
        
        let html = '<div class="achievements-grid">';
        achievements.forEach(achievement => {
            html += `
                <div class="achievement ${achievement.unlocked ? 'unlocked' : 'locked'}">
                    <div class="achievement-icon">${achievement.unlocked ? '🏆' : '🔒'}</div>
                    <div class="achievement-info">
                        <strong>${achievement.name}</strong>
                        <p>${achievement.description}</p>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        return html;
    }

    // Quick Actions
    initializeQuickActions() {
        // Add quick action buttons to page
        const quickActions = document.createElement('div');
        quickActions.className = 'quick-actions';
        quickActions.innerHTML = `
            <button class="quick-btn" onclick="app.resetProgress()" title="Reset Progress">
                <span class="icon">🔄</span> Reset
            </button>
            <button class="quick-btn" onclick="app.exportProgress()" title="Export Progress">
                <span class="icon">📥</span> Export
            </button>
            <button class="quick-btn" onclick="app.importProgress()" title="Import Progress">
                <span class="icon">📤</span> Import
            </button>
        `;
        
        // Add to page (conditionally)
        const footer = document.querySelector('.footer');
        if (footer) {
            footer.appendChild(quickActions);
        }
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.removeItem('sketchup-course-progress');
            location.reload();
        }
    }

    exportProgress() {
        const dataStr = JSON.stringify(this.progress, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `sketchup-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    importProgress() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    localStorage.setItem('sketchup-course-progress', JSON.stringify(imported));
                    alert('Progress imported successfully!');
                    location.reload();
                } catch (error) {
                    alert('Error importing progress. Please check the file.');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    // Utility Functions
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    getDaysActive() {
        const start = new Date(this.progress.startDate);
        const now = new Date();
        return Math.floor((now - start) / (1000 * 60 * 60 * 24));
    }

    toggleBookmark() {
        // Simple bookmark functionality
        const currentUrl = window.location.href;
        alert('Bookmark added! (Browser bookmark or save this page)');
    }

    showWelcomeMessage() {
        // Show welcome message for first-time users
        if (this.progress.completedModules.length === 0 && !sessionStorage.getItem('welcomed')) {
            setTimeout(() => {
                const welcome = document.createElement('div');
                welcome.className = 'welcome-modal';
                welcome.innerHTML = `
                    <div class="welcome-content">
                        <h2>👋 Welcome to SketchUp Mastery!</h2>
                        <p>You're about to start an amazing journey from complete beginner to professional designer.</p>
                        <div class="welcome-tips">
                            <div class="tip">
                                <span class="tip-icon">✓</span>
                                <span>Check off tasks as you complete them</span>
                            </div>
                            <div class="tip">
                                <span class="tip-icon">📊</span>
                                <span>Track your progress in real-time</span>
                            </div>
                            <div class="tip">
                                <span class="tip-icon">🎯</span>
                                <span>Follow modules in order for best results</span>
                            </div>
                        </div>
                        <button class="btn-primary" onclick="this.closest('.welcome-modal').remove(); app.goToModule(1);">
                            Let's Get Started! →
                        </button>
                        <button class="btn-secondary" onclick="this.closest('.welcome-modal').remove();">
                            Explore First
                        </button>
                    </div>
                `;
                document.body.appendChild(welcome);
                sessionStorage.setItem('welcomed', 'true');
            }, 1000);
        }
    }

    // Load module content dynamically
    loadModuleContent() {
        // If we're on a module page, load and enhance the content
        const moduleContainer = document.getElementById('module-content');
        if (moduleContainer) {
            this.enhanceModuleContent(moduleContainer);
        }
    }

    enhanceModuleContent(container) {
        // Add interactive elements to module content
        // Convert checkboxes to interactive elements
        const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            checkbox.id = checkbox.id || `checkbox-${this.currentModule}-${index}`;
            checkbox.dataset.module = this.currentModule;
            checkbox.dataset.checkboxId = checkbox.id;
        });

        this.initializeCheckboxes();
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SketchUpCourse();
});

// Export for external use
window.SketchUpCourse = SketchUpCourse;

