import { Text } from '../../../components'
import Header from '../../../components/Home/Header'
import { Container } from './styles'
import { Button } from 'react-native'

const Home = ({ navigation }: any) =>
        <>
            <Header />
            <Container>
                <Button title='HomeDetails' onPress={() => navigation.navigate('HomeDetails')} />
                <Text size={22} weight={400}>Home</Text>
            </Container>
        </>

export default Home
