let addBtn = document.querySelectorAll(".card  .addPro")
let counter = document.querySelector(".counter")
let addedPro = document.querySelector(".products")
let price_btn = document.querySelector(".price-btn")
let Tprice_div = document.querySelector(".Tprice-div")
let div = document.querySelector(".cartIcon")
let total = 0
let x = 0




addBtn.forEach( function (item){
    item.onclick = function () {
        counter.style.display = "block"
        let productName = item.closest(".card").querySelector("h2").textContent;
        addedPro.innerHTML += productName + " - "
        total += parseFloat(item.getAttribute("price"))
        x++
        counter.innerHTML = x
    }
}
)

price_btn.onclick = function () {
    Tprice_div.style.display = "block"
    Tprice_div.innerHTML = total.toFixed(2)
}

div.onmouseenter = function () {
    addedPro.style.display = "block"
    if (addedPro.innerHTML != "") {
        price_btn.style.display = "block"
    }
}

div.onmouseleave = function () {
    addedPro.style.display = "none"
    price_btn.style.display = "none"
    Tprice_div.style.display = "none"
}