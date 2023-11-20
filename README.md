# SheenaPorfolio
 This repository holds the code for my personal portfolio where the text and images are replace with placholder Lorem Ipsum and pandas.

 It is made with Vanilla CSS and Vanilla Javascript.

 ## Pages
 ### index.html
- This is the landing page - in the **About** section, write a short introduction about yourself and,
 link your CV.
- In the **Skills** section, you can list your skill set.
- In **Featured Projects** is an overview of your projects, including an image, a title and a short description (2 tiers). The cards are dynamically rendered from data in `assets/scripts/indexData.js`
    *Note that the cards are not flexible hight-wise: keep your descriptions short & sweet!
- You can link to the delpyed product, a readmore page or the Github repo from the icons
- It contains a **Contact** footer where you can link you email, Linkedin, and Github.

### about.html
- This is an about page where you can enter some text about yourself.

### projects.html
- This is a page specifically for projects. It is in the form of cards but with the image and text togther, allowing for more detail.
- If you want to add more detail on the project, I'd recommend linking to a sperate page `./project/project_about.html`.
- The cards are dynamically rendered from data in `assets/scripts/projectData.js` - note that you can use the same data from `indexData.js` if preferred.

### contact.html
- This is a dedicated space for the contact details
- Note that contact details are in all pages as a footer.

## Styles
### main.css
- This is the global styling sheet which also contain styleing classes which you can add on any element such as `.text-purple` or `.text-blue`
### footer.css
- This sheet also contain styles for the `contact.html` page

## Scripts
### *Data.js
- As mentioned above, these are data files that allows dynamic rendering
### index.js & projects.js
- These render the cards in their respective pages using the `Data.js` data
### nav.js
- This script handles the menu toggle functionality for responsiveness

## Images & Icons
- Images for projects go inside the `./assets/images` folder
- Icons and logos go inside the `./assets/icons` folder
