  const customExpress =  require('./customExpress')
  const conexao = require('./conexao')
  const Tabelas = require('./tabelas')
  
  
  conexao.connect(erro => {
      if(erro){
        console.log(erro)
      } else {
        console.log('Conectado com sucesso!')
          Tabelas.init(conexao)
          const app = customExpress()
          app.listen(3000, () => console.log("Servidor rodando na porta 3000"))
      }

  })


  

  