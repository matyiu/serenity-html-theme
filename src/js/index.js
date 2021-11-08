import '../scss/main.scss';

const initPortfolio = () => {
    const images = Array.from(document.querySelectorAll('.portfolio-item-image'));
    initImages(images);
}

const initImages = (images) => {
    images.forEach(image => {
        const url = image.dataset.image;
        image.style.backgroundImage = `url('${url}')`;
    });
}

initPortfolio();