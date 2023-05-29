const app = require("./app");

//dotenv.config({ path: "./.env.dev" });

const port = 4000;

app.listen(port, () =>
  console.log(`
    Server is running on port*: ${port} 
`)
);
