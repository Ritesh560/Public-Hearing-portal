fetch("https://api.jsonbin.io/b/62890381449a1f3821e805a1").then((data)=>{
  return data.json();
  console.log(data);
}).then((objectData)=>{
  console.log(objectData);

  let formData1 = "";
  let formData2 = "";
  let formData3 = "";
  let tableData = "";

  objectData.map((values)=>{
      formData1 = `<form id="form1">
                <label for=""> <span class="color">Complaint ID</span></label>
                <input type="text" name="" id="" value="${values.complaint_id}">
            </form>
     `
     formData2 = `<form id = "form2">
                <label for="name"><span>Name</span></label>
                <input type="text" value="${values.name}">
                <label for="">Complaint ID</label>
                <input type="text" value="${values.complaint_id}" >
                <div>Complaint</div>
                <textarea cols="100" rows="10">${values.application}</textarea>
            </form>`
       
      formData3 = ` <form id = "form3">
                <label for="">Officer Name</label>
                <input type="text" value="${values.officer}">
                <label for="">Officer ID</label>
                <input type="text" value="${values.officer_id}" id="">
                <div>
                    Report
                </div>
                <textarea name=" " id="" cols="100" rows="10">${values.report}</textarea>

            </form>`
      tableData += `<tr>
                  <th scope="row">${values.id}</th>
                  <td>${values.complaint_id}</td>
                  <td>${values.department}</td>
                  <td>${values.status}</td>
                </tr>`

        });
  document.getElementById("form1").innerHTML = formData1;
  document.getElementById("table_body").innerHTML=tableData;
  document.getElementById("form2").innerHTML = formData2;
  document.getElementById("form3").innerHTML = formData3;
})

      function agree(){
        alert("Your response has been recorded");
      }

      function not_agree(){
        alert("Officials will review your case");
      }

      function home(){
        window.location.href = "index.html";
      }









