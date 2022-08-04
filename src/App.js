import { MantineProvider, Text, Title, Button, Group, Container } from '@mantine/core';
import { useState } from 'react';
import Auth from './Auth.js'

export function App() {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
            {isAuthenticated ?
                <div className="app" style={{ width: 350, paddingBottom: 25 }}>
                    <Container>
                        <Title align="center">Fair Data Society</Title>
                        <Text align="center">
                            Use this site to save websites
                        </Text>
                        <Group position="center">
                            <Button>Save</Button>
                            <Button>View</Button>
                        </Group>
                    </Container>
                </div>
                :
                <Auth setAuthenticated={setAuthenticated} />
            }
        </MantineProvider>
    );
}
