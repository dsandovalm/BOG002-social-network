import { createPost, reactPost } from '../model/post.js';
//import { geoFindMe } from '../model/location.js'

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
            <div>
                <label for="uploadImg">Foto evidencia</label>
                <input name="uploadImg" id="uploadImg" type="file" required>
            </div>
            <div>
                <label for="reportDesc">Descripcion</label>
                <input name="reportDesc" id="reportDesc" type="text" autocomplete="off" required>
            </div>
        </div>
        <button class="btn" id="btnPost">Publicar</button>`,
    view(post,user,time,url){
        return `<div class="flex">
            <div class="mid ">
                <div class="flex">
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
                    <p>${time}</p>
                    <p>Tipo de Reporte</p>
                    <p>${post.type}</p>
                </div>
                <div>
                    <h3>Descripción del reporte</h3>
                    <p>${post.description}</p>
                </div>
            </div>
            <div class="mid">
                <h3>Foto Evidencia</h3>
                <img class="mid" src="${url}">
                <div class="reactions">
                    <div class="btn-reaction-like" id="btnLike">
                        <img src="static/images/icons/btn-like.png" alt="Es Útil">
                    </div>
                    <div class="btn-reaction-doubt" id="btnDoubt">
                        <img src="static/images/icons/btn-doubt.png" alt="Lo dudo">
                    </div>
                    <div class="btn-reaction-dislike" id="btnDislike">
                        <img src="static/images/icons/btn-dislike.png" alt="No es Útil">
                    </div>
                </div>
            </div>
        </div>`
    },
    render(htmlText) {
        const div = document.createElement('div');
        div.className = 'report'; // En serio es necesaria la clase?
        div.innerHTML = `<img id = "close" src = "static/images/icons/icon-close.png">${htmlText}`;
        return div;
    },
    afterRender(functions){
        functions.forEach(f => {
            let btn = document.getElementById(f.id);
            btn.addEventListener('click', f.method);
        });
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
            createPost( repType, repImage, description);}
    }, 
    like: (postId) => {
        return {
            id:'btnLike', 
            method: () => { reactPost (postId,'like') }
        }
    },
    doubt: (postId) => {
        return {
            id:'btnDoubt', 
            method: () => { reactPost (postId,'doubt') } 
        }
    },
    dislike: (postId) => {
        return {
            id:'btnDislike', 
            method: () => { reactPost (postId,'dislike') }
        }
    },
}

export const modalCreate = {
    render() { return modal.render(modal.create); },
    afterRender(closeFunction){
        modal.afterRender([buttons.close(closeFunction), buttons.create]);
    }
}

export const modalView = {
    render(post,user,time,url) {
        return modal.render(modal.view(post,user,time,url));
    },
    afterRender(closeFunction,postId){
        modal.afterRender([
            buttons.close(closeFunction),
            buttons.like(postId) , 
            buttons.doubt(postId),
            buttons.dislike(postId)
        ]);
    }
}

