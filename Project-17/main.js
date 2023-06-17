let usrLocationEl = document.querySelector(".user-location")
let mylocationBtnEl = document.querySelector(".myLocationBtn")

mylocationBtnEl.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getLocation);
    } else {
        usrLocationEl.innerHTML = "The geolocation is not supported in this browser"
    }
});

const getLocation = async (position) => {
    let reponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&
    lon=${position.coords.longitude}&format=json`);

    let data = await reponse.json();
    console.log(data);

    if (data.address.state_district != undefined) {
            usrLocationEl.innerText = `${data.address.state_district},${data.address.state},${data.address.country}`
    } else {
            usrLocationEl.innerText = `${data.address.state},${data.address.country}`

    }
}