const ReadMoreButton = document.querySelectorAll('.button.primary');

ReadMoreButton.forEach(evokeBtn => {
    evokeBtn.addEventListener('click', () => {
        const secondSection = evokeBtn.closest('.card');
        const viewMoreContents = secondSection.querySelector('.read-more-section');
        
        viewMoreContents.classList.toggle('read-more-section--display');
        evokeBtn.textContent = viewMoreContents.classList.contains('read-more-section--display') ? 'Read Less' : 'Read More';
    });
});
