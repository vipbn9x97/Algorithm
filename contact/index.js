var readFileSync = require("readline-sync");
var fs = require("fs");
var contacts = [];
function loadData() {
  var content = fs.readFileSync("./data.json");
  contacts = JSON.parse(content);
}

function showMenu() {
  console.log("1. Nhập dữ liệu");
  console.log("2. Sửa dữ liệu");
  console.log("3. Xóa contact");
}
function showCreateData() {
  let name = readFileSync.question("Name: ");
  let phoneNumber = readFileSync.question("Phone Number: ");
  var contact = {
    name: name,
    phoneNumber: parseInt(phoneNumber)
  };
  contacts.push(contact);
  content = JSON.stringify(contacts);
  fs.writeFileSync("./data.json", content);
}
function showEditData() {
  console.log(contacts);
  console.log("nhập số điện thoại muốn sửa");
  var options = readFileSync.question(">");
  for (let i = 0; i < contacts.length; i++) {
    if (options >= contacts.length) {
      console.log("Cant match any contacts");
      main();
    } else {
      let Name = readFileSync.question("Name:");
      let PhoneNumber = readFileSync.question("Phone Number: ");
      contacts[options].name = Name;
      contacts[options].phoneNumber = PhoneNumber;
      content1 = JSON.stringify(contacts);
      fs.writeFileSync("./data.json", content1);
      console.log(contacts);
      main();
    }
  }
}
function showDeleteData() {
  console.log(contacts);
  console.log("nhập số điện thoại muốn xóa");
  var options = readFileSync.question(">");
  for (let i = 0; i < contacts.length; i++) {
    if (options >= contacts.length) {
      console.log("Cant match any contacts");
      main();
    } else {
      contacts.splice(options, 1);
      content1 = JSON.stringify(contacts);
      fs.writeFileSync("./data.json", content1);
      console.log(contacts);
      main();
    }
  }
}
function showFindData() {
  console.log(contacts);
  console.log("nhập số điện thoại muốn tìm");
  var optionss = readFileSync.question(">");
  let namee = contacts.name;
  let ph = contacts.phoneNumber;
  
}
function main() {
  loadData();
  showMenu();
  var option = readFileSync.question(">");
  switch (option) {
    case "1":
      showCreateData();
      main();
      break;
    case "2":
      showEditData();
      main();
      break;
    case "3":
      showDeleteData();
      main();
      break;
    case "4":
      showFindData();
      main();
    default:
      console.log("wrong option");
      showMenu();
      break;
  }
}
main();
