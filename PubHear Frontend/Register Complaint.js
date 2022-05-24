var form = document.getElementById('form');
form.addEventListener('submit',function(e){

	e.preventDefault();

	var name = document.getElementById('name').value;
	var fname = document.getElementById('father/husband').value ;
	var mno = document.getElementById('number1').value;
	var gen =  document.getElementById('gender').value;
	var mail = document.getElementById('email').value;
	var adhar = document.getElementById('aadhar').value;
	var dept = document.getElementById('department').value;
	var gri_cat = document.getElementById('Grievance_type').value;
	var app_det = document.getElementById('application').value;
	var distr = document.getElementById('District').value;
	var tehsil = document.getElementById('Tahsheel').value;
	var block = document.getElementById('Block').value;
	var village = document.getElementById('Village').value;
	var rajsva = document.getElementById('Rajasva').value;
	var thana = document.getElementById('Thana').value;
	var res_add = document.getElementById('residential_address').value;

fetch("http://localhost:8080/registerComplaint", {
	method:"post",
	body:JSON.stringify({
		name:name,
		father_name:fname,
		mobile_number:mno,
		gender:gen,
		email:mail,
		adhar_number:adhar,
		reference_type:"reference",
		officer_id:1,
		department:dept,
		grievance_category:gri_cat,
		area:"yahi kaa",
		application_details:app_det,
		distict:distr,
		tehsil:tehsil,
		block:block,
		village_panchayat:village,
		rajsva_village:rajsva,
		thana:thana,
		residencial_address:res_add

	}),
	headers:{
		"Content-Type":"application/json; charset = UTF-8"   
	}
})
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data)
	var result = document.getElementById('result')
	result.innerHTML = `<p>Form is Submitted
	                       Your Complaint ID : 3348</p>`

})



})

function subreg(){
	alert("Your form has been submitted,Your Complaint ID : 3348");
}