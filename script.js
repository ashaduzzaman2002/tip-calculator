const foodAmount = document.getElementById('food')
const tip = document.getElementById('tip')
const increment = document.getElementById('increment')
const person = document.getElementById('person')
const decrement = document.getElementById('decrement')
const total = document.getElementById('total')
let totalPerson = 1
person.innerText = totalPerson


// Function for calculate bill

let totalTip = 0
const billCalculator = () => {
    totalTip = (Number(foodAmount.value) * tip.value/100) + Number(foodAmount.value)
    
    let perPersonBill = (totalTip / totalPerson).toFixed(2)
    total.innerText = `₹${perPersonBill}`
}


// Increment function 

increment.onclick = () => {
    totalPerson += 1
    person.innerText = totalPerson
    billCalculator()
}

// Decrement function 

decrement.onclick = () => {
    if(totalPerson > 1){
        totalPerson -= 1
    }
    person.innerText = totalPerson
    billCalculator()
}
