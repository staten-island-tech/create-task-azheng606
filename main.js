const DOMSelectors = {
        box:document.querySelector(".box"),
        form: document.querySelector("#form"),
        start: document.querySelector("#start"),
        category:document.querySelector(".category"),
        place:document.querySelector(".place"),
}

const NAMEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="
        

            async function getData() {
                try {
                    const response = await fetch(NAMEURL);
                    if (response.status != 200){
                        throw new Error(response.statusText);
                    }
                    const all = await response.json ();
                    console.log (all);
                    const lolz = all.meals.filter((meals)=>meals.strArea === "Vegetarian")
                    lolz.forEach((el)=> { DOMSelectors.box.insertAdjacentHTML("beforeend", `
                    <div class="container">
                    <div class="card">
                    <div class="front">
                    <div class ="name"> ${el.strMeal}</div>
                    </div>
                    <div class="back">
                    <div class ="shortfilms">  ${"Meal: "+ el.strMeal} </div>
                   </div>
                    </div></div>`)})
                    
                    
                  } 
            catch (error) {
            console.log(error, "UH OH");
            DOMSelectors.awman.textContent = "Oopsies nothing fouund ;)";   
            };
            } 
            getData(NAMEURL)
            
             
        