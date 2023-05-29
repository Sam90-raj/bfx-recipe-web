let searchBtn = document.querySelector(".searchbtn");
let getBtn = document.querySelector(".btn");
let closeBtn = document.querySelector("#close");

searchBtn.addEventListener("click", getingredients);
document.querySelector(".ingredients").addEventListener("click", getrecipe);
closeBtn.addEventListener("click", closerecipe);

function getingredients() {
  document.getElementById("head").style.display = "block";
  let input = document.querySelector("#search").value;
  let dish = "";
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((recipe) => {
      if (recipe.meals) {
        recipe.meals.forEach((meal) => {
          dish += `<div class="dish" id='${meal.idMeal}'>
                <div class="image">
                    <img src="${meal.strMealThumb}">
                </div>
                <div class="info">
                    <h2>${meal.strMeal}</h2>
                    <button class="btn">Get Recipe</button>
                </div>
            </div>`;

          document.querySelector(".ingredients").innerHTML = dish;
        });
      } else {
        location.assign("page.html");
      }
    });
}

function getrecipe(Data) {
  let container = Data.target.parentNode.parentNode;
  let html = '';
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${container.id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let meal = data.meals;

      meal = meal[0];
    
      html = `<div class="details">
    	    <h2>${meal.strMeal}</h2>
    	    <div class="category">Category : ${meal.strCategory}</div>
         <h3>Instructions:</h3>
    		<p>${meal.strInstructions}</p>
    		<div><a href="${meal.strYoutube}" target="_blank">View Recipe</a></div>
    	</div>`;
    

  document.querySelector(".details").innerHTML = html;
  document.querySelector(".details").parentElement.classList.add("display");
});
}

function closerecipe() {
  document.querySelector(".details").parentElement.classList.remove("display");
}
