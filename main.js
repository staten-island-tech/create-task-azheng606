const DOMSelectors = {
        box:document.querySelector(".box"),
        start: document.querySelector("#start"),
        end: document.querySelector("#end"),
        category:document.querySelector(".category"),
        ingredient:document.querySelector(".ingredient"),
        awman:document.querySelector(".awman"),
}

const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
const same = [];

DOMSelectors.end.addEventListener("click" ,function (event) { 
        event.preventDefault(); 
            clearfields();
async function recipes (URL) {
        try {
                const response = await fetch(URL);
                if (response.status != 200){
                    throw new Error(response.statusText);
                } 
                const all = await response.json ();

              for (let i = 0; i < all.meals.length; i++) {
                const each = all.meals [i]
                if (each.category === DOMSelectors.category.textContent) {
                  same.push (each);

                }}
        if (same.length === 0) {
        DOMSelectors.awman.textContent = "Oopsies nothing fouund ;)";  
        }
        else {for (let i = 0; i < same.length; i++) {
                const eachone = same [i]
                DOMSelectors.box.insertAdjacentHTML("beforeend", `
                <div class="card">
                <div class ="h1"> ${eachone.strMeal}</div>
                    <h3 class="card-text"> ${eachone.strCategory}</h3>
                    <h3 class="card-text"> ${eachone.strArea}</h3>
                    <h3 class="card-text"> ${eachone.strInstructions}</h3>
                  </div> 
                `)
        }
        }}
 

        catch (error) {
        console.log(error, "UH OH");
        DOMSelectors.awman.textContent = "Oopsies nothing fouund ;)";   
        };
        } recipes(URL);})
        

        function clearfields () {
                DOMSelectors.box.innerHTML= "";
                DOMSelectors.awman.innerHTML="";
                } 