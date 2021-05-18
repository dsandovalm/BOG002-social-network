export const renderRegister = () => {
    const html = `
    <section id ="register">
        <h1>WALKTER</h1>
        
        <div class = "container-register">
            <h2>Cuentanos más sobre ti</h2>
            <p>Nombre</p>
            <input type="text" id="input-name"></input>
            <p>Descripción general</p>
            <input type="text" id="input-description"></input>
            <p>Métodos de transporte regulares</p>
            <input type="text" id="input-methods"></input>
            <p>Foto de perfil</p>
            <input type="image" id="input-pic"></input>    
        </div>
        <button id="btn-register">Continuar</button>
        <footer class = "footer"><footer>

    </section>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
  
    return div;
} 

export function afterRenderRegister(){
    
}

