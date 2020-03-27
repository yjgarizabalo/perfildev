var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('inspirar a todos:  ')
    .pauseFor(2500)
    .deleteChars(1)
    .typeString('<strong>Desarrollador web 👨‍💻!</strong>')
    .pauseFor(2500)
    .deleteChars(24)
    .typeString('<strong> Programador back-end 👨‍💻!</strong>')
    .pauseFor(2500)
    .start();