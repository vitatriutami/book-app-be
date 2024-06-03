FROM node:lts

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV MONGO_URI="mongodb+srv://vitatr:1S7r9tNPumZ5YVtb@devscaledb.mp3qw2f.mongodb.net/bookstorage?retryWrites=true&w=majority&appName=DevscaleDB"

EXPOSE 8000

CMD ["npm", "start"]