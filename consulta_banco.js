const db = require("./conexao")

async function listar(){
  await db.connect()
  resultado = await db.query("SELECT * FROM cadastro_cliente")
  console.log(resultado.rows)
  await db.end()
}

console.log(listar())
