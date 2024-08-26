const teamSectionDOM = document.getElementById('team');
const teamMembers = ['Jonas','Maryte','Petras','Ona','Arvydas','Aldona','Zose','Juozapas','Antanas','Aloyzas','Martynas','Anastasija'];

let membersHTML = '';
for (const name of teamMembers) {
    membersHTML+= `<li class = "member">${name}</li>`;
}
teamSectionDOM.innerHTML = `<ul>${membersHTML}</ul>`;

const membersListDOM = document.getElementsByClassName('member');
console.log(membersListDOM);

for (const memberDOM of membersListDOM) {
    console.log(memberDOM.innerText);    
}
for (const memberDOM of membersListDOM) {
    memberDOM.innerText = '---' + memberDOM.innerText;    
}


/*
failas : header.js
-jis iskvieciamas kiekviename puslpyje
-jame yra funkcija header()
ji sugeneruoja i normalu headeri

<header>
    <img>
        <nav>
            <a Home>
            <a About>
            <a Services>    
        </nav>
</header>

issistatome i HTML ir isitikiname, jog galime naviguoti po projekto puslapius
 */