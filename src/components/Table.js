import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table className="th">
          <thead>
            <tr>
              <th className="th-0lax">Descrição</th>
              <th className="th-0lax">Tag</th>
              <th className="th-0lax">Método de pagamento</th>
              <th className="th-0lax">Valor</th>
              <th className="th-0lax">Moeda</th>
              <th className="th-0lax">Câmbio utilizado</th>
              <th className="th-0lax">Valor convertido</th>
              <th className="th-0lax">Moeda de conversão</th>
              <th className="th-0lax">Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
