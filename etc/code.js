const url = "http://localhost:3000/avatar";


fetch(url, {
    method: "GET",
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const container = document.getElementById("container");
        data.forEach( (avatar) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="images/${avatar.imagen}.jpeg" alt="${avatar.name}">
                <h3>${avatar.name}</h3>
                <div class="info">
                    <button class="delete" onclick="eliminarAvatar(${avatar.id})">Delete</button>
                    <button class="state">${avatar.state}</button>
                </div>

            `;
            container.appendChild(card);
        });
    });
   
function eliminarAvatar(id) {
    fetch(url+"/"+id, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function buscarUno() {
    const name = document.getElementById("name").value;
    const a = true;
    console.log(id);
    fetch(url, {
        method: 'GET'
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            const container1 = document.getElementById("container1");
            data.while(a=true, (avatar) => {
                if(avatar.name == name){
                    const card = document.createElement("div");
                    card.classList.add("card");
                    container1.classList.add("container1");
                    card.innerHTML = `
                        <img src="images/${avatar.imagen}.jpeg" alt="${avatar.name}">
                        <h3>${avatar.name}</h3>
                        <div class="info">
                            <button class="delete" onclick="eliminarAvatar(${avatar.id})">Delete</button>
                            <button class="state">${avatar.state}</button>
                        </div>
                    `;
            container1.appendChild(card);
            a=false;
                }
        });
    });
}