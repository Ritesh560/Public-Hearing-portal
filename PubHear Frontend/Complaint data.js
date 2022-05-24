var form = document.getElementById('form');
form.addEventListener('submit',function(e){

  e.preventDefault();

  var aadhar = document.getElementById('aadhar').value;

fetch("https://ab25-2409-4051-2d96-24b7-6cb8-e6d3-a886-8973.in.ngrok.io/fetchComplaintData", {
  method:"post",
  body:JSON.stringify({
    aadhar:aadhar
    }),
  headers:{
    "Content-Type":"application/json; charset = UTF-8"   
  }
})
.then(function(response){
  return response.json()
})
.then(function(data){
  console.log(data)
  var result = document.getElementById('result')
  //result.innerHTML = `<p>Form is Submitted</p>`

})



})









