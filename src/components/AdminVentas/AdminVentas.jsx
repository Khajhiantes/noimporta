import { Tr, Td,Checkbox } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons'

export default function LineaMateriaPrima({
  cliente,
  producto,
  unidades,
  tipo,
  total
}) {
  return (
    
    <Tr key={cliente}>

      <Td><Checkbox isChecked={isChecked} onChange={onItemChecked} /></Td>
      <Td>{cliente}</Td>
      <Td>{producto}</Td>
      <Td>{unidades}</Td>
      <Td>{tipo}</Td>
      <Td>{total} </Td>
      
    </Tr>
  );
}
