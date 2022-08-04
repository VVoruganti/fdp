import {
    Text,
    Title,
    Button,
    Group,
    Container
} from '@mantine/core';
import { FdpStorage } from '@fairdatasociety/fdp-storage'
import { useState, useEffect } from 'react';

export default function Auth() {

    const [fdp, setFDP] = useState('')
    const [pod, setPod] = useState('');

    useEffect(() => {
        const localFDP = new FdpStorage('http://localhost:1633', 'http://localhost:1635')
        setFDP(localFDP);
    }, [])

    useEffect(() => {

    }, [fdp]);

    const register = async (username, password) => {
        const wallet = fdp.account.createWallet() // after creating a wallet, the user must top up its balance before registration
        await fdp.account.register(username, password)
    }

    const login = async (username, password) => {
        const wallet = await fdp.account.login(username, password)
    }

    return (
        <div className="app" style={{ width: 350, paddingBottom: 25 }}>
            <Container>
                <Title align="center">Fair Data Society</Title>
                <Text align="center">
                    Authenticated into your FDP Account
                </Text>
                <Container>
                </Container>
                <Group position="center">
                    <Button>Register</Button>
                    <Button>Login</Button>
                </Group>
            </Container>
        </div>
    );
}
