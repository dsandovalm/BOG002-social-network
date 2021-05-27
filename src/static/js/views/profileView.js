export const renderProfile = (user) => {
  const description = (user.description === '' ? 'Agrega una descripción...' : user.description);
  const methods = (user.methods === '' ? 'Agrega un medio de transporte...' : user.methods);

  const html = `
  <section id = "profile">
    
      <header>
            <div class="search">
            <input class="bar-search" type="search" placeholder="Search..." maxlength="100" autocomplete="off">
            <button type="submit" class="img-search"><img class="lupa" src="static/images/icons/icon-lupa.png" alt="search"></button>
            </div>
            <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
            <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
      </header>

      <div class="info-profile">
        <div id="container-data">
          <img class="user-image" src="${user.photo}">
          <h3 id="user-name">${user.name}</h3>
          <p class="calification">
            <span>★<span>
            <span>★<span>
            <span>★<span>
            <span>★<span>
            <span>★<span>
          </p>
          <h3 id="user-description">Descripción</h3>
          <p class="description">${description}</p>
          <h3 id="user-transport">Medio de transporte</h3>
          <p class="transport">${methods}</p>
         </div>

        <div id="user-post">
          <h1 class="title-reports">Mis reportes</h1>
          <p class ="line-profile"></p>
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
