
document.getElementById('getData').addEventListener('click', getTheData)

// https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

function getTheData() {
    console.log('This button was pressed.. here is your data')

    const apiURL = 'https://www.themealdb.com/api/json/v1/1/filter.php'
    let item = document.getElementById("item").value
    const url = apiURL + "?i=" + item

    fetch(url)
        .then(function (response) {
            // console.log(response.json());
            return (response.json());
        })
        .then(function(data){
            let meals = ` `
            console.log(data.meals);
            data.meals.map(function(n){
                meals += `
                    <li>${n.strMeal}</li>
                `
            })
            console.log(meals)
            document.getElementById('myRecipe').innerHTML = meals
        })
}