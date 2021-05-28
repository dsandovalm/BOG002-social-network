import { modalView } from './postPopUp.js';

export function displayMarker(map) {
    let now = new Date();
    let limit = new Date ( now - (48*3600*1000));

    let post = firebase.firestore()
    .collection('Posts').where('date', '>', limit )
    .get().then((snapshot) => {
        //Obtiene todos los posts hechos despues de la fecha limite
        snapshot.forEach(doc => {
            // Create a reference to the file whose metadata we want to retrieve
            let photoRef = firebase.storage().ref().child(doc.data().photo);
            photoRef.getDownloadURL().then(function(url) {
                // Get the download URL for 'images/stars.jpg'
                // This can be inserted into an <img> tag
                // This can also be downloaded directly

                let iconMarker = L.icon({
                    iconUrl: url,
                    iconSize: [70, 70],
                    iconAnchor: [25, 50],
                    className: 'bubble'
                })
    
                let marker = new L.marker(doc.data().ubication, {icon: iconMarker,})
                .bindPopup(doc.data().description)
                .addTo(map);

                marker.on('click', () => {
                    firebase.firestore()
                    .collection('Users').where('id', '==' , doc.data().user)
                    .get().then( (users) => {
                        
                        /* Abrir popUp con: 
                        Post = firebase.firestore().collection('Posts').doc(doc.id);
                        User = firebase.firestore()*/
                        users.forEach( user => {
                            
                            let seconds = ((now/1000) - doc.data().date.seconds);
                            let time;
                            if( seconds < 60){
                                time = 'Hace un momento'
                            } else if( seconds < 3600) {
                                time = `Hace ${Math.floor(seconds/60)} minutos` 
                            } else {
                                time = `Hace ${Math.floor(seconds/3600)} horas` 
                            }

                            let div = modalView.render( doc.data(), user.data(), time /*doc.date.toString()*/,url );

                            document.getElementById('modal').style.display = 'block';
                            document.getElementById('modal').appendChild(div);

                            modalView.afterRender( () => {
                                document.getElementById('modal').innerHTML = '';
                                document.getElementById('modal').style.display = 'none';
                                },
                                doc.id
                            )
                        })
                    })
                })
            }).catch(function(error) {
                console.log('No se pudo obtener la URL de la imagen ', error);
            });
        });
    }).catch( (error) => {
        console.log(" Error al obtener los posts ", error)    
    })
    return post
}

/* export const bubble = {
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
        return div;
    },
    afterRender: (post, openFunction) => {
        const miniPost = document.getElementById(post.id);
        miniPost.addEventListener('click', () => {
            openFunction(post)
        })
    }
}
 */


// https://firebasestorage.googleapis.com/v0/b/walkter-64c60.appspot.com/o/images%2FyAaLOcv7lJWyAGk303Af.jpg?alt=media&token=9098465e-3bed-46be-ad9a-17c65262f396
// 