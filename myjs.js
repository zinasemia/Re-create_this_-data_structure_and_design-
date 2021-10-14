fetch("https://fullmind.eu/wpv2/wp-json/wp/v2/bike")
  .then(response => response.json())
  .then(showbike);


function showbike(bike) {
  console.log(bike);

  //Step 1: Chose the <template>'s content
  const templateElement = document.querySelector("template").content;

  //Step 2: Make a "clone"
  const myClone = templateElement.cloneNode(true);

  //Step 3: Change the content

  myClone.querySelector(".brandname").textContent = bike.brandname;
  myClone.querySelector("#price").textContent = bike.price;
  myClone.querySelector("#color").textContent = bike.color;
  myClone.querySelector("#stock").textContent = bike.stock;
  myClone.querySelector(".bikeimg").src = "https://fullmind.eu/wpv2…36rvCeqng-unsplash-1.jpg";
  //...

  const parent = document.querySelector("main");
  parent.appendChild(myClone);

}