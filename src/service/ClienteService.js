import WebSqlService from './WebSqlService';

export default class ClienteService {
    constructor() {
        this._db = new WebSqlService();
        this._db.execSql(
            "CREATE TABLE IF NOT EXISTS cliente (id INTEGER PRIMARY KEY ASC, login TEXT, nome TEXT, telefone TEXT, email TEXT, token TEXT)"
        );
    }

    login(usuario) {
        this._usuario = usuario;
        localStorage.setItem('token', usuario.token);
        localStorage.setItem('login', usuario.login);

        this._db.execSql("SELECT * FROM cliente WHERE login = ? LIMIT 1", [usuario.login], this.salvar.bind(this));
    }

    salvar(transaction, results){
        let sql = (results.rows.length > 0)
            ? 'UPDATE cliente SET nome = ?, token = ?, telefone = ?, email = ? WHERE login = ?'
            : 'INSERT INTO cliente (nome, token, telefone, email, login) VALUES (?, ?, ?, ?, ?)';
        this._db.execSql(sql , [
            this._usuario.nome,
            this._usuario.token,
            this._usuario.telefone,
            this._usuario.email,
            this._usuario.login
        ]);
    }

    find(callback) {
        if(localStorage.hasOwnProperty('login')){
            let login = localStorage.getItem('login');
            this._db.execSql("SELECT * FROM cliente WHERE login = ? LIMIT 1", [login], callback.bind(this));
        }
    }

    logoff() {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
    }

    httpHeader(){
        return { headers: {
            Authorization: 'Basic '+localStorage.getItem('token'),
            profile: 'producao'
        } };
    }
}