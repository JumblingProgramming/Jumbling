/** Dark Mode */

let isDarkMode = localStorage.getItem('darkMode') === 'true';

let all = document.querySelectorAll('*:not(head):not(script)');

function DarkModeUpdated() {

   
    for (let i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = isDarkMode ? '#000' : '';
        all[i].style.color = isDarkMode ? '#fff' : '';
    }

   
    if (document.getElementById('darkmode-img')){
        document.getElementById('darkmode-img').src = isDarkMode ? 'images/sun.png' : 'images/moon.png';
    }

}

DarkModeUpdated();

if (document.getElementById('darkMode')){
document.getElementById('darkMode').addEventListener('click', function () {
    isDarkMode = !isDarkMode;
   
    localStorage.setItem('darkMode', isDarkMode.toString());
   
    DarkModeUpdated();
});
}

