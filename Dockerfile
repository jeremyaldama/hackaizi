# Usa una imagen base de Node.js v20.12.2
FROM node:20.12.2

# Instala pnpm globalmente
RUN npm install -g pnpm

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia el package.json y el pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias usando pnpm
RUN pnpm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN pnpm run build

# Expone el puerto que la aplicación usará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "run", "start"]