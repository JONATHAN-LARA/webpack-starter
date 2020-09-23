import '../css/componentes.css';

export const saludar = (nombre) => {

    console.log('CREANDO ETIQUETA H1, en HTML');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, como estas?`;

    document.body.append(h1);

}