import peliculas from './peliculas.js'





const genero_container =document.querySelectorAll('.genero-container')

genero_container.forEach(()=>{





           

            const peliculasAccion = peliculas.filter((elemento)=>elemento.genre_ids.includes(28))

            const mostrarAccion = peliculasAccion.map((elemento) => {
                return `<div><h3>${elemento.original_title}</h3><img src="https://image.tmdb.org/t/p/w200${elemento.poster_path}" alt="${elemento.original_title}"></div>`;
              });
            
              const t = document.getElementById('genero-28');
            
              t.innerHTML = mostrarAccion.join("");
        

         const peliculasThriller = peliculas.filter((elemento)=>elemento.genre_ids.includes(53))
            
            const mostrarThriller  =peliculasThriller.map((elemento)=> {
                return `<div><h3>${elemento.original_title}</h3><img src="https://image.tmdb.org/t/p/w200${elemento.poster_path}" alt="${elemento.original_title}"></div>`;
              });
            
            const m =document.getElementById('genero-53');
            
            m.innerHTML= mostrarThriller.join("");


        

            const peliculasAventura = peliculas.filter((elemento)=>elemento.genre_ids.includes(12))
        
            const mostrarAventura =peliculasAventura.map((elemento)=> {
                return `<div><h3>${elemento.original_title}</h3><img src="https://image.tmdb.org/t/p/w200${elemento.poster_path}" alt="${elemento.original_title}"></div>`;
              });
            
            const s =document.getElementById('genero-12');
            
            s.innerHTML= mostrarAccion.join("");
            





       





})


        





