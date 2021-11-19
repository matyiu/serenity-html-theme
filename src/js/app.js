import './animations';

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

const initResponsiveMenu = () => {
    const menu = document.querySelector('.menu.menu-responsive');
    const menuButton = document.querySelector('.menu-toggle');

    const toggleBtn = () => {
        const open = menu.dataset.open;

        menu.dataset.open = open === 'true' ? 'false' : 'true';
    }

    const closeMenu = (e) => {
        if (menu.dataset.open === 'true' && (e.target !== menuButton && !menuButton.contains(e.target))) {
            menu.dataset.open = 'false';
        }

        if (e.target.tagName.toLowerCase() === 'a') {
            e.target.click();
        }
    }

    menuButton.addEventListener('click', toggleBtn);
    window.addEventListener('mousedown', closeMenu);
}

initResponsiveMenu();
initPortfolio();