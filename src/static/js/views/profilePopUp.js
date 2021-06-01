import { deletePost, updatePost } from '../model/post.js';

export const modalProfile = {
  delete(container, postId) {
    const html = `
      <div class ="profile-modal">
        <h2> ¿Quieres eliminar tu reporte?</h2>
        <div>
          <p>Los elementos movidos a la papelera se eliminarán permanentemente</p>
          <button id ="btn-delete">Eliminar</button>
        </div>
      </div>`;
    container.innerHTML = html;
    const confirmBtn = document.querySelector('#btn-delete');
    confirmBtn.addEventListener('click', () => {
      deletePost(postId);
    });
  },
  edit(container, postId ) {
    const html = `
      <div class ="profile-modal">
      <h2>Editar Reporte</h2>
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
          <label for="reportDesc">Descripcion</label>
          <input name="reportDesc" id="reportDesc" type="text" autocomplete="off" required>
        </div>
        <p class="error" id="errorMsgReport"></p>
      </div>
      <button class="btn" id="btnPost">Actualizar</button>
      </div>`;
    container.innerHTML = html;


    const updatePostBtn = document.querySelector("#btnPost");

    updatePostBtn.addEventListener('click', () =>{
      let reportType = document.querySelector("#reportType").value;
      let description = document.querySelector("#reportDesc").value;
      updatePost(postId, reportType, description)
    })



  },
};
