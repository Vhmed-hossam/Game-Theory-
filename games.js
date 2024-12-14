var loading = document.getElementById("loading");
var pixel = document.getElementById("pixel");
var sailing = document.getElementById("sailing");
var permadeath = document.getElementById("permadeath");
var superhero = document.getElementById("superhero");
var mmorpg = document.getElementById("mmorpg");
var card = document.querySelector(".card");
var developer = document.querySelector(".developer");
var buttons = document.getElementsByClassName("btn");
var Name = document.getElementsByClassName("name");
var category = document.querySelector(".categ");
var img = document.getElementsByClassName("image");
resultss = document.getElementById("results");
let currentGameTitle = "";
function showLoading() {
  loading.style.display = 'block';
}
function hideLoading() {
  loading.style.display = 'none';
}
async function apithegame(selectedCategory = 'mmorpg') {
  var url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${selectedCategory}`;
  var options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'aba694f1f9msh9044e466c201334p183470jsn1a34cd63863e',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    },
  };
  showLoading();
  try {
    var response = await fetch(url, options);
    var result = await response.json();
    if (result.length > 0) {
      result.forEach((game, index) => {
        if (Name[index]) {
          Name[index].textContent = game.title;
          img[index].src = game.thumbnail;
          var developerElement = document.querySelector(`.developer-${index}`); 
          if (developerElement) {
            developerElement.textContent = game.developer;
           alert(developerElement.textContent);
          }
        }
      });
    }
    setupButtons(result); 
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    hideLoading();
  }
}
resultss.innerHTML = "";
function setupButtons(result) {
  Array.from(buttons).forEach((button, index) => {
    button.addEventListener("click", () => {
      if (Name[index]) {
        resultss.innerHTML = `
                 <div class="d-flex align-items-center justify-content-around w-50 m-auto">
     <div><img class="card-img-top image w-100 rounded" src="${result[index].thumbnail}"></div>
      <div class="p-1 text-light">
      <h2 class="p-0 m-0">${result[index].title}</h2>
      <p>Developer: ${result[index].developer}</p>
      <p>Genre: ${result[index].genre}</p>
      <button class="rounded paddmr" id="close" onclick="Close()"><i class="fa-solid fa-xmark"></i></button>
      </div></div>
        `
        var close = document.getElementById("close");
        close.addEventListener("click", () => {
          resultss.innerHTML = "";
        })
        ;
      } else {
        alert("No title available.");
      }
      if (developer[index]) {
        alert(developer[index].textContent);
      }
    });
  });
  Array.from(buttons).forEach((button, index) => {
    button.addEventListener("click", () => {
      if (Name[index]) {
      } else {
        alert("No title available.");
      }
    });
  });
}
function classList() {
  var categories = ['superhero', 'shooter', 'pixel', 'sailing', 'permadeath', 'mmorpg'];
  categories.forEach((category) => {
    var element = document.getElementById(category);
    element.addEventListener('click', () => {
      element.classList.add('selected');
      resetOtherCategories(category);
      apithegame(category);
    });
  });
}
function resetOtherCategories(selectedCategory) {
  const categories = ['superhero', 'shooter', 'pixel', 'sailing', 'permadeath', 'mmorpg'];
  categories.forEach((category) => {
    if (category !== selectedCategory) {
      document.getElementById(category).classList.remove('selected');
    }
  });
}
function Close() {
  var close = document.getElementById("close");
  alert(clicked
  );
}
  thecardscats.innerHTML =  `<div class="col-md-3 rounded">
         <div class="card-body rounded shader bg-transparent">
            <div>
               <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
                  <i class="fa-solid fa-star p-0 m-0"></i></div>
               <img class="card-img-top image" src="">
            </div>
            <figcaption>
               <div class="d-flex justify-content-between wedth">
                  <h6 class="text-light m-0 p-0 name" id="Name"></h6>
                  <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
               </div>
               <div class="p-1">
                  <p class="m-0">Made by: <span class="developer" id="creator">NCSoft</span></p>
               </div>
            </figcaption>
         </di>
         <footer class="card-footer small d-flex justify-content-between">
            <span class="badge badge-color categ">MMORPG</span>
            <span class="badge badge-color">PC (Windows)</span>
         </footer>
      </div>
      </div>
      <div class="col-md-3 rounded">
         <div class="card-body rounded shader bg-transparent">
            <div>
               <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>10</p>
                  <i class="fa-solid fa-star p-0 m-0"></i></div>
               <img class="card-img-top image" src="">
            </div>
            <figcaption>
               <div class="d-flex justify-content-between wedth">
                  <h6 class="text-light m-0 p-0 name" id="Name">Throne of liberty</h6>
                  <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
               </div>
               <div class="p-1">
                  <p class="m-0">Made by: <span class="developer" id="creator">miHoYo</span></p>
               </div>
            </figcaption>
         </di>
         <footer class="card-footer small d-flex justify-content-between">
            <span class="badge badge-color">Action RPG</span>
            <span class="badge badge-color">PC (Windows)</span>
         </footer></div>
    </div>  
    <div class="col-md-3 rounded">
         <div class="card-body rounded shader bg-transparent">
            <div>
               <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
                  <i class="fa-solid fa-star p-0 m-0"></i></div>
               <img class="card-img-top image" src="">
            </div>
            <figcaption>
               <div class="d-flex justify-content-between wedth">
                  <h6 class="text-light m-0 p-0 name" id="Name">Genshin impact</h6>
                  <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
               </div>
               <div class="p-1">
                  <p class="m-0">Made by: <span class="developer" id="creator">Level infinite</span></p>
               </div>
            </figcaption>
         </di>
         <footer class="card-footer small d-flex justify-content-between">
            <span class="badge badge-color">MMORPG</span>
            <span class="badge badge-color">PC (Windows)</span>
         </footer></div>  
  </div>
  <div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Genshin Impact</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Level infinite</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer>
</div>
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Dark Orbit Reloaded</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Bigpoint</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>
</div>  
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Lost Ark</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Smilegate RPG</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div> 
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Titan Revenge</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Game Hollywood Games</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer>
</div>
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Diablo Immortal</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Blizzard Entertainment</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>
</div>  
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Flyff Universe</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Gala Lab</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>  
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Phantasy Star Online 2 New Genesis</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer" id="creator">Sega</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer>
</div>
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Eternal Fury</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer"id="creator">R2 Games</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>
</div>  
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Palia</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer"id="creator">Singularity Six</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>  
</div>  
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">League of Angels - Heaven's Fury</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer"id="creator">Yoozoo Games</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer>
</div>
</div>
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Star Trek Online</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer"id="creator">Cryptic Studios</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>
</div>  
<div class="col-md-3 rounded">
   <div class="card-body rounded shader bg-transparent">
      <div>
         <div class="d-flex position-absolute rating align-items-center justify-content-between rounded-pill z-3"><p>8.3</p>
            <i class="fa-solid fa-star p-0 m-0"></i></div>
         <img class="card-img-top image" src="">
      </div>
      <figcaption>
         <div class="d-flex justify-content-between wedth">
            <h6 class="text-light m-0 p-0 name" id="Name">Bright shores</h6>
            <button class="btn rounded thebuton" id="button"><p class="m-0">View</p></button>
         </div>
         <div class="p-1">
            <p class="m-0">Made by: <span class="developer"id="creator">Fen Research LTD</span>
         </div>
      </figcaption>
   </di>
   <footer class="card-footer small d-flex justify-content-between">
      <span class="badge badge-color">MMORPG</span>
      <span class="badge badge-color">PC (Windows)</span>
   </footer></div>`




classList();
apithegame(); 
setupButtons();