let searchbutton = document.getElementsByClassName("searchbutton")[0]
let searchtext = document.getElementsByClassName("searchtext")[0]
let leftclass = document.getElementsByClassName("leftclass")[0]


async function loaddata(topic){
  const key = "cf9bff83912e4c79aae73ff4f50f64a2"
  let url = "https://newsapi.org/v2/everything?q="
  let p = await fetch(`${url}${topic}&from=2023-11-03&sortBy=publishedAt&apiKey=${key}`)
  let data = await p.json()
  console.log(data)
  let ihtml = ""
  for (index in data.articles){
    // console.log(data.articles[index])
    if(!data.articles[index].urlToImage){
      continue
    }
    ihtml +=
    ` <a href="${data.articles[index].url}" target="_blank"><div class="cards">
        <img src="${data.articles[index].urlToImage}" alt="image not suppporting in your brouser" class="cardsimages">
        <div class="cardtitle">${data.articles[index].title}</div>
     </div></a>`
  }
  document.getElementsByClassName("newscontainer")[0].innerHTML=ihtml;

}


window.addEventListener("load", function(){
  loaddata("india")
})

let middle = document.getElementsByClassName("middle")
Array.from(middle).forEach(element =>{
  element.addEventListener('click',function(){
    loaddata(element.innerText)
    leftclass.style.width = "0vw"
  })
})




searchbutton.addEventListener("click", function(){
  loaddata(searchtext.value)
})

function openleft(){
  console.log("okdone")
  leftclass.style.width = "50vw"
}
function removeleft(){
  leftclass.style.width = "0vw"
}





