const url = "http://localhost:3000/avatar";

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(url);
        
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const container = document.getElementById("container");
            data.forEach((avatar) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                <img src="images/${avatar.imagen}.jpeg" alt="${avatar.name}">
                <h3>${avatar.name}</h3>
                <div class="info">
                    <button class="delete" onclick="eliminarAvatar(${avatar.id})">Delete</button>
                    <button id="state" onclick="changeState(${avatar.id})">${avatar.state}</button>
                </div>
            `;
                container.appendChild(card);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const mostrarUno = async () => {
    try {
        const respuesta = await fetch(url);

        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const container = document.getElementById("container1");
            while(a=true, data.forEach((avatar) => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                <img src="images/${avatar.imagen}.jpeg" alt="${avatar.name}">
                <h3>${avatar.name}</h3>
                <div class="info">
                    <button class="delete" onclick="eliminarAvatar(${avatar.id})">Delete</button>
                    <button id="state" onclick="changeState(${avatar.id})">${avatar.state}</button>
                </div>
            `;
                const name = document.getElementById("name").value;
                console.log(name);
                if (avatar.name == name) {
                    container.appendChild(card);
                    a = false;
                };
            }));
        }
    } catch (error) {
        console.log(error);
    }
}

const agregarAvatar = async () => {
    try {
        const name = document.getElementById("nombre").value;
        const imagen = document.getElementById("imagen").value.toString();
        const state = "Vivo";
        const avatar = {name, imagen, state};
        a = await noDuplicate(name);
        if (a = true && name != "" && imagen != "") {
            const respuesta = await fetch(url, {
                method: "POST",
                body: JSON.stringify(avatar),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (respuesta.status === 201) {
                const data = await respuesta.json();
                console.log(data);
                const container = document.getElementById("container");
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                <img src="images/${data.imagen}.jpeg" alt="${data.name}">
                <h3>${data.name}</h3>
                <div class="info">
                    <button class="delete" onclick="eliminarAvatar(${data.id})">Delete</button>
                    <button id="state" onclick="changeState(${data.id})">${data.state}</button>
                </div>
            `;
                container.appendChild(card);
            }
        }else{
            alert("Ya existe un avatar con ese nombre");
        }        
    } catch (error) {
        console.log(error);
    }
}

const eliminarAvatar = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
}

const changeState = async (id) => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            const state = data.state;
            if (state == "Vivo") {
                data.state = "Muerto";
            } else {
                data.state = "Vivo";
            }
            await fetch(`${url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

const noDuplicate = async (name) => {
    try {
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            data.forEach((avatar) => {
                if (avatar.name == name) {
                    return false;              
                }
            });
        }else{
            return true;
        }
    } catch (error) {
        console.log(error);
    }
}



cargarPeliculas();
