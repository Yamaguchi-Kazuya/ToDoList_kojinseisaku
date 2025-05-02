//mysqlライブラリをインポート
import mysql from 'mysql';
//dotenvライブラリをインポート
//.envファイルから環境変数の読込みを可能にする
import dotenv from 'dotenv';

//.envファイルの内容をprocess.envにロード
dotenv.config();

//MySQLへの接続に必要な情報
const dbConfig = {
  //ホスト
  host: process.env.DB_HOST,
  //ユーザー名
  user: process.env.DB_USER,
  //パスワード
  password: process.env.DB_PASSWORD,
  //データベース名
  database: process.env.DB_DATABASE,
  //ポート番号
  port: Number(process.env.DB_PORT) || 3306,
};

//dbConfigオブジェクトを使用し、MySQLサーバへの接続オブジェクト作成
const connection = mysql.createConnection(dbConfig);

//データベース接続関数connectDatabase
//外部から利用できるようにエクスポート
export const connectDatabase = (): Promise<void> => {
  //非同期処理の結果を扱うオブジェクト
  return new Promise((resolve, reject) => {
    //データベースへの接続オブジェクト
    connection.connect((err) => {
      //エラー時の処理
      if (err) {
        //エラー内容をコンソールに出力
        console.error('Error connecting to database:', err);
        //Promiseをエラーオブジェクトと共に拒否、接続失敗の通知
        reject(err);
        //処理の中断
        return;
      }
      //正常な場合の処理
      //コンソールへの接続メッセージを出力
      console.log('Connected to MySQL database!');
      //呼び出し元に完了を通知
      resolve();
    });
  });
};

//クエリ実行関数
//外部から利用できるようにエクスポート
export const query = (sql: string, values?: any[]): Promise<any> => {
  //非同期処理の結果を扱うオブジェクト
  return new Promise((resolve, reject) => {
    //SQLクエリの実行
    connection.query(sql, values, (err, results) => {
      //エラー時の処理
      if (err) {
        //エラー通知
        reject(err);
        //処理の中断
        return;
      }
      resolve(results);
    });
  });
};

// アプリケーション終了時にデータベース接続を閉じる処理
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Error closing database connection:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit();
  });
});