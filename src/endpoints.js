var users = [];
var fila = 1;
var filaPessoas = [];


module.exports = {
    async createUser(req, res) {
        let userByEmail = users.filter(email => email.email === req.body.email);
        if (userByEmail.length > 0) {
            res.send({
                message: 'This email is already in use.'
            })
        } else {
            let reply = {
                id: Math.random() * 100000000 | 0,
                nome: req.body.nome,
                email: req.body.email,
                genero: req.body.genero
            };
            users.push(reply);
            res.send(reply);
        }
    },
    async showLine(req, res) {
        res.send(filaPessoas);
    },
    async addToLine(req, res) {
        let userById = users.filter(id => id.id === req.body.id);
        if (userById.length === 0) {
            res.send({
                message: 'Invalid ID.'
            });
        } else {
            let alreadyInLine = filaPessoas.filter(idUser => idUser.email === userById[0].email);
            if (alreadyInLine.length > 0) {
                res.send({
                    message: 'This user is already in line.'
                });
            } else {
                let reply = {
                    nome: userById[0].nome,
                    email: userById[0].email,
                    genero: userById[0].genero,
                    posicao: fila,
                };
                filaPessoas.push(reply);
                fila++;
                res.send([{
                    posicao: reply.posicao
                }]);
            }
        }
    },
    async findPosition(req, res) {
        if (req.body.email === undefined) {
            res.send({
                message: 'Use the params correctly! Follow the documentation'
            });
        } else {
            let emailExists = filaPessoas.filter(em => em.email === req.body.email);
            if (emailExists.length === 0) {
                res.send({
                    message: 'Invalid email!'
                });
            } else {
                let userByEmail = filaPessoas.filter(email => email.email === req.body.email);
                res.send({
                    posicao: userByEmail[0].posicao
                });
            }
        }
    },
    async filterLine(req, res) {
        if (req.body.genero === undefined) {
            res.send({
                message: "Use the params correctly! Follow the documentation."
            });
        } else {
            if (req.body.genero !== "Masculino" && req.body.genero !== "Feminino") {
                res.send({
                    message: "Use the params correctly! Follow the documentation!"
                });
            } else {
                let usersByGenre = filaPessoas.filter(genre => genre.genero === req.body.genero);
                res.send(usersByGenre);
            }
        }
    },
    async popLine(req, res) {
        firstFromLine = filaPessoas.shift();
        filaPessoas.forEach(fila => fila.posicao = fila.posicao - 1);
        res.send(firstFromLine);
        fila--;
    }
};