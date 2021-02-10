let searchItem = document.getElementById("search_item");
let searchButton = document.getElementById("search_button");
let outerDiv = document.createElement("div");
outerDiv.classList.add("outerDiv");
search_button.addEventListener("click", (event)=>{
    event.preventDefault();
    let value = searchItem.value;
    let api = `http://api.tvmaze.com/search/shows?q=${value}`
    outerDiv.innerHTML = "";
    async function seriesDetails() {
        let response = await fetch(api);
        let data = await response.json();
        data.forEach((item) => {
            console.log(item);
            let innerDiv = document.createElement('div');
            innerDiv.classList.add("inner_div");
            let title = document.createElement('h3');
            title.innerText = item.show.name;
            let img = document.createElement('img');
            img.src = item.show.image.medium;
            let genre = document.createElement('p');
            genre.innerText = `Genre:${item.show.genres[0]}`;
            let premierdData = document.createElement('p');
            premierdData.innerText = `Premeried on:${item.show.premiered}`;
            let time = document.createElement('p');
            time.innerText = `Time:${item.show.runtime}min`;
            innerDiv.appendChild(img);
            innerDiv.appendChild(title);
            innerDiv.appendChild(genre);
            innerDiv.appendChild(premierdData);
            innerDiv.appendChild(time);
            outerDiv.appendChild(innerDiv);
            document.body.appendChild(outerDiv);
            
        });
    }
    seriesDetails();
})




