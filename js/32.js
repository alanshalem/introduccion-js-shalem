//async/await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes... espere...");

    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos... espere...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

setTimeout(() => {
  console.log("set timeout");
}, 5000);

setInterval(() => {
  console.log("set interval");
}, 5000);

async function app() {
  try {
    // const clientes = await descargarNuevosClientes();
    // console.log(clientes);
    // const pedidos = await descargarUltimosPedidos();
    // console.log(pedidos);
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);

    console.log(resultado[0]);
    console.log(resultado[1]);

    console.log(
      "Este codigo SI se bloquea hasta que el await se haya completado"
    );
  } catch (error) {
    console.log(error);
  }
}

app();

console.log("Este codigo NO se bloquea");
