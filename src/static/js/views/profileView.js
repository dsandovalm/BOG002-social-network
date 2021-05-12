export const renderProfile = () => {
  const html = `
  <section id = "profile">
    
      <header>
          <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
          <img id="icon-settings" class="icon-settings" src="static/images/icons/icon-settings.png">
          <input type="text" maxlength="100" autocomplete="off">
          <img id="icon-lupa" src="static/images/icons/icon-lupa.png">
      </header>

      <div id="container-data">
          <img class="user-image" class="user-image" src="">
          <h2 id="user-name"></h2>
          <span id="calification"></span>
          <p class = "line-profile"></p>
          <p id="user-description"></p>
          <textarea></textarea>
          <p id="user-transport"</p>
          <textarea></textarea>
      </div>

      <div id="user-post">
        <h1 class="title-reports">Reportes</h1>
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
}

export function afterRenderProfile(){

}