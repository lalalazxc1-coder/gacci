# Искуственно создаем этап сборки для Vite (Node.js)
FROM node:20-alpine AS build

# Рабочая директория
WORKDIR /app

# Копируем файлы конфигурации npm
COPY package.json package-lock.json* ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Собираем production версию
RUN npm run build

# Создаем этап для отдачи статических файлов через Nginx
FROM nginx:alpine

# Удаляем дефолтный конфиг nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем собранные файлы из этапа build в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем наш кастомный конфиг с настройками домена
COPY nginx.conf /etc/nginx/conf.d/

# Порт 80 для HTTP
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
