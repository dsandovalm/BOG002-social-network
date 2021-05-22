export const renderProfile = (user) => {
  let description = ( user.description == '' ? 'Agrega una descripción...' : user.description );
  let methods = ( user.methods == '' ? 'Agrega un medio de transporte...' : user.methods );

  const html = `
  <section id = "profile">
    
      <header>
          <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
          <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
          <input type="text" maxlength="100" autocomplete="off">
          <img id="icon-lupa" src="static/images/icons/icon-lupa.png">
      </header>

      <div id="container-data">
          <img class="user-image" class="user-image" src="${user.photo}">
          <h3 id="user-name">${user.name}</h3>
          <form>
            <p class="clasificacion">
              <input id="radio1" type="radio" name="estrellas" value="5">
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4">
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3">
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2">
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1">
                <label for="radio5">★</label>
            </p>
          </form>
          <h3 id="user-description">Descripción</h3>
          <button id="btn-edit" class="btn-edit"><img class="btn-edit" src="static/images/icons/icon-edit.png" alt=""></button>
          <p class="description">${description}</p>
          <h3 id="user-transport">Medio de transporte</h3>
          <p class="transport">${methods}</p>
      </div>

      <div id="user-post">
        <h1 class="title-reports">Reportes</h1>
        <p class ="line-profile">____________________________</p>
        <p class = "line-reports"></p>
        <div id="user-report">
        <h3 id="title-report"></h3>
        <img id="report" class="report"  src="">
        <img id="point-like"><img id="point-question"><img id="point-dislike">
      </div>

      
      </div>

  </section>`;

  const div = document.createElement('div');
  div.innerHTML = html;

  return div;
};

export function afterRenderProfile() {
}

