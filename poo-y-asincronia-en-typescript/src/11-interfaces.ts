interface Connection {
  // private host: string; // Don't do this
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;

  // private getDSN(): string // Don't do this
  getDSN(): string;
  getDriver(): string;
}

class MysqlConnection implements Connection {
  public constructor(
    // protected host: string, // Don't do this
    public host: string,
    public port: number,
    public username: string,
    public password: string,
    public database: string,
  ) {}

  // protected getDSN(): string { // Don't do this
  public getDSN(): string {
    return `mysql://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`;
  }

  public getDriver(): string {
    return 'MYSQL';
  }
}

class MssqlConnection implements Connection {
  public constructor(
    public host: string,
    public port: number,
    public username: string,
    public password: string,
    public database: string,
  ) {}

  public getDSN(): string {
    return `Server=${this.host},${this.port};Database=${this.database};User Id=${this.username};Password=${this.password};Encrypt=true`;
  }

  public getDriver(): string {
    return 'MSSQL';
  }
}

const connect = (conn: Connection) =>
  `Driver: ${conn.getDriver()} - DSN: ${conn.getDSN()}`;

const mysqlConn = new MysqlConnection(
  'localhost',
  3306,
  'root',
  '1234',
  'test_db',
);

console.log(connect(mysqlConn));

const mssqlConn = new MssqlConnection(
  'localhost',
  3306,
  'root',
  '1234',
  'test_db',
);

console.log(connect(mssqlConn));
