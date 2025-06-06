function otp(){
  const otp = Math.ceil(Math.random() *10000)
  console.log(otp)

  const otp2 = Math.ceil(1000 + Math.random() *90000)
  console.log(otp2)
}
otp()


// output  4 digit eg. 2543
// output 5 digit eg. 25642