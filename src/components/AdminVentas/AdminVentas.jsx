import { Tr, Td,Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  id,
  cliente,
  producto,
  unidades,
  tipo,
  total,
  isChecked,
  onItemChecked,
}) {
  return (
    <Tr key={id}>
      <Td>
        <Checkbox isChecked={isChecked} onChange={() => onItemChecked(id)} background={"green"} />
      </Td>
      <Td>{cliente}</Td>
      <Td>{producto}</Td>
      <Td>{unidades}</Td>
      <Td>{tipo}</Td>
      <Td>{total} </Td>
    </Tr>
  );
}
