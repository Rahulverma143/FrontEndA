const data = {
  email: "abc@gmail.com",
  password: "1234"
}
function abc (a){
  console.log(a.email)
  console.log(a.password)
  
  const email = `abc@gmail.com`
  const password = `1234`


  if(a.email == email && a.password === password){
    console.log(`both correct`)
  }
  else if(a.email != email){
    console.log(`email incorrect`)
  }
  else if(a.password != password){
    console.log(`password incorrect`)
  }
  else {
    console.log(`both incorrect`)
  }
}   

abc (data)