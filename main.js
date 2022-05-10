let gameSection = document.getElementById("game");
 document.getElementById("btn-game").addEventListener('click', getGame);

 function getGame(e) {
   fetch('product.json')
   .then((res) => res.json())
   .then((data) => {
     console.log(data)
     data.forEach((item) => {
       let section = 
       `
          <div class="game">
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Type: ${item.type}</p>
          </div>  
       `;
       gameSection.innerHTML += section;
     })
   })
   .catch((err) => console.log(`Error: ${err}`));
 }