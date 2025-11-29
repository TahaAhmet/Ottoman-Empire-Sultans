document.querySelectorAll('.detail-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.flip-card');
        card.classList.add('flipped');
    });
});

document.querySelectorAll('.btn-back').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const card = this.closest('.flip-card');
        card.classList.remove('flipped');
    });
});