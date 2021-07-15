//Notificacion API
const boton = document.querySelector("#boton");
boton.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) =>
    console.log("El resultado es: ", resultado)
  ); //Al ser una API nativa de JS ya tiene reject y resolve integrados, no me tengo que preocupar, uso directamente .then
  console.log("Diste Click");
});

if (Notification.permission == "granted") {
  new Notification("Esto es una notificacion", {
    icon: "img/nyan.png",
    body: "Codigo JAVASCRIPT",
  });
}
