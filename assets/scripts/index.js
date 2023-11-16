import indexData from './indexData.js';

function getClassByIndex(index) {
    const classes = ['blue', 'purple', 'coral', 'mustard', 'green', 'turquoise'];
    return classes[index % classes.length];
}

function renderProjects() {
    const projectsSection = document.getElementById('projects');

    if (!projectsSection) {
        console.error('Projects section not found');
        return;
    }

    indexData.forEach((project, i) => {
        const article = document.createElement('article');
        article.classList.add('title');

        const image = document.createElement('img');
        image.src = `assets/images/${project.image}`;
        image.alt = project.title;

        const imageOverlay = document.createElement('div');
        imageOverlay.classList.add('image-overlay');
        imageOverlay.classList.add(getClassByIndex(i));

        const titleHeading = document.createElement('h3');
        titleHeading.textContent = project.title;

        const subtitleParagraph = document.createElement('p');
        const subtitleSpan = document.createElement('span');
        subtitleSpan.textContent = project.subtitle;
        subtitleParagraph.appendChild(subtitleSpan);

        const descriptionText = document.createTextNode(project.description);
        subtitleParagraph.appendChild(descriptionText);

        imageOverlay.appendChild(titleHeading);
        imageOverlay.appendChild(subtitleParagraph);

        article.appendChild(image);
        article.appendChild(imageOverlay);

        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons');

        project.icons.forEach(icon => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';

            const iconImage = document.createElement('img');
            iconImage.src = `assets/icons/${icon.icon}`;
            iconImage.alt = icon.alt;

            iconLink.appendChild(iconImage);
            iconsContainer.appendChild(iconLink);
        });

        imageOverlay.appendChild(iconsContainer);
        projectsSection.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);
