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

// Javascript to add/remove the "transparent" class on navbar at home
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    if (window.scrollY < 250) {
        nav.classList.add('transparent');
    } else {
        nav.classList.remove('transparent');
    }
});

// Javascript to show/hide accordion content at about us page
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
