const oracledb = require('oracledb');


oracledb.initOracleClient({libDir: './instantclient_19_8'});

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ 
      user: "Jwilliams16", 
      password: "mAFY0FVl7soPrjBRpOHu7GS0", 
      connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle.cise.ufl.edu)(Port=1521))(CONNECT_DATA=(SID=orcl)))"
    });

    console.log("Successfully connected to Oracle Database");

    result = await connection.execute(
      `SELECT * FROM POPULATION 
      WHERE STATE = 'FL'`,
      [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });

    const rs = result.resultSet;
    let row;

    while ((row = await rs.getRow())) {
      console.log(row);
    }

    await rs.close();

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();