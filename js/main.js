let cutMovies = movies.slice(0,20)

let result = cutMovies.sort((a, b) => String(a.Title).toLowerCase() > String(b.Title).toLowerCase()? 1 : -1)


const elWrapper =document.querySelector("#wrapper");


for (let i = 0; i < cutMovies.length; i++) {

    var newList = document.createElement("div");
    newList.setAttribute("class" ,  "item border border-black ms-3 mt-2")

    var newImg = document.createElement("img");
    newImg.setAttribute("src", `http://i3.ytimg.com/vi/${cutMovies[i].ytid}/maxresdefault.jpg`)
    newImg.setAttribute("class", "img")


    var newTextH6 = document.createElement("h6");
    newTextH6.textContent = cutMovies[i].Title
    newTextH6.setAttribute("class" , "text-danger ps-3 pt-2");

    var newTextYear = document.createElement("p");
    newTextYear.textContent ="Year : " + cutMovies[i].movie_year
    newTextYear.setAttribute("class" , "text-primary ps-3 pt-3");


    var newTextRate = document.createElement("p");
    newTextRate.textContent = "Rating : " + cutMovies[i].imdb_rating
    newTextRate.setAttribute("class" , "text-warning ps-3 pt-2");


    var newLink = document.createElement("a");
    newLink.setAttribute("href", `https://www.youtube.com/watch?v=${cutMovies[i].ytid}`)
    newLink.setAttribute("target", "_blank")
    newLink.setAttribute("class", "btn btn-outline-primary ms-2 mb-2")
    newLink.textContent = "Watch"

    var newButton = document.createElement("button")
    newButton.setAttribute("class", "btn btn-outline-success ms-2 mb-2")
    newButton.textContent = "MORE INFO"

    var newButton11 = document.createElement("button")
    newButton11.setAttribute("class", "btn btn-outline-danger ms-2 mb-2")
    newButton11.textContent = "BOOKMARKS"

    
    elWrapper.appendChild(newList)
    newList.appendChild(newImg)
    newList.appendChild(newTextH6)
    newList.appendChild(newTextYear)
    newList.appendChild(newTextRate)
    newList.appendChild(newLink)
    newList.appendChild(newButton)
    newList.appendChild(newButton11)

    
}









