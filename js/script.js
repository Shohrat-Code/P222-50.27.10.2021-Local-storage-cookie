let favorite = document.querySelectorAll("#products .icons .fa-heart");

for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener("click", function(e) {
        e.preventDefault();

        let id = this.closest(".card").id;
        let oldFavorites = localStorage.getItem("favorites");
        let newFavorite;

        if (oldFavorites == null) {
            newFavorite = id;
            this.style.color = "red";
        } else {
            let arr = oldFavorites.split(",");
            if (arr.find(item => item == id) == undefined) {
                newFavorite = oldFavorites + "," + id;
                this.style.color = "red";
            } else {
                let newArr = arr.filter(item => item != id);
                newFavorite = newArr.join(",");
                this.style.color = "black";
            }
        }

        localStorage.setItem("favorites", newFavorite);
        if (localStorage.getItem("favorites") != "") {
            document.querySelector(".cart-favorite").textContent = localStorage.getItem("favorites").split(",").length;
        } else {
            localStorage.removeItem("favorites");
            document.querySelector(".cart-favorite").textContent = "";
        }
    });
}

let oldFavorites = localStorage.getItem("favorites");
if (oldFavorites != null) {
    let idsArr = localStorage.getItem("favorites").split(",");
    let cards = document.querySelectorAll(".card");
    document.querySelector(".cart-favorite").textContent = idsArr.length;

    for (let i = 0; i < cards.length; i++) {
        if (idsArr.some(item => item == cards[i].id)) {
            cards[i].children[2].firstElementChild.style.color = "red";
        }
    }
}


let tabs = document.querySelectorAll("#tab-menu .tabs li");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        let index = this.dataset.index;
        let items = document.querySelectorAll("#tab-menu .content .item");

        document.querySelector(".show").classList.remove("show");

        for (let j = 0; j < items.length; j++) {
            if (items[j].dataset.index == index) {
                items[i].classList.add("show");
            }
        }
    });
}