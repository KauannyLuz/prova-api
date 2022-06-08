import { con } from "connnection.js";


export async function listarHeroi() {
    const comando = `
        SELECT  id_super_heroi      id,
                nm_super_heroi      nome,
                ds_super_poderes    poderes,
                bt_voa              podeVoar
          FROM  tb_super_heroi
    `
    console.log


    const [linhas] = await con.query(comando);
    return linhas;
}


export async function inserirHeroi(heroi) {
    const comando = `
        insert into tb_super_heroi (nm_super_heroi, ds_super_poderes, bt_voa)
            values (?, ?, ?)
    `

    const [resposta] = await con.query(comando, [heroi.nome, heroi.poderes, heroi.podeVoar]);
    return resposta;
}
