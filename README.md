# App-de-tiempo
# 🌤️ App de tiempo  - Buscador del tiempo

Mi primera web hecha con **JavaScript**: una aplicación sencilla para consultar el tiempo de cualquier ciudad del mundo.

🔗 **Demo:** https://app-de-tiempo.vercel.app/

## 📖 Descripción

Escribes el nombre de una ciudad y la web te muestra el tiempo actual: temperatura, sensación térmica, humedad, viento y un icono según las condiciones. Los datos se obtienen en tiempo real de una API externa de meteorología.

Este proyecto lo hice para aprender los fundamentos de JavaScript, sobre todo:

- Manipulación del DOM
- Eventos (clic, tecla Enter)
- Peticiones a APIs con `fetch`
- Async/await y gestión de errores
- Trabajar con datos en formato JSON

## ✨ Funcionalidades

- 🔍 Búsqueda del tiempo por nombre de ciudad
- 🌡️ Temperatura actual, mínima y máxima
- 💧 Humedad y 💨 velocidad del viento
- 🖼️ Icono y descripción del clima
- ⚠️ Mensaje de error si la ciudad no existe

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (ES6+)
- [OpenWeatherMap API](https://openweathermap.org/api) 

## 🚀 Cómo usarlo

1. Clona el repositorio:
```bash
   git clone https://github.com/Fbyg/App-de-tiempo-a-mi-estilo.git
```
2. Entra en la carpeta del proyecto:
```bash
   cd App-de-tiempo-a-mi-estilo
```
3. Consigue una API key gratuita en [OpenWeatherMap](https://openweathermap.org/api).
4. Añade tu clave en el archivo `script.js`:
```js
   const apiKey = "TU_API_KEY";
```
5. Abre `index.html` en tu navegador. ¡Listo!

## 📁 Estructura del proyecto

```
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧠 Lo que aprendí

- Cómo consumir una API y procesar su respuesta en JSON
- Cómo actualizar la página dinámicamente sin recargarla
- La importancia de controlar errores (ciudad no encontrada, fallo de red)
- Por qué no conviene subir las API keys a un repositorio público

## 🔮 Posibles mejoras

- [ ] Previsión para los próximos días
- [ ] Buscar por geolocalización
- [ ] Cambiar entre °C y °F
- [ ] Cambiar el fondo según el clima
- [ ] Diseño responsive para móvil

## 👤 Autor

**Alex Ferrer Collantes**

---

⭐ Si te ha gustado, ¡déjame una estrella en el repositorio!
