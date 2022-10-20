function submitData()
{
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value

    let password = document.getElementById('password').value
    
    let country = document.getElementById('nationality').value

    let month = document.getElementById('month').value
    let date = document.getElementById('date').value
    let year = document.getElementById('year').value

    let agreed = document.getElementById('agree').checked

    // console.log(username)
    // console.log(email)
    // console.log(password)
    // console.log(country)

    // console.log(month)
    // console.log(date)
    // console.log(year)

    // console.log(agreed)

    if(username.length == 0){
        document.getElementById('error').innerHTML = "Username can't be empty"
    }else if(email.length == 0){
        document.getElementById('error').innerHTML = "Please fill your email"
    }
    else if(!email.endsWith('.com') || !email.includes('@')  || email.indexOf('@')+1 == email.lastIndexOf('.com')|| email.indexOf('@')!= email.lastIndexOf('@')){
        document.getElementById('error').innerHTML = "Incorrect email format"
    }else if(password.length<=5){
        document.getElementById('error').innerHTML = "Password should have more than 5 characters"
    }else if(month == ""){
        document.getElementById('error').innerHTML = "Please fill in your birthday month"
    }else if(date == ""){
        document.getElementById('error').innerHTML = "Please fill in your birthday date"
    }else if(year==""){
        document.getElementById('error').innerHTML = "Please fill in your birthday year"
    }else if(country==""){
        document.getElementById('error').innerHTML = "Please select your nationality"
    }else if(agreed==false){
        document.getElementById('error').innerHTML = "You have to agree to user terms and conditions"
    }else{
        document.getElementById('error').innerHTML = ""
        let result = confirm("Pre Registration Success!")
    }



    
}