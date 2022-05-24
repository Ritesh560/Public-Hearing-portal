fetch("https://api.jsonbin.io/b/6288f65f402a5b380206bbdc").then((data)=>{
  return data.json();
}).then((objectData)=>{
  console.log(objectData[0]);

  let tableData ="";
  let formData = "";

  objectData.map((values)=>{
      tableData += `<tr>
          <th scope="row">${values.id}</th>
          <td id = 'hover' onclick = "location.href = 'officer.html' ">${values.complaint_id}</td>
          <td id = 'hover' onclick = "location.href = 'officer2.html' ">${values.department}</td>
        </tr>`
        
        
        formData = `<label for=""> <span class="color"> Officer Name</span></label>
        <input type="text" name="officer_name" id="officer_name" value = "${values.officer_name}" >
        <label for=""> <span class="color"> Officer ID</span></label>
        <input type="text" name="officer_id" id="officer_id" value = ${values.officer_id}>
     ` 
    
  });
  
  document.getElementById("form").innerHTML = formData;
  document.getElementById("table_body").innerHTML=tableData;
});
