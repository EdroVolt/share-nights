FROM node:19

WORKDIR /app

COPY package*.json pnpm*.yaml ./

RUN npm install -g pnpm@9 &&  pnpm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]