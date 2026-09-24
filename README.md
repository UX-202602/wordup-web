# WORDUP

Aplicación web para aprender vocabulario en inglés. Permite configurar alarmas de estudio, repasar las palabras aprendidas, practicarlas con tarjetas y administrar el perfil del usuario.

Construida con **Angular 21**, **Angular Material** y **SSR** (`@angular/ssr`).

## Pantallas

| Ruta | Pantalla | Descripción |
|---|---|---|
| `/welcome` | Bienvenida | Página de inicio para usuarios sin sesión |
| `/crear-cuenta` | Crear cuenta | Registro de usuario |
| `/configuracion-inicial` | Configuración inicial | Nivel y objetivo de aprendizaje |
| `/home` | Inicio | Resumen de progreso, próxima alarma e historial |
| `/alarmas` | Alarmas | Lista, creación, edición y eliminación de alarmas |
| `/palabras` | Palabras | Lista de palabras; al hacer clic se abre su significado y ejemplos |
| `/practica` | Práctica | Tarjetas: clic para ver el significado, «Siguiente» para avanzar |
| `/perfil` | Perfil | Datos del usuario, foto de perfil y cambio de contraseña |

## Requisitos previos

- [Node.js](https://nodejs.org/) **20.19+** o **22.12+** (se recomienda la versión LTS)
- npm **11** (viene con Node; el proyecto declara `npm@11.10.0`)
- Git

Verifica tus versiones:

```bash
node -v
npm -v
```

## Instalación y ejecución

1. Clona el repositorio y entra a la carpeta:

   ```bash
   git clone <url-del-repositorio>
   cd wordup-web
   ```

2. Instala las dependencias (solo la primera vez o cuando cambie `package.json`):

   ```bash
   npm install
   ```

3. Levanta el servidor de desarrollo:

   ```bash
   npm start
   ```

   Es equivalente a `ng serve`. Si tienes Angular CLI instalado globalmente también puedes usar ese comando directamente.

4. Abre <http://localhost:4200/> en el navegador. La app se recarga sola cada vez que guardas un cambio.

> Para usar otro puerto: `npm start -- --port 4300`.
> Para abrir el navegador automáticamente: `npm start -- --open`.

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm start` (`ng serve`) | Servidor de desarrollo en `http://localhost:4200` |
| `npm run build` (`ng build`) | Compila para producción en `dist/wordup-app` |
| `npm run watch` | Compila en modo desarrollo y vuelve a compilar al detectar cambios |
| `npm test` (`ng test`) | Ejecuta las pruebas unitarias |
| `npm run serve:ssr:wordup-app` | Sirve la versión con SSR (requiere haber hecho `npm run build` antes) |

### Ejecutar la versión de producción con SSR

```bash
npm run build
npm run serve:ssr:wordup-app
```

## Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── welcome/                 # Bienvenida
│   │   ├── crear-cuenta/            # Registro
│   │   ├── configuracion-inicial/   # Nivel y objetivo
│   │   ├── home/                    # Inicio
│   │   ├── alarmas/                 # Alarmas (+ modales de crear/editar/eliminar)
│   │   ├── palabras/                # Lista de palabras (+ modal de detalle)
│   │   ├── practica/                # Práctica con tarjetas
│   │   └── perfil/                  # Perfil (+ modal de cambio de contraseña)
│   ├── shared/
│   │   ├── navbar/                  # Barra de navegación (variantes guest / auth)
│   │   └── words.ts                 # Datos de ejemplo de las palabras
│   ├── app.routes.ts                # Rutas de la aplicación
│   └── app.config.ts                # Configuración global (router, locale es-CO, Material)
├── styles/
│   ├── _colors.scss                 # Paleta de colores (variables CSS)
│   └── _typography.scss             # Escala tipográfica
└── styles.scss                      # Estilos globales y tema de Material
```

## Guía de estilo

- **Fuente:** Plus Jakarta Sans.
- **Colores** (definidos en `src/styles/_colors.scss`): primario `#6366B3`, secundario `#14B8A6`, resaltado `#F4C95D`, suave `#F8F7FF`, error `#E8445A`.
- Los componentes son *standalone* y usan estilos SCSS propios junto a cada componente.

## Notas

- Los datos (palabras, alarmas, usuario) son **datos de ejemplo** en el código; aún no hay backend.
- Para crear un componente nuevo: `ng generate component pages/nombre/nombre`.

## Solución de problemas

- **`ng: command not found`**: usa `npm start` o `npx ng serve`.
- **Error al instalar dependencias**: borra `node_modules` y `package-lock.json` no es necesario normalmente; prueba primero `npm ci`.
- **El puerto 4200 está ocupado**: `npm start -- --port 4300`.
- **Versión de Node no soportada**: actualiza Node (por ejemplo con [nvm](https://github.com/nvm-sh/nvm): `nvm install --lts`).
