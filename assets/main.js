// JavaScript to handle the dropdown toggle
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var dropdownToggle = document.querySelector('.dropdown > a');

    dropdownToggle.onclick = function(event) {
        event.preventDefault();
        var dropdownContent = dropdown.querySelector('.dropdown ul');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    };
});
