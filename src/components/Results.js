import moment from "moment";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Results(props) {
  const allResults = props.data?.items;
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Key</Th>
          <Th>Headline</Th>
          <Th>SubHeadline</Th>
          <Th>Start Time</Th>
        </Tr>
      </Thead>
      <Tbody>
        {allResults?.map((item) => (
          <Tr key={item.key}>
            <Td>{item.key}</Td>
            <Td>{item.publishers[0].broadcasts[0].headline}</Td>
            <Td>{item.publishers[0].broadcasts[0].subheadline}</Td>
            <Td>{moment(item.start_time).format("MMMM Do YYYY h:mm ")}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default Results;
