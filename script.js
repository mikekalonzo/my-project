function sayHello() {
  alert("Hello there! Welcome to my first app!");
}
const videos = document.querySelectorAll('video, iframe');

window.addEventListener('scroll', () => {
  videos.forEach(v => {
    const rect = v.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      v.style.opacity = 1;
      v.style.transform = 'translateY(0)';
    } else {
      v.style.opacity = 0;
      v.style.transform = 'translateY(50px)';
    }
  });
});
