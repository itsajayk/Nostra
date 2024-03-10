var productContainer = document.getElementById("products")
var search = document.getElementById( "search" )
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length; count=count+1){
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0){
            productlist[count].style.display = "none"
        }else{
            productlist[count].style.display = "block"
        }
    }
})


// check box filtering

var productContainer = document.getElementById("products");
var productBoxes = productContainer.querySelectorAll(".products-box");
var checkboxes = document.querySelectorAll(".filter-checkbox");

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        console.log("Checkbox clicked:", checkbox.value);
        
        var selectedFilters = [];
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                selectedFilters.push(checkbox.value);
            }
        });
        console.log("Selected filters:", selectedFilters);

        productBoxes.forEach(function(productBox) {
            var tagsElement = productBox.getAttribute("data-tags");
            if (tagsElement) {
                var tags = tagsElement.split(",");
                var isVisible = false; // Assume product is initially not visible
        
                // Check if any filters are selected
                if (selectedFilters.length === 0) {
                    isVisible = true; // If no filters are selected, show the product
                } else {
                    // Check if any selected filter matches the product's tags
                    selectedFilters.forEach(function(filter) {
                        if (tags.includes(filter)) {
                            isVisible = true;
                        }
                    });
                }
        
                // Set display based on visibility
                if (isVisible) {
                    productBox.style.display = "block";
                } else {
                    productBox.style.display = "none";
                }
            }
        });
        
        
        
    });
});
