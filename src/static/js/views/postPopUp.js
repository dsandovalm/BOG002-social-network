import { createPost, reactPost } from "../model/post.js";

export const newReport = () => {
    let htmlText = `
    <h2>Nuevo Reporte</h2>
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
    <button class="btn" id="btnPost">Publicar</button>
    <p id="close">Salir</p>`; 
    const div = document.createElement('div');
    div.className = 'report';
    div.innerHTML = htmlText;
    return div;
}

export function newReportAfterRender(closeFunction) {
    const btnPost = document.getElementById('btnPost');

    btnPost.addEventListener('click', () => {
        let description = document.getElementById('reportDesc').value;
        let repImage = document.getElementById('uploadImg').files[0];
        let repType = document.getElementById('reportType').value;
        createPost({ lat: 0, lng: 0 }, repType, repImage, description);
    });

    const btnClose = document.getElementById('close');
    btnClose.addEventListener('click', closeFunction);
}


export const showReport = (user,post) => {
    let htmlText = `
    <div>
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
    </div>`;
    const div = document.createElement('div');
    div.className = 'report';
    div.innerHTML = htmlText;
    return div;
}

export function newReportAfterRender(postId /*, closeFunction*/ ){
    const btnLike = document.getElementById('btnLike');
    btnLike.addEventListener('click', () => {
        reactPost (postId,'like')
    });
    const btnDoubt = document.getElementById('btnDoubt');
    btnDoubt.addEventListener('click', () => {
        reactPost (postId,'doubt')
    });
    const btnDislike = document.getElementById('btnDislike');
    btnDislike.addEventListener('click', () => {
        reactPost (postId,'dislike')
    });
    // const btnClose = document.getElementById('close');
    // btnClose.addEventListener('click', closeFunction);
}
