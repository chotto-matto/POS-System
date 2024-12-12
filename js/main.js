const pageArray = [
    document.getElementById("name-page"),
    document.getElementById("product-page"),
    document.getElementById("payment-page"),
    document.getElementById("QR-page")
]

const lumpiaPrice = 70;
const pastilPrice = 120;
var totalPrice;


function showModal() {
    document.getElementById("modal").classList.add("show");
    nextPage(0);
}

function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

function nextPage(index) {
    for (let index = 0; index < pageArray.length; index++) {
        pageArray[index].style.display = "none";
        
    }
    pageArray[index].style.display = "block"
}

function validate(index) {
    switch (index) {
        case 1:
            if (document.getElementById("name-input").value == null || document.getElementById("name-input").value == "") {
                document.getElementById("name-validator").style.visibility = "visible";
            }else{
                document.getElementById("name-validator").style.visibility = "hidden";
                nextPage(1);
            }
            break;
        case 2:
            if (document.getElementById("quantity-input").value == null || document.getElementById("quantity-input").value == "") {
                document.getElementById("quantity-validator").style.visibility = "visible";
            }else{
                document.getElementById("quantity-validator").style.visibility = "hidden";

                switch (document.getElementById("product-dropdown").value) {
                    case "Seitan Pastil":
                        totalPrice = pastilPrice * document.getElementById("quantity-input").value;
                        break;
                    case "Seitan Lumpia (10pc Pack)":
                        totalPrice = lumpiaPrice * document.getElementById("quantity-input").value;
                        break;
                    default:
                        break;
                }

                nextPage(2);

                document.getElementById("total-order-price").textContent = totalPrice;
            }
            break;
    
        default:
            break;
    }
}