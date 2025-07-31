document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');
    const showMoreBtn = document.getElementById('show-more-activity-btn');
    const activityContent = document.getElementById('activity-content');

    const activityTemplates = [
        `
            <h2>Recent Commits</h2>
            <ul class="activity-list">
                <li>Feature: Added new login flow</li>
                <li>Fix: Corrected display issue on mobile</li>
                <li>Refactor: Optimized database queries</li>
            </ul>
        `,
        `
            <h2>New Pull Requests</h2>
            <ul class="activity-list">
                <li>PR #123: Update documentation</li>
                <li>PR #125: Add dark mode support</li>
            </ul>
        `,
        `
            <h2>Team Velocity</h2>
            <div class="score-display">18 Points</div>
            <p>Last sprint's performance</p>
        `
    ];

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.id === 'show-more-activity-btn') {
                return;
            }
            const modalId = card.getAttribute('data-target');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const randomIndex = Math.floor(Math.random() * activityTemplates.length);
            activityContent.innerHTML = activityTemplates[randomIndex];
            const modal = document.getElementById('modal-6');
            if (modal) {
                modal.style.display = 'block';
            }
        });
    }

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
