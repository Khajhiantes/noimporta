import { Tr, Td } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  id,
  producto,
  cantidad,
  total
}) {
  return (
    <Tr key={id}>
      <Td>{id}</Td>
      <Td>{producto}</Td>
      <Td>{cantidad}</Td>
      <Td>{total}</Td>
    </Tr>
  );
}
