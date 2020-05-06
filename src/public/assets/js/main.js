// menu-lateral

const contenedor = document.querySelector('#contenedor')

document.querySelector('#boton-menu').addEventListener('click', () => { contenedor.classList.toggle('activo') })

const comprobarAncho = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove('activo')
    } else {
        contenedor.classList.add('activo')
    }
}

comprobarAncho()

window.addEventListener('resize', () => {
    comprobarAncho()
})

// end menu-lateral 

// dropdown

// function dropbtn_perfildev() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

// end dropdown