const DOMSelectors = {
        box:document.querySelector(".box"),
        start: document.querySelector("#start"),
        form: document.querySelector("#form"),
        end: document.querySelector("#end"),
        category:document.querySelector(".category"),
        ingredient:document.querySelector(".ingredient"),
        awman:document.querySelector(".awman"),
}


DOMSelectors.end.addEventListener("click" , async function recipes (event) { 
        event.preventDefault(); 
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
                if (each.strCategory === DOMSelectors.category.value) {
                  same.push (each);

                }}
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
                    <div class="card-inst"> ${"Instructions: " + eachone.strInstructions}</div>
                  </div> 
                `)
        }
        }}

        catch (error) {
        console.log(error, "UH OH");
        DOMSelectors.awman.textContent = "Error Nothing Found. ";   
        }; } ) 
        

        function clearfields () {
        DOMSelectors.box.innerHTML= "";
        DOMSelectors.awman.textContent="";
} 