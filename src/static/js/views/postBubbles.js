export const bubble = {
    render: (post) => {
        // Una burbuha es una imagen flotante de radio R y centro en X,Y. 
        // Por ahora no me preocupo por definir como se grafica.
        let img = document.createElement('img');
        img.setAttribute('src', post.img);
        let div = document.createElement('div');
        div.className = "bubble";
        div.setAttribute('id', post.id);
        div.appendChild(img)
        return div;
    },
    afterRender: (post, openFunction) => {
        const miniPost = document.getElementById(post.id);
        miniPost.addEventListener('click', () => {
            openFunction(post)
        })
    }
} 