const DOMSelectors = {
        box:document.querySelector(".box"),
        start: document.querySelector("#start"),
        form: document.querySelector("#form"),
        end: document.querySelector("#end"),
        category:document.querySelector(".category"),
        area:document.querySelector(".area"),
        ingredient:document.querySelector(".ingredient"),
        awman:document.querySelector(".awman"),
}

async function recipes (categoryinput) { 
        clearfields();
        const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const same = [];
        try {
                const response = await fetch(URL);
                if (response.status != 200){
                    throw new Error(response.statusText);
                } 
                const all = await response.json ();

              for (let i = 0; i < all.meals.length; i++) {
                const each = all.meals [i]
                if (each.strCategory.toLowerCase() === categoryinput.toLowerCase() ) {
                  same.push (each);
                }
        }
        if (same.length === 0) {
        DOMSelectors.awman.textContent = "Nothing Found. Search Something Else?";  
        }
        else {
                for (let i = 0; i < same.length; i++) {
                const eachone = same [i]
                DOMSelectors.box.insertAdjacentHTML("beforeend", `
                <div class="card">
                <div class="name"> ${"Meal Name: "+ eachone.strMeal} </div>
                    <div class="card-text"> ${"Category: " + eachone.strCategory}</div>
                    <div class="card-text"> ${"Area: "+ eachone.strArea}</div>
                    <img src= ${eachone.strMealThumb} class="card-img">
                    <div class="ing"> ${eachone.strIngredient1} ${eachone.strMeasure1}</div>
                    <div class="ing"> ${eachone.strIngredient2}  ${eachone.strMeasure2}</div>
                    <div class="ing"> ${eachone.strIngredient3}  ${eachone.strMeasure3}</div>
                    <div class="ing"> ${eachone.strIngredient4}  ${eachone.strMeasure4}</div>
                    <div class="ing"> ${eachone.strIngredient5}  ${eachone.strMeasure5}</div>
                    <div class="ing"> ${eachone.strIngredient6}  ${eachone.strMeasure6}</div>
                    <div class="ing"> ${eachone.strIngredient7}  ${eachone.strMeasure7}</div>
                    <div class="ing"> ${eachone.strIngredient8}  ${eachone.strMeasure8}</div>
                    <div class="ing"> ${eachone.strIngredient9}  ${eachone.strMeasure9}</div>
                    <div class="ing"> ${eachone.strIngredient10}  ${eachone.strMeasure10}</div>
                    <div class="ing"> ${eachone.strIngredient11}  ${eachone.strMeasure11}</div>
                    <div class="ing"> ${eachone.strIngredient12}  ${eachone.strMeasure12}</div>
                    <div class="ing"> ${eachone.strIngredient13}  ${eachone.strMeasure13}</div>
                    <div class="ing"> ${eachone.strIngredient14}  ${eachone.strMeasure14}</div>
                    <div class="ing"> ${eachone.strIngredient15}  ${eachone.strMeasure15}</div>
                    <div class="ing"> ${eachone.strIngredient16}  ${eachone.strMeasure16}</div>
                    <div class="ing"> ${eachone.strIngredient17}  ${eachone.strMeasure17}</div>
                    <div class="ing"> ${eachone.strIngredient18}  ${eachone.strMeasure18}</div>
                    <div class="ing"> ${eachone.strIngredient19}  ${eachone.strMeasure19}</div>
                    <div class="ing"> ${eachone.strIngredient20}  ${eachone.strMeasure20}</div>


                    <div class="card-inst"> ${"Instructions: " + eachone.strInstructions}</div>
                  </div> 
                `)
        }
        }}

        catch (error) {
        console.log(error, "UH OH");
        DOMSelectors.awman.textContent = "Error Nothing Found. ";   
        }; clearvalue();} 



        DOMSelectors.end.addEventListener("click" , function (event){
                event.preventDefault(); 
                recipes(DOMSelectors.category.value);

        })
        
function clearfields () {
        DOMSelectors.box.innerHTML= "";
        DOMSelectors.awman.innerHTML="";

} 

function clearvalue () { 
        DOMSelectors.category.value= "";
}