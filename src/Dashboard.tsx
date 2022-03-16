import {
    GridItem,
    Text,
    Box,
    SimpleGrid,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    HStack,
    Input,
    Radio,
    Flex,
    VStack,
    Textarea,
} from "@chakra-ui/react";
import ChartRenderer from "./chart/ChartRenderer";
import TableConfigureation from "./table/TableConfigureation";
import CaptionEditor from "./caption/CaptionEditor";
import EntitySelector from "./chart/EntitySelector";

const Dashboard = () => (
    <Container maxW={"8xl"} m={4}>
        <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg : "repeat(4, 1fr)" }}
            gap={8}
        >
            <GridItem bg="white" boxShadow="base" borderRadius={20}>
                <TableConfigureation />
            </GridItem>
            <GridItem bg="white" boxShadow="base" borderRadius={20} maxW={'4xl'} colSpan={{base : 1, lg : 2}}>
                <ChartRenderer />
                <EntitySelector />
            </GridItem>
            <GridItem bg="white" boxShadow="base" borderRadius={20}>
                <CaptionEditor></CaptionEditor>
            </GridItem>
        </Grid>
    </Container>
);

export default Dashboard;
