const username = "Shruthi1248";

const projectGrid =
document.getElementById("project-grid");

async function loadProjects(){

if(!projectGrid){

return;

}

try{

const response=
await fetch(
`https://api.github.com/users/${username}/repos`
);

if(!response.ok){

throw new Error(
"Unable to fetch repositories"
);

}

const repos=
await response.json();

projectGrid.innerHTML="";

repos

.filter(repo=>

!repo.fork &&

repo.name !==
"Shruthi1248.github.io"

)

.sort(

(a,b)=>

new Date(b.updated_at)

-

new Date(a.updated_at)

)

.forEach(repo=>{

const card=
document.createElement("div");

card.className=
"project-card";

card.innerHTML=`

<h3>

${repo.name.replace(/-/g," ")}

</h3>

<p>

${repo.description ||

"AI / Data Science Project"}

</p>

<a

href="${repo.html_url}"

target="_blank"

class="btn-outline"

>

View Project

</a>

`;

projectGrid.appendChild(card);

});

}

catch(error){

console.error(error);

}

}

window.addEventListener(
"DOMContentLoaded",
loadProjects
);
