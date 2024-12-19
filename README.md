# Routing Project

This repository contains a solution to a routing and server-side rendering exercise using Node.js.

## Exercise: Create a Routing System with HTML, CSS, and JavaScript

### Requirements:
1. Create a project folder named `Routing` to store all the files.
2. Inside the folder:
   - Create a subfolder named `templates` to store the HTML files.
   - Create a subfolder named `styles` for the CSS file.
   - Create a subfolder named `assets` to store images.
3. Add three HTML files in the `templates` folder:
   - `page.html`: Represents the home page.
   - `about.html`: Represents the "About Us" page.
   - `contact-us.html`: Represents the "Contact Us" page.
4. Add a CSS file (`style.css`) in the `styles` folder for styling the pages.
5. Add two image files in the `assets` folder:
   - `book.png`
   - `aBaby.png`
6. Create two JavaScript files (`app.js` and `browser-app.js`) in the main folder:
   - `app.js` will handle server-side routing.
   - `browser-app.js` will implement frontend interactivity.


### Project Structure:
```plaintext
Routing/
├── assets/
│   ├── book.png
│   ├── aBaby.png
├── styles/
│   ├── style.css
├── templates/
│   ├── page.html
│   ├── about.html
│   ├── contact-us.html
├── app.js
├── browser-app.js
```
- **Routing logic**: Implemented in `app.js` to serve different files based on the URL.
- **Interactive functionality**: Handled by `browser-app.js`.

### Solution Overview:

1. **Routing with Node.js**:
   - Use the `http` module to create a server.
   - Serve specific HTML pages (`/page`, `/about`, `/contact-us`) based on the requested route.
   - Serve external assets like CSS, JavaScript, and images.

2. **Frontend Interactivity**:
   - `browser-app.js` toggles navigation links dynamically using JavaScript.

3. **Styling**:
   - `style.css` defines the layout and appearance of the pages.

### Example Routes:
- `/`: Redirects to the home page (`page.html`).
- `/page`: Serves `page.html`.
- `/about`: Serves `about.html`.
- `/contact-us`: Serves `contact-us.html`.
- `/styles/style.css`: Serves the CSS file.
- `/assets/book.png`: Serves the first image.
- `/assets/aBaby.png`: Serves the second image.
- `/browser-app.js`: Serves the frontend JavaScript logic.

### How to Run:
1. Clone the repository.
2. Navigate to the project directory.
3. Install Node.js if not already installed.
(using `npm install`)
4. Run the following command to start the server:
   ```bash
   node app.js



Have a great day ♡

![CuteCat](https://github.com/user-attachments/assets/b3da6885-f24b-4de2-95b1-b1a0312de6a4)

