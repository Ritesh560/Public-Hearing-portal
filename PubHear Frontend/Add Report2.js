fetch("https://api.jsonbin.io/b/628913d805f31f68b3a08d7d").then((data)=>{
  return data.json();
}).then((objectData)=>{
  console.log(objectData[0]);

  let formData1 = "";
  let formData2 = "";
  let formData3 = "";
objectData.map((values)=>{
      formData1 = `<form action="" id = "form1">
                <label for=""> <span  class="color"> Officer Name</span></label>
                <input type="text" name="" id="" value="${values.officer_name}">
                <label for=""> <span class="color"> Officer ID</span></label>
                <input type="text" name="" id="" value="${values.officer_id}">
            </form>
     `
     formData2 = ` <form id = "form2">
        <div id="complaint_details" class="row g-3">
          <div class="col-md-6">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required value = ${values.name}>
          </div>
          <div class="col-md-6">
            <label for="father/husband">Father/Husband Name</label>
            <input type="text" id="father/husband" name="father/husband name" required value = ${values.fathername}>
          </div>
          <div class="col-md-3">
            <label for="number1">Mobile No.1</label>
            <input type="number" id="number1" name="Mobile number1"  required value = ${values.mobileno}>
          </div>
          <div class="col-md-5">
            <label for="emailId">Email ID</label>
            <input type="email" id="emailId" name="email" value = ${values.email}>
          </div>
          <div class="col-md-4">
            <label for="aadhar">Aadhar No.</label>
            <input type="text" id="aadhar" name="adhar number" value = ${values.aadhar}>
          </div>
        </div>
        </div>
      </form>
   `
       
      formData3 = ` <form action="" id = "form3">
        <div class=" container_2">
          <div class="">
            <div class=" "> <h3><p class="hc">Application</p></h3></div>
           <textarea  id="application" name="Application" cols="80" rows="10">${values.application}</textarea>
          </div>
          <hr>
          <div class=" ">
            <h3><p class="hc">Report</p></h3>
           <textarea  id="report" name="report" cols="80" rows="10"></textarea>
          </div>
          <input type="submit" class="submit">
        </div>
      </form>`
      
        });
  document.getElementById("form1").innerHTML = formData1;
  document.getElementById("form2").innerHTML = formData2;
  document.getElementById("form3").innerHTML = formData3;
})
 
function reportsub(){
  alert("Report has been submitted");
}










/*


var form = document.getElementById('form');
form.addEventListener('submit',function(e){

	e.preventDefault();

	var uid = document.getElementById('complaint_id').value;
	var aadhar = document.getElementById('aadhar').value ;
	var title = document.getElementById('title').value;
	var body =  document.getElementById('body').value;
	




/* ***Another Way***
document.getElementById('').onsubmit = (e)=>{
	e.preventDefault();
const url = "http://localhost"

var data = new URLSearchParams();
console.log(e.target);
for(const pair of new FormData(e.target)){
	data.append(pair[0],pair[1])
}
*/

/*
fetch("http://localhost:8080/addReport", {
	method:"post",
	body:JSON.stringify({
		Complaint_details_id:uid,
		adhar_number:aadhar,
		title:title,
		body:body
		
	}),
	headers:{
		"Content-Type":"application/json; charset = UTF-8"   
	}
})
.then(function(response){
	return reponse.json()
})

.then(funtion(data){
	console.log(data)
  var result = document.getElementById('result')
  result.innerHTML = `<p>Form is Submitted</p>`
})

})
*/