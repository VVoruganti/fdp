import { MantineProvider, Text, Title, Button, Group, Container } from '@mantine/core';

export function App() {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
        >
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
        </MantineProvider>
    );
}
