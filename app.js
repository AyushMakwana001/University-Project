// assets/js/app.js
// Global utility functions for PHP integration
console.log('Nexus University Management System - Frontend Ready');
document.addEventListener('DOMContentLoaded', () => {
    // Auto-highlight current nav based on URL
    document.querySelectorAll('.sidebar-item').forEach(item => {
        if (window.location.pathname.includes(item.getAttribute('href')?.split('.')[0] || '')) {
            item.classList.add('active');
        }
    });
});