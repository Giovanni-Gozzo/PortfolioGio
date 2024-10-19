document.addEventListener('DOMContentLoaded', function() {
  const image = document.querySelector('img[src="images/image2*.png"]');

  image.addEventListener('click', function() {
    const imageUrl = this.src;
    window.open(`image-viewer.html?src=${encodeURIComponent(imageUrl)}`, '_blank');
  });
});

function createStars() {
  const container = document.querySelector('.unique');
  const starCount = window.innerWidth <= 768 ? 100 : 10000;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = '1px';
    star.style.height = '1px';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    container.appendChild(star);
  }
}

createStars();