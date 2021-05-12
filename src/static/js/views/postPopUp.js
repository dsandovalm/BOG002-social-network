import { createPost } from "../model/post.js";

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
        createPost('0,0', repType, repImage, description);
    });

    const btnClose = document.getElementById('close');
    btnClose.addEventListener('click', closeFunction);
}
