const HomePage = () => {
  // We can call useParams() here to get the params,
  // or in any child element as well!
 // ...
 let pagename = "Home";
  return `<h1>Hello World! with ${pagename}</h1>`;
}

export default HomePage;