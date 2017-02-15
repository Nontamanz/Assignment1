
function myFunction() {
var root = 'https://jsonplaceholder.typicode.com';
$.ajax({
url: root + '/users',
method: 'GET'
}).then(function (data) {
//if(data[0].username == username){
// document.getElementById('name').innerHTML = data[0].username;
//}
var Username = document.getElementById("username").value;
for(i = 0;i<=data.length;i++){
if (Username == data[i].username) {
document.getElementById('name').innerHTML = data[i].name;
document.getElementById('mail').innerHTML = data[i].email;
document.getElementById('add').innerHTML = data[i].address.street + " " + data[i].address.suit + " " + data[i].address.city + " " + data[i].address.zipcode ;
document.getElementById('tel').innerHTML = data[i].phone;
document.getElementById('web').innerHTML = data[i].website;
document.getElementById('com').innerHTML = data[i].company.name;
}

}

});
}
