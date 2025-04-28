//mysqlライブラリをインポート
import mysql from 'mysql';
//dotenvライブラリをインポート
//.envファイルから環境変数の読込みを可能にする
import dotenv from 'dotenv';

//.envファイルの内容をprocess.envにロード
dotenv.config();

//MySQLへの接続に必要な情報
const dbConfig = {
    //MySQLサーバーホスト名
  host: process.env.DB_HOST || 'localhost',
    //Mysqlサーバーのユーザー名
  user: process.env.DB_USER || 'root',
    //MySQLサーバーのパスワード
  password: process.env.DB_PASSWORD || 'your_password',
    //使用するデータベース名
  database: process.env.DB_DATABASE || 'todo_app'
};

//dbConfigオブジェクトを使用し、MySQLサーバへの接続オブジェクト作成
const connection = mysql.createConnection(dbConfig);

//サーバーへの接続オブジェクト
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    // アプリケーションの起動を中断させるなどの処理を検討してください
    return;
  }
  console.log('Connected to MySQL!');
});

//作成した接続オブジェクトをエクスポート
export default connection;