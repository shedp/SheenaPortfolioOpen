# Sheena Porfolio

This repository holds the code for my personal portfolio where the text and images are replace with placeholder Lorem Ipsum and pandas.

It is made with ReactJS and Tailwind CSS.

## Installation

- Download or clone this repo
  `git clone`

- Install all dependencies
  `npm install`

## db > db.js > projectData

- An array of objects that contain data for each project:

```
{
    title:,
    subtitle:,
    description:,
    image:,
    technologies: [{ name:, type:}],
    icons: [{icon:, link:, alt: "Read More"}],
  }
```

## Components >

### ActionButton

- This is the component of the button. It takes in 3 variables:

1. **content:** this is the call to action/text within the button
2. **shadowColor:** this is the color of the border of the button e.g `shadow-teal-300`
3. **textColor:** this is the text color of the button e.g `text-teal-300`
   _Note: you can add other styling to the button using the shadowColor or textColor variables_

### Card

- This is the component of the project cards. It takes in 2 variables:

1. **project:** this is project object from the ProjectData
2. **bgColor:**: this is the background color of the card e.g `bg-teal-300`

### Icon, Tags

- These are elements of the card component. They take in data from the project (project.icon and project.technologies)

### Contact

- This is the footer/contact content:
  **Customise the link paths**

### Modal

- This is the menu modal for mobile screens:

### Navbar

- This is a fully responsive navbar that opens the modal on mobile
  **Customise the logo**

  ### Section

- This is the template for each section. It contains 2 sections, the first section takes in 6 variables:

1. **sectionStyle**: any additional Tailwind styling you want to apply to the entire section
2. **title**: the title of the section
3. **titleStyle**: any additional Tailwind styling you want to apply to the title element
4. **subtitle**: the subtitle of the section
5. **subtitleStyle**: any additional Tailwind styling you want to apply to the subtitle element 6.**titleBorderStyle**: any styling you want to add to the border of the first section

The next section can contain any content you want: **children**

## Pages

#### Homepage

- This is the landing page that some with the 4 sections, title, skills, projects, project highlights which can be customised

### Aboutpage

- This is an about page where you can enter some text about yourself.

### Projectpage

- This is a page specifically for projects. It is in the form of cards
- The read more icon allows for linking to a specific projects page
- The cards are dynamically rendered from data in `db.js`

### Contactpage

- This is an empty page as the footer fills the page
