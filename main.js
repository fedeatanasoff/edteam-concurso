
let monto = document.getElementById('monto')
let salida = document.getElementById('output')

salida.style.visibility = 'hidden'

monto.addEventListener('input', function (e) {
    let dolares = e.target.value
    salida.style.visibility = 'visible'

    //  conversion a dolares
    if (dolares < 20) {
       
        let cursos = document.getElementById('cursos')
        let cantCursos = "no puedes comprarte nada, ve a robar un banco o pide prestado "
        cursos.innerHTML = ` ${cantCursos}`
        
    } else {
        if (dolares >= 20 && dolares < 40) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "puedes comprarte un curso"
            cursos.innerHTML = ` ${cantCursos}`
            imagen.appendChild()
            
        }
        if (dolares >= 40 && dolares < 60) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "puedes comprarte dos cursos"
            cursos.innerHTML = ` ${cantCursos}`
        }
        if (dolares >= 60 && dolares < 80) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "puedes comprarte 3 cursos"
            cursos.innerHTML = ` ${cantCursos}`
        }
        if (dolares >= 80 && dolares < 100) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "puedes comprarte 4 cursos"
            cursos.innerHTML = ` ${cantCursos}`
        }
        if (dolares >= 100 && dolares < 120) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "puedes comprarte 5 y el amigo Alexis te regale USD 20 de credito para otro mas"
            cursos.innerHTML = ` ${cantCursos}`
            
        }
        if (dolares >= 120) {
            let cursos = document.getElementById('cursos')
            let cantCursos = "con ese monto puedes convertirte en socio de EdTeam, por favor envianos un mensaje privado y te contestaremos a la brevedad"
            cursos.innerHTML = ` ${cantCursos}`
        }
    }
})