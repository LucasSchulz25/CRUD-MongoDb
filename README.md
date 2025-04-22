# 🛠️ CRUD MongoDB con TypeScript y Mongoose

Este proyecto implementa un CRUD básico (Create, Read, Update, Delete) utilizando **MongoDB**, **TypeScript** y **Mongoose**, sin necesidad de crear una API ni usar Express. Todo se ejecuta directamente desde el script.

---

## 📦 Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

---

## 📁 Estructura del proyecto

crud-mongodb-typescript/ ├── src/ │ ├── crud.ts │ ├── db.ts │ └── models/ │ └── product.model.ts ├── node_modules/ ├── package.json ├── tsconfig.json └── .gitignore

---

## ⚙️ Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/LucasSchulz25/CRUD-MongoDB.git
cd CRUD-MongoDB
Instalar dependencias:

npm install
Asegurate de tener MongoDB en ejecución y Compass configurado.

Ejecutar el proyecto:

npm run dev
🧪 Funcionalidades
El script realiza las siguientes acciones de prueba:

Crear un producto

Obtener todos los productos

Buscar un producto por ID

Actualizar su precio

Eliminarlo

Todo eso se realiza automáticamente al ejecutar el archivo principal.

🧠 Autor
Lucas Schulz
