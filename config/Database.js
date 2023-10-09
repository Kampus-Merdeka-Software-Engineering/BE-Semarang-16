import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "Jvpa4qYS1iYerGp6Ieu1", {
  host: "containers-us-west-84.railway.app",
  port: "6016",
  dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default db;
