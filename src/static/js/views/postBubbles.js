export const bubble = {
    render: (post) => {
        // Una burbuha es una imagen flotante de radio R y centro en X,Y. 
        // Por ahora no me preocupo por definir como se grafica.
        let img = document.createElement('img');
        img.setAttribute('src', post.img);
        let div = document.createElement('div');
        div.className = "bubble";
        div.setAttribute('id', post.id);
        div.appendChild(img);
        /*  ANOTACIONES
        let map = {
            latmin: minima latitud en el mapa,
            latmax: maxima latitud en el mapa,
            lngmin: minima longitud en el mapa,
            lngmax: maxima longitud en el mapa,
            w: ancho del mapa,
            h: alto del mapa,
            // No sabria de donde sacarlas
        };
        
        // - - - CSS

        div.style.position = 'absolute';
        div.style.top = (map.h * (post.lng - map.lngmin) / (map.lngmax-map.lngmin) );
        div.style.left = (map.w * (post.lat - map.latmin) / (map.latmax-map.latmin) );
        // Podria pasarsele el mapa como parametro y que se agreguen alli mismo
        */
        return div;
    },
    afterRender: (post, openFunction) => {
        const miniPost = document.getElementById(post.id);
        miniPost.addEventListener('click', () => {
            openFunction(post)
        })
    }
} 
