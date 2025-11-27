const pool = require('../db/connection');

class UsuarioRepository {
  async create(usuario) {
    const query = `
      INSERT INTO Usuario (nome, cpf, matricula, email, statusAtleta, plano_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;
    const values = [
      usuario.nome,
      usuario.cpf,
      usuario.matricula,
      usuario.email,
      usuario.statusAtleta,
      usuario.planoId
    ];
    const { rows } = await pool.query(query, values);
    return rows[0].id;
  }

  async findById(id) {
    const { rows } = await pool.query('SELECT * FROM Usuario WHERE id = $1', [id]);
    return rows[0];
  }

  async findAll() {
    const { rows } = await pool.query('SELECT * FROM Usuario');
    return rows;
  }

  async update(id, usuario) {
    const query = `
      UPDATE Usuario
      SET nome=$1, cpf=$2, matricula=$3, email=$4, statusAtleta=$5, plano_id=$6
      WHERE id=$7
    `;
    const values = [
      usuario.nome,
      usuario.cpf,
      usuario.matricula,
      usuario.email,
      usuario.statusAtleta,
      usuario.planoId,
      id
    ];
    await pool.query(query, values);
  }

  async delete(id) {
    await pool.query('DELETE FROM Usuario WHERE id = $1', [id]);
  }
}

module.exports = new UsuarioRepository();
