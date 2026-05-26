const username = "Shruthi1248";

const projectGrid =
document.getElementById("project-grid");

async function loadProjects(){

if(!projectGrid){

return;

}

try{

const response =
await fetch(
`https://api.github.com/users/${username}/repos`
);

if(!response.ok){

throw new Error(
"Unable to fetch repositories"
);

}

const repos =
await response.json();

projectGrid.innerHTML="";

const filteredRepos = repos

.filter(repo=>

!repo.fork &&

repo.name!=="Shruthi1248.github.io"

)

.sort(

(a,b)=>

new Date(b.updated_at)

-

new Date(a.updated_at)

);

filteredRepos.forEach(repo=>{

const card =
document.createElement("div");

card.className =
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

if(projectGrid){

projectGrid.innerHTML=`

<div class="project-card">

<h3>

Projects Unavailable

</h3>

<p>

Unable to load repositories.

Please refresh later.

</p>

</div>

`;

}

}

}

loadProjects();


// Navbar navigation fix

document
.querySelectorAll("nav a")

.forEach(link=>{

link.addEventListener(

"click",

function(e){

e.preventDefault();

const targetId=

this.getAttribute("href");

const target=

document.querySelector(targetId);

if(target){

window.scrollTo({

top:

target.offsetTop-80,

behavior:"smooth"

});

}

}

);

});
