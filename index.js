function addData(){
    var name = document.getElementById("name")
    var phoneNum = document.getElementById("phoneNum")
    var address = document.getElementById("textarea")
    var city = document.getElementById("city")
    var state = document.getElementById("state")

    // console.log(name.value)
    // console.log(phoneNum.value)
    // console.log(address.value)
    // console.log(city.value)
    // console.log(state.value)

    postData(name,phoneNum,address,city,state)
}



function postData(name,phoneNum,address,city,state){
    url = "https://traveling-sprout-nigella.glitch.me/userAddress"

    options = {
        "method":"POST",
        "headers":{
            "Content-Type" : "application/json"
        },
        "body":JSON.stringify({
            "name":name.value,
            "phoneNum":phoneNum.value,
            "address":address.value,
            "city":city.value,
            "state":state.value
        })
    }

    fetch(url,options)
           .then(res => {
              if(res.ok){
                console.log("successfully stored the data")
              }
           })
           .catch(err => console.log(err))

}



function display(){
    var displayContainer = document.getElementById("display-container")

    fetch("https://traveling-sprout-nigella.glitch.me/userAddress")
        .then(response => response.json())
        .then(data =>{
            for(var ele of data){
                var nameContainer = document.createElement("p")
                var phContainer = document.createElement("p")
                var  addressContainer = document.createElement("p")
                var  cityContainer = document.createElement("p")
                var  stateContainer = document.createElement("p")
    
                var totalAddressContainer = document.createElement("div")

                nameContainer.innerText = ele.name
                phContainer.innerText = ele.phoneNum
                addressContainer.innerText = ele.address
                cityContainer.innerText = ele.city
                stateContainer.innerText = ele.state

                totalAddressContainer.appendChild(nameContainer)
                totalAddressContainer.appendChild(phContainer)
                totalAddressContainer.appendChild(addressContainer)
                totalAddressContainer.appendChild(cityContainer)
                totalAddressContainer.appendChild(stateContainer)


                displayContainer.appendChild(totalAddressContainer)
            }
        })
    }


display()