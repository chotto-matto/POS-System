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

function sendData(){
    var name = document.getElementById("name-input").value;
    var order = document.getElementById("product-dropdown").value;
    var quantity = document.getElementById("quantity-input").value;
    var status = document.getElementById("payment-dropdown").value;

    const postData = {
        name: name,
        order: order,
        quantity: quantity,
        status: status
    };
    
    // Send the POST request
    fetch('https://script.google.com/macros/s/AKfycbwRkxdBf0lsssum-OK_wuQD9aesxMxKAqLC1FOPO45zolXseC_MQzkVZAaeoPLYVIIr/exec', {
        mode: 'no-cors',
        method: 'POST',          // HTTP method (POST)
        headers: {
            'Content-Type': 'application/json',  // The content type of the request body
        },
        body: JSON.stringify(postData),  // Convert the data to a JSON string
    })
    .then(response => console.log(response))  // Parse the JSON response
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    console.log("details: " + name + ", " + order + ", " + quantity + ", " + status);

}