import Input from "../../components/Input/Input";
import Layout from "../../components/Layout/Layout";
import LineaPedidoPendiente from "../../components/AdminVentas/AdminVentas";
import "../ListadoPedidosPendientesPage/ListadoPedidosPendientesPage.css";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import Button from "../../components/Button/Button";
import { React } from "react";
import { color } from "framer-motion";

const pedidosPendientes = [
  {
    cliente: "Cliente",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total:9999,
    isChecked:false,
    onItemChecked:false,
  },
  {
    cliente: "Cliente",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total:9999,
  },
  {
    cliente: "Cliente",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total:9999,
  },
  {
    cliente: "Cliente",
    producto: "Mueble",
    unidades: 5,
    tipo: "A2",
    total:9999,
  },
];

export default function ListadoPedidosPendientesPage() {
  const lineaDePedidoPendiente= pedidosPendientes.map((pedidos) => {
    return <LineaPedidoPendiente {...pedidos} />;
  });

  return (
    <Layout area="admin">
      <div className="pedidos-pendientes">
          <h1 className="titulo">Ventas</h1>
          <div className="search">
          <Button href="agregar" rightIcon={<AddIcon color="black" />}>
            Agregar
          </Button>
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
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={handleAllChecked}
              >
                Seleccionar Todo
              </Checkbox>
                <Th>CLIENTE</Th>
                <Th>PRODUCTO</Th>
                <Th>UNIDADES</Th>
                <Th>TIPO</Th>
                <Th >TOTAL</Th>
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
