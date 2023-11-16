import projectData from './projectData.js';

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

    projectData.forEach((project, i) => {
        const article = document.createElement('article');
        article.classList.add('project')

        const divTile = document.createElement('div');
        divTile.classList.add('tile');
        divTile.classList.add(getClassByIndex(i));

        const titleHeading = document.createElement('h3');
        titleHeading.textContent = project.title;

        const subtitleParagraph = document.createElement('p');
        const subtitleSpan = document.createElement('span');
        subtitleSpan.textContent = project.subtitle;
        subtitleParagraph.appendChild(subtitleSpan);

        const descriptionText = document.createTextNode(project.description);
        subtitleParagraph.appendChild(descriptionText);

        divTile.appendChild(titleHeading);
        divTile.appendChild(subtitleParagraph);

        const img = document.createElement('img');
        img.src = `assets/images/${project.image}`;
        img.alt = project.title;
        img.classList.add('img-tile');

        // Appending elements in different order based on even or odd index
        if (i % 2 === 0) {
            article.appendChild(divTile);
            article.appendChild(img);
        } else {
            article.appendChild(img);
            article.appendChild(divTile);
        }

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

        divTile.appendChild(iconsContainer);
        projectsSection.appendChild(article);
        projectsSection.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', renderProjects);
