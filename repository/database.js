const mysql = require("mysql2")

class Database {

    #connection

    constructor() {

        //Configuração do banco
        this.#connection = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "bdgp"
        }).promise()
    }

    async selecionarSkins() {
        const skinsData = await this.#connection.query("select * from skins;")
        return skinsData[0]
    }

    async selecionarCupons() {
        const cuponsData = await this.#connection.query("select * from cupons;")
        return cuponsData[0]
    }
    async selecionarAtrativos() {
      const atrativosData = await this.#connection.query("select * from atrativos;")
      return atrativosData[0]
  }
  async selecionarPromocoes() {
    const atrativosData = await this.#connection.query("select * from promocoes;")
    return atrativosData[0]
}
async selecionarDescontos() {
  const promocoesData = await this.#connection.query("select * from descontos;")
  return promocoesData[0]
}
async selecionarVendas() {
  const atrativosData = await this.#connection.query("select * from vendas;")
  return atrativosData[0]
}

    async selecionarCuponId(id) {
        const cuponsData = await this.#connection.query("select * from cupons where id_cupom ="+id)
        return cuponsData[0]
    }

    async selecionarSkinsId(id) {
      const skinsData = await this.#connection.query("select * from skins where id_skin ="+id)
      return skinsData[0]
  }
  async selecionarAtrativosId(id) {
    const atrativosData = await this.#connection.query("select * from atrativos where id_atrativo ="+id)
    return atrativosData[0]
}
async selecionarPromocoesId(id) {
  const promocoesData = await this.#connection.query("select * from promocoes where id_promocao ="+id)
  return promocoesData[0]
}
async selecionarDescontosId(id) {
  const descontosData = await this.#connection.query("select * from descontos where id_desconto ="+id)
  return descontosData[0]
}
async selecionarVendasId(id) {
  const vendasData = await this.#connection.query("select * from vendas where id_venda ="+id)
  return vendasData[0]
}
    async insertCupom(nome, codigo, validade, valor) {
        const retorno = await this.#connection.execute(`
        INSERT INTO cupons (codigo_cupom, nome_cupom, validade_cupom, valor_cupom) VALUES
        ('${codigo}', '${nome}', '${validade}', '${valor}');
      `)
    }

    async insertSkin(categoria, nome, descricao, genero, valor, raridade, foto1,foto2,promocoes) {
      const retorno = await this.#connection.execute(`
        insert into skins (categoria_skin, nome_skin,descr_skin,genero_skin,
          valor_skin,raridade_skin,foto1_skin,foto2_skin ,promocoes_id_promocao)
             
            values ('${categoria}','${nome}','${descricao}','${genero}',
            '${valor}', '${raridade}','${foto1}','${foto2}',${promocoes})
        `)
    }

    async insertAtrativo(nome, descricao, latitude, longitude, foto)
       {
      const retorno = await this.#connection.execute(`
        insert into atrativos (nome_atrativo, image_atrativo,
            lat_atrativo, long_atrativo,desc_atrativo ) 
            values ('${nome}','${descricao}','${latitude}','${longitude}',
           ' ${foto}')
        `)
    }
    async insertPromocao(nome, dtstart, dtend, descricao, ativa,desconto)
    {
   const retorno = await this.#connection.execute(`
     insert into promocoes (nome_promocao,dt_start_promocao, dt_end_promocao,
       descr_promocao, ativa_promocao,descontos_id_desconto ) 
         values ('${nome}','${dtstart}','${dtend}','${descricao}',
        ' ${ativa}',' ${desconto}')
     `)
 }
    async insertDesconto(valor)
       {
      const retorno = await this.#connection.execute(`
        insert into descontos (valor_desconto) 
            values ('${valor}')
        `)
    }
    async insertVenda(hora,dia,skin,cupom)
    {
   const retorno = await this.#connection.execute(`
     insert into vendas (hora_venda,skins_id_skin,dia_venda,cupons_id_cupon) 
         values ('${hora}','${dia}','${skin}','${cupom}')
     `)
 }
    async deleteCupom(id) {
        const sql = `
        delete from cupons
        where id_cupom = ${id};
        `

        const dt = await this.#connection.execute(sql)
        return dt[0]
    }

     async updateCupom(codigo, nome, validade, valor,id) {
        const sql = `  update cupons
            set codigo_cupom = "${codigo}",
                nome_cupom = "${nome}",
                validade_cupom = "${validade}",
                valor_cupom = ${valor}
            where id_cupom = ${id};`

        const dtbs = await this.#connection.execute(sql)
        return dtbs[0]
    }

    async deleteSkin(id) {
      const sql = `
      delete from skins
      where id_skin = ${id};
      `

      const dt = await this.#connection.execute(sql)
      return dt[0]
  }

  async updateSkin(descricao,nome,  valor,raridade,  foto1, categoria, foto2, id,genero,promocoes) {
    const sql = `  UPDATE skins
    SET categoria_skin = "${categoria}",
        nome_skin="${nome}",
        descr_skin = "${descricao}",
        genero_skin = "${genero}",
        valor_skin = "${valor}"
        raridade_skin = "${raridade}",
        foto1_skin = "${foto1}",
        foto2_skin = "${foto2}"
        promocoes_id_promocao  = "${promocoes}"
        
    WHERE id_skin = ${id};
`

    const dtbs = await this.#connection.execute(sql)
    return dtbs[0]
}
async deleteAtrativo(id) {
  const sql = `
  delete from atrativos
  where id_atrativo = ${id};
  `

  const dt = await this.#connection.execute(sql)
  return dt[0]
}

async updateAtrativo(nome, descricao, latitude, longitude, foto,id) {
  const sql = `   UPDATE atrativos
  SET nome_atrativo = "${nome}",
      desc_atrativo = "${descricao}",
      lat_atrativo = "${latitude}",
      long_atrativo = "${longitude}",
      image_atrativo = "${foto}"
  WHERE id_atrativo = ${id};
`;

  const dtbs = await this.#connection.execute(sql)
  return dtbs[0]
}

async deletePromocao(id) {
  const sql = `
  delete from promocoes
  where id_promocao = ${id};
  `

  const dt = await this.#connection.execute(sql)
  return dt[0]
}
async updatePromocao(nome, dtstart, dtend, descricao, ativa,desconto,id) {
  const sql = `   UPDATE promocoes
  SET nome_promocao = "${nome}",
      dt_start_promocao = "${dtstart}",
      dt_end_promocao = "${dtend}",
      descr_promocao = "${descricao}",
      ativa_promocao = "${ativa}",
      descontos_id_desconto = "${desconto}"
  WHERE id_promocao = ${id};
`;

  const dtbs = await this.#connection.execute(sql)
  return dtbs[0]
}
async deleteDesconto(id) {
  const sql = `
  delete from descontos
  where id_desconto = ${id};
  `

  const dt = await this.#connection.execute(sql)
  return dt[0]
}   
async updateDesconto(id,valor) {
  const sql = `    UPDATE descontos
  SET valor_desconto = "${valor}"
  WHERE id_desconto = ${id};
`;

  const dtbs = await this.#connection.execute(sql)
  return dtbs[0]
}

async deleteVenda(id) {
  const sql = `
  delete from vendas
  where id_venda = ${id};
  `

  const dt = await this.#connection.execute(sql)
  return dt[0]
}   

async updateVenda(id,hora,dia,skin,cupom) {
  const sql = `   UPDATE vendas
  SET dia_venda = "${dia}",
  hora_venda = "${hora}",
  skins_id_skin = "${skin}",
  cupons_id_cupon = "${cupom}"
  WHERE id_venda = ${id};
`;

  const dtbs = await this.#connection.execute(sql)
  return dtbs[0]
}
}

module.exports = Database