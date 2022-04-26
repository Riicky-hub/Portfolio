// ScrollBar - Animation
const progressBar = document.querySelector('#progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progressHeight + "%";
}