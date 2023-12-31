import ListGroup from 'react-bootstrap/ListGroup';
import { FiDollarSign, FiCreditCard, FiBriefcase, FiLogOut } from 'react-icons/fi'; // Importe os ícones desejados.
import Link from 'next/link';

function Lista() {
  return (
    <>
      <ListGroup horizontal className='lista list-group list-group-horizontal'>
        <ListGroup.Item className='Lista-itens list-group-item'>
          <FiDollarSign /> Despesas
        </ListGroup.Item>
        <ListGroup.Item className='Lista-itens list-group-item'>
          <FiCreditCard /> Cartão
        </ListGroup.Item>
        <ListGroup.Item className='Lista-itens'>
        <Link href="/investimentos" style={{ textDecoration: 'none', color: 'black'  }}>
          <FiBriefcase /> Investimentos           </Link>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal className='lista'>
        <ListGroup.Item className='Lista-itens'>
          <FiDollarSign /> Rendimentos
        </ListGroup.Item>
        <ListGroup.Item className='Lista-itens'>
          <Link href="/carteira" style={{ textDecoration: 'none', color: 'black'  }}>
              <FiBriefcase /> Carteira
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className='Lista-itens'>
          <FiLogOut /> Pagamentos
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Lista;
