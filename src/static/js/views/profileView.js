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
          <img class="user-image" class="user-image" src="${user.photoURL}">
          <h3 id="user-name">${user.displayName}</h3>
          <span id="calification"></span>
          <h4 id="user-description">Descripción</h4>
          <button id="btn-edit" class="btn-edit"><img class="btn-edit" src="static/images/icons/icon-edit.png" alt=""></button>
          <p>${description}</p>
          <h3 id="user-transport">Medio de transporte</h3>
          <p>${methods}</p>
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

