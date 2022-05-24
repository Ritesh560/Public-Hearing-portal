
var form = document.getElementById('form');
form.addEventListener('submit',function(e){

	e.preventDefault();

	var uid = document.getElementById('complaint_id').value;
	var pwd = document.getElementById('officer_password').value ;
	var name = document.getElementById('name').value;
	var oid =  document.getElementById('officer_id').value;
	




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


fetch("https://890c-2409-4051-2e8a-ee06-3877-7e41-b34d-4153.in.ngrok.io/createCredentails", {
	method:"post",
	body:JSON.stringify({
		userId:uid,
		password:pwd,
		name:name,
		officer_id:oid
		
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
})

})
