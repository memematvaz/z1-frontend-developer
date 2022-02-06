# BankClient ID Scanning

Prueba técnica para frontend developer de Z1.

Se trata de una app que analiza fotos de documentos de identidad validándolas utilizando una API.

Tecnologías utilizadas: React, TypeScript y SASS.

[Disponible aquí](https://nifty-mcclintock-a684c7.netlify.app/)


## Instalación

1. Descarga o clona el respositorio 
```
$ git clone https://github.com/mnemearie/z1-frontend-developer.git
```
2. Instala las dependencias
```
$ npm install
```
3. Arranca el proyecto
```
$ npm start
```


## Desarrollando

Nunca había utilizado la cámara en ningún proyecto y me parecía algo más complejo de lo que finalmente ha sido. Normalmente comienzo los proyectos esbozando la estructura, pero en este caso la lógica detrás del funcionamiento de la cámara y la captura de la imagen me intrigaba, así que empecé por aquí.

La mayor parte de la lógica se encuentran en App.tsx, enviando la información a los componentes hijos mediante props. 
He utilizado ternarios para el renderizado condicional de las distinas páginas y elementos porque así me resultaba más rápido.

A ratos TypeScript me ha dado un poco de guerra por eso hay más anys de los que me gustaría.



