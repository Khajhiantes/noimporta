import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/ReporteCompras/ReporteCompras";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";
import 'react-datepicker/dist/react-datepicker.css'
import Calendar from "../../components/Calendar/Calendar";



const pedidosPendientes = [
  {
    id: "xxxx",
    producto:"Nombre1",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    producto:"Nombre2",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    producto:"Nombre3",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    id: "xxxx",
    producto:"Nombre4",
    cantidad: "xxx",
    total:"$9999"
  },
  {
    cantidad:"Total",
    total: "$9999"
  },
];

export default function ListadoPedidosPendientesPage() {
  const lineaDePedidoPendiente= pedidosPendientes.map((pedidos) => {
    return <LineaPedidoPendiente {...pedidos} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">Reporte de Compras</h1>
          <Button>Todos</Button>
          <div className="search">
          
            <div>Inicio  <Calendar></Calendar></div> 
            <div>Fin  <Calendar></Calendar></div> 
          <Input
            name="search"
            label=''
            placeholder="Buscar..."
            width="50%"
          />
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray" size="md">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>PRODUCTO</Th>
                <Th>CANTIDAD</Th>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tbody>{lineaDePedidoPendiente}</Tbody>
          </Table>
        </TableContainer>
        <Button>Imprimir</Button>
      </div>
      </Layout>
  );
}
