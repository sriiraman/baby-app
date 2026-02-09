COPY package*.json ./   # copy package files first
RUN npm install          # install dependencies
COPY . .                 # copy everything else