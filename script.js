// SketchUp Mastery Course - Interactive Features

// Progress Tracking
document.addEventListener('DOMContentLoaded', function() {
    // Load progress from localStorage
    loadProgress();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add interactive hover effects to module cards
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('sketchup-progress');
    if (savedProgress) {
        const progressPercent = parseInt(savedProgress);
        updateProgressBar(progressPercent);
    }
}

// Update progress bar
function updateProgressBar(percent) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-percent');
    if (progressBar && progressText) {
        progressBar.style.width = percent + '%';
        progressText.textContent = percent + '%';
    }
}

// Save progress (can be called from external pages)
function saveProgress(percent) {
    localStorage.setItem('sketchup-progress', percent);
    updateProgressBar(percent);
}

// Calculate progress based on completed modules (1-10)
function calculateProgress(completedModules) {
    const totalModules = 10;
    const percent = Math.round((completedModules / totalModules) * 100);
    saveProgress(percent);
}

// Example: User completes Module 1
// calculateProgress(1); // 10% complete
// calculateProgress(5); // 50% complete
// calculateProgress(10); // 100% complete

// Add visual feedback for journey steps
const journeySteps = document.querySelectorAll('.journey-step');
journeySteps.forEach((step, index) => {
    step.style.animationDelay = `${index * 0.2}s`;
    step.classList.add('fade-in');
});

// Add animation for stats
const stats = document.querySelectorAll('.stat');
stats.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.1}s`;
    stat.classList.add('fade-in-up');
});

// Create animation classes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
        opacity: 0;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
    }
`;
document.head.appendChild(style);

// Interactive success checkboxes (for future enhancement)
function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Save checkbox state
            const checkboxId = this.id || this.name;
            if (checkboxId) {
                localStorage.setItem(`checkbox-${checkboxId}`, this.checked);
            }
            
            // Calculate overall progress
            const totalCheckboxes = checkboxes.length;
            const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
            const progress = Math.round((checkedCount / totalCheckboxes) * 100);
            saveProgress(progress);
        });
        
        // Load saved state
        const checkboxId = checkbox.id || checkbox.name;
        if (checkboxId) {
            const saved = localStorage.getItem(`checkbox-${checkboxId}`);
            if (saved === 'true') {
                checkbox.checked = true;
            }
        }
    });
}

// Initialize checkboxes when on a module page
if (window.location.pathname.includes('README')) {
    initializeCheckboxes();
}

// Export functions for use in other pages
window.SketchUpCourse = {
    saveProgress: saveProgress,
    calculateProgress: calculateProgress,
    loadProgress: loadProgress
};

