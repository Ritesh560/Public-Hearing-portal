var form = document.getElementById('form');
form.addEventListener('submit',function(e){

  e.preventDefault();
 
  var oid = document.getElementById('officer_id').value;
  var pwd = document.getElementById('officer_password').value ;
  
  fetch("https://ab25-2409-4051-2d96-24b7-6cb8-e6d3-a886-8973.in.ngrok.io/officerCredential", {
  method:"post",
  body:JSON.stringify({
    userId:oid,
    password:pwd
    }),
  headers:{
    "Content-Type":"application/json; charset = UTF-8"   
  }
})
.then(function(response){
  console.log(response)
  return response.json()

})
.then(function(data){
  console.log(data)
  var result = document.getElementById('result')
  result.innerHTML = `<p>Form is Submitted</p>`

})



})









/*
document.getElementById("complaint_id").onclick = () =>{

  fetch("https://76a1-2409-4051-2d8e-9f32-d31-383-f092-de53.in.ngrok.io/officerCredential")
  .then(data => {
  	 return data.json()
  }).then(data2 => {
  	 
  	 document.getElementById("info").innerHTML =        //make an ul list in the html code to and a div container 
  	   	 <ul>                                           //with id = "info"
  	 		<li>Officer Name : $(data2.Officer_name)</li>
        <li>Officer ID : $(data2.Officer_id)</li>
        
      	 </ul>


  })

}

*/