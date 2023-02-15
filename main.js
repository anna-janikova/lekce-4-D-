
//Úkol 1
let title = "Cesta do fantazie"

console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0, 6));
console.log(title.slice(12, 17))

//Úkol 2
let email = prompt ("Zadejte svůj email: ");
let atIndex = email.indexOf("@");
let parsedEmail = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1)
}
let {userName,domain} = parsedEmail
let data = document.querySelector(".data");
data.innerHTML = `
<p> Uživatelské jméno je <b>${userName}</b>.<p/>
<p> Uživatel používá doménu <b>${domain}</b>.</p>
`