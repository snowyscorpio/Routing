const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./templates/page.html');
const aboutPage = readFileSync('./templates/about.html');
const contactPage = readFileSync('./templates/contact-us.html');
const homeStyles = readFileSync('./styles/style.css');
const homeImage = readFileSync('./assets/book.png');
const aboutImage = readFileSync('./assets/aBaby.png');
const homeLogic = readFileSync('./browser-app.js');


const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  console.log(url);
  // home page
  if (url === '/' || url === '/page') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(aboutPage);
    res.end();
  }
  // contact page
  else if (url === '/contact-us') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(contactPage);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  }

  // styles
  else if (url === '/styles/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  }
  // image
  else if (url === '/assets/book.png') {
    res.writeHead(200, { 'content-type': 'image/png' });
    res.write(homeImage);
    res.end();
  }
  // image 2
  else if (url === '/assets/aBaby.png') {
    res.writeHead(200, { 'content-type': 'image/png' });
    res.write(aboutImage);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
});

//listen for any incoming requests
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});




