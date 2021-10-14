function getData() {
    fetch("https://fullmind.eu/wpv2/wp-json/wp/v2/bike")
      .then(function(response) {
        return response.json();
      })
      .then(showPosts);
  }
  
  function showPosts(posts) {
    console.log(posts);
  }