# Worldfit
## E-commerce

Aplicación web de Worldfit, proyecto de la **Escuela de JavaScript**

## Autores

- Sebastián Marin
- Edwin García

## Licencia

Derechos reservados

## Configuración del entorno de desarrollo

Iniciamos el proyecto con el comando

```shell
npm init -y
```

Creamos los directorios `src` y `public`, también los archivos `src/index.js` y `public/index.html`

Instalamos **React** y **ReactDOM** con el comando

```shell
npm i react react-dom -S
```

Creamos el archivo `.gitignore` excluyendo el directorio `node_modules`

Instalamos babel y las dependencias de desarrollo necesarias para la implementación de babel con React

```shell
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
```

Creamos el archivo `.babelrc` con la siguiente configuración

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

Instalamos **webpack** y la librería que nos ayuda a manejar el elemento html

```shell
npm i webpack webpack-cli html-webpack-plugin html-loader webpack-dev-server -D
```

Creamos el archivo de configuración de webpack `webpack.config.js`

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}

```

En el archivo `package.json` construimos los scripts _build_ y _start_

```json
"scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
}
```

Instalo **eslint** y las dependencias necesarias para su funcionamiento

```shell
npm i eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D
```

Creo el archivo `.eslintrc` con una plantilla y agrego una plantilla a mi archivo `.gitignore`

Se instala el loader que ayuda a manejar los archivos estáticos con 

```shell
npm i file-loader -D
```

En el archivo `webpack.config.js` agregamos una nueva regla para estos archivos estáticos

```javascript
module: {
    rules: [
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    'loader': 'file-loader',
                    options: {
                        name: 'assets/[hash].[ext]'
                    }
                }
            ]
        }
    ]
}
```

Instalo styled-components para manejar los estilos en componentes

```shell
npm i styled-components -S
```

## Vistas

- Home
- Lista de productos
    - Filtro por categorías
- Producto
- Carrito
- Compra (Formulario de datos)
- Blog
- Articulo del blog
- Logueo de cliente ?
- Logueo de administrador
- Reportes de inventario
- Historial de ventas
    - Filtro por productos, facturas, fechas...
- Agregar artículo
- Ayuda
- Contáctanos
- Quiénes somos