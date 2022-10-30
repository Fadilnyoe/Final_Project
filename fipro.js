function togglePriceList(isShow) {
    const priceList = document.getElementById("price-list");

    if (isShow) {
        priceList.classList.remove("d-none")
    } else { 
        priceList.classList.add("d-none")
    }
}