  fetch("https://fullmind.eu/wpv2/wp-json/wp/v2/bike")
    .then(function (response) {
      return response.json();
    })
    .then(bikes => bikes.forEach(showbike))


  function showbike(bike) {
    console.log(bike);

    //Step 1: Chose the <template>'s content
    const templateElement = document.querySelector("template").content;

    //Step 2: Make a "clone"
    const myClone = templateElement.cloneNode(true);

    //Step 3: Change the content
    myClone.querySelector("img").src = "https://fullmind.eu/wpv2/wp-content/uploads/2021/10/robert-bye-tG36rvCeqng-unsplash-150x150.jpg";
    myClone.querySelector(".brand").textContent = `${bike.brand}`;
    myClone.querySelector(".brandname").textContent = `${bike.brandname}`;
    myClone.querySelector(".price").textContent = "Price: " + `${bike.price}` + " dkk";
    myClone.querySelector(".color").textContent = "Color: " + `${bike.colors}`;
    myClone.querySelector(".stock").textContent = "In stock: " + `${bike.in_stock}`;

    //
    const parent = document.querySelector(".shop");
    parent.appendChild(myClone);

  
  }