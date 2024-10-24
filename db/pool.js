const { Pool } = require("pg");

const pool = new Pool({
  connectionString: `postgresql://apple:password@localhost:5432/apple`,
});

module.exports = pool;
