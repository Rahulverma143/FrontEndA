function otp(a){
  let power = Math.pow(10,a)
  const otp = Math.ceil(Math.random() *power)
  console.log(otp)

  const otp2 = Math.ceil(1000 + Math.random() *9000)
  console.log(otp2)
}
otp(9)
// output   95322644
// output   2546