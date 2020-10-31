const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  // User input value
  const searchTerm = form.elements.query.value;
  // Call axios
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
  makeImages(res.data);
  form.elements.query.value = '';
});


// Loop through the data arrays
const makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        document.body.append(img);
    };
  };
};
