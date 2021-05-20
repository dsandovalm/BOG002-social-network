import { createPost, reactPost } from "../model/post.js";

// He decidido meter acá todo lo relacionado con la visualización de posts

const modal = {
    create: `<h2>Nuevo Reporte</h2>
        <div>
            <div>
                <label for="reportType">Tipo de reporte</label> 
                <select name="reportType" id="reportType">
                <option value="accidente">Accidente</option>
                <option value="bloqueo">Bloqueo</option>
                <option value="infraccion">Infraccion</option>
                <option value="cierre">Cierre</option>
                <option value="manifestacion">Manifestacion</option>
                <option value="trafico">Tráfico</option>
                </select>
            </div>
            <div> Fecha
                <label for=""></label>
                <input name="" id="" type="date">
            </div>
            <div>
                <label for="uploadImg">Foto evidencia</label>
                <input name="uploadImg" id="uploadImg" type="file">
            </div>
            <div>
                <label for="reportDesc">Descripcion</label>
                <input name="reportDesc" id="reportDesc" type="text">
            </div>
        </div>
        <button class="btn" id="btnPost">Publicar</button>`,
    view(post,user){
        return `<div>
            <div> 
                <img class="profile-small" src="${user.profilepic}">
                <div>
                    <div>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                    <p>${user.name}</p>
                </div>
            </div>
            <div>
                <p>${post.date}</p>
                <p>Tipo de Reporte</p>
                <p>${post.type}</p>
            </div>
        </div>
        <div>
            <div>
                <h3>Descripción del reporte</h3>
                <p>${post.description}</p>
            </div>
            <img src="${post.img}"> 
        </div>
        <div class="reactions">
            <div class="btn-reaction-like" id="btnLike"> 
                <img src="" alt="Es Útil">
            </div>
            <div class="btn-reaction-doubt" id="btnDoubt"> 
                <img src="" alt="Lo dudo">
            </div>
            <div class="btn-reaction-dislike" id="btnDislike"> 
                <img src="" alt="No es Útil">
            </div>
        </div>`
    },
    render(htmlText) {
        const div = document.createElement('div');
        div.className = 'report'; // En serio es necesaria la clase?
        div.innerHTML = `${htmlText} <p id="close">Salir</p>`;
        return div;
    },
    afterRender(functions){
        functions.forEach(f => {
            let btn = document.getElementById(f.id);
            btn.addEventListener('click', f.method);
        });
        const btnClose = document.getElementById('close');
        btnClose.addEventListener('click', closeFunction);
    },
}

const buttons = {
    close: (closeFunction) => {
        return {
            id:'close', 
            method: closeFunction
        }
    },
    create: {
        id:'btnPost', 
        method: () => {
            let description = document.getElementById('reportDesc').value;
            let repImage = document.getElementById('uploadImg').files[0];
            let repType = document.getElementById('reportType').value;
            createPost({ lat: 0, lng: 0 }, repType, repImage, description);}
    }/* , 
    like: {
        id:'btnLike', 
        method: reactPost (postId,'like')
    },
    doubt: {
        id:'btnDoubt', 
        method: reactPost (postId,'doubt')
    },
    dislike: {
        id:'btnDislike', 
        method: reactPost (postId,'dislike')
    }, */
}

export const modalCreate = {
    render() { return modal.render(modal.create); },
    afterRender(closeFunction){
        modal.afterRender([buttons.close(closeFunction), buttons.create]);
    }
}

export const modalView = {
    render(post,user) {
        return modal.render(modal.view(post,user));
    },
    afterRender(closeFunction,postId){
        modal.afterRender([
            buttons.close(closeFunction), 
/*             buttons.like, 
            buttons.doubt,
            buttons.dislike */
        ]);
    }
}

