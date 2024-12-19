function submitValue(){
    const first = document.getElementById("first-input")
    const namePlace = first.value
    console.log("hello", namePlace);

    const last = document.getElementById("last-input")
    const lastPlace = last.value
    console.log("hello", lastPlace);

    const date = document.getElementById("date-input")
    const datePlace = date.value
    console.log("hello", datePlace);

    const male = document.getElementById("male-input")
    const malePlace = male.value
    console.log("hello", malePlace);

    const female = document.getElementById("female-input")
    const femalePlace = female.value
    console.log("hello", femalePlace);

    const father = document.getElementById("father-input")
    const fatherPlace = father.value
    console.log("hello", fatherPlace);

    const mother = document.getElementById("mother-input")
    const motherPlace = mother.value
    console.log("hello", motherPlace);

    
    const contact = document.getElementById("contact-input")
    const contactPlace = contact.value
    console.log("hello", contactPlace);

    
    const address = document.getElementById("address-input")
    const addressPlace = address.value
    console.log("hello", addressPlace);

    
    const section = document.getElementById("class-input")
    const sectionPlace = section.value
    console.log("hello", sectionPlace);

    
    const roll = document.getElementById("roll-input")
    const rollPlace = roll.value
    console.log("hello", rollPlace);


    const firstValue = document.getElementById("first-value")
        firstValue.innerText = namePlace

    const lastValue = document.getElementById("last-value")
    lastValue.innerText = lastPlace

    const datevalue =document.getElementById("date-value")
    datevalue.innerText = datePlace

    const malevalue =document.getElementById("male-value")
    malevalue.innerText = malePlace

    const femalevalue =document.getElementById("female-value")
    femalevalue.innerText = femalePlace

    const fathervalue =document.getElementById("father-value")
    fathervalue.innerText = fatherPlace

    const mothervalue =document.getElementById("mother-value")
    mothervalue.innerText = motherPlace

    const contactvalue =document.getElementById("contact-value")
    contactvalue.innerText = contactPlace

    const addressvalue =document.getElementById("address-value")
    addressvalue.innerText = addressPlace

    const sectionvalue =document.getElementById("class-value")
    sectionvalue.innerText = sectionPlace

    const rollvalue =document.getElementById("roll-value")
    rollvalue.innerText = rollPlace
        const popup = document.getElementById("contact-popup")
        console.log(popup.classList)
        popup.setAttribute("class", "bg-[#00000050] fixed w-full h-full left-0 top-0")
        console.log(popup.classList)

        console.log(popup.attributes)
    
}
function closePopUP(){
    const popup = document.getElementById("contact-popup")
    popup.setAttribute("class", "bg-[#00000050]  hidden")
}


