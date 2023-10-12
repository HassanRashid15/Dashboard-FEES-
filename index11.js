function myFunction(x) {
    x.classList.toggle("change");
 }
 




async function callAPi(){
let result = await fetch('./feesapi.json');
result = await result.json();
console.warn(result.Table_Detail);
document.getElementById('userdata').innerHTML = result.fees_Detail.map((user) => 
    `<tr>
    <td>${user.srno}</td>
    <td>${user.date}</td>
    <td>${user.st_id}</td>
    <td>${user.name}</td>
    <td>${user.c_id}</td>
    <td>${user.c_name}</td>
    <td>${user.T_Fees}</td>
    <td>${user.Fees_Status}</td>
    </tr>`
).join("")
    


}
callAPi()