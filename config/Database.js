import { Sequelize } from "sequelize";

const db = new Sequelize(
  "railway", 
  "root",
  "jv2Ko94DFoyoz1CgVAJd",
      {
    host : "containers-us-west-51.railway.app",
    port:"5777",
    dialect: "mysql",
});

coursedb.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default coursedb;
