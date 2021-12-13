const names = document.getElementById("name_input");
const pword = document.getElementById("pword_input");
users = []
 
function AddNewUser(){
    let newUser = {
        name: "",
        pwd: ""
    }
    newUser.name = names.value
    newUser.pwd = pword.value
    users.push(newUser)
    thisUser = users.find(object => object.name == names.value);
    console.log("This user is", thisUser)
    console.log("New User", newUser);
    console.log("All users", users);
  }
