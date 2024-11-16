# Step 1: Use the official Node.js image as a base
FROM node:16

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Expose the port the app will run on (e.g., port 3000)
EXPOSE 3000

# Step 7: Run the application when the container starts
CMD ["npm", "start"]
