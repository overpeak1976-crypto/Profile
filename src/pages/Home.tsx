import { Container, Heading, Text, Card, Flex } from '@radix-ui/themes'

function Home() {
    return (
        <Container size='3' py='6'>
            <Flex direction='column' gap='4'>
                {/* Header */}
                <Heading size='8' mb='4' style={{ textAlign: 'center' }}>
                    ยินดีต้อนรับ
                </Heading>
                <Text size='5' mb='6' color='gray' style={{ textAlign: 'center' }}>
                    เว็บไซต์แนะนำตัวและประวัติส่วนตัว
                </Text>

                {/* About Website */}
                <Card>
                    <Heading size='6' mb='2'>
                        เกี่ยวกับเว็บไซต์นี้
                    </Heading>
                    <Text>
                        เว็บไซต์นี้สร้างขึ้นเพื่อแนะนำข้อมูลส่วนตัวของผม พร้อมแสดงประวัติการศึกษาและทักษะ
                    </Text>
                </Card>

                {/* Technologies */}
                <Card>
                    <Heading size='5' mb='2'>
                        เทคโนโลยีที่ใช้
                    </Heading>
                    <Text>
                        React 19 + TypeScript<br />
                        React Router สำหรับการจัดการหน้า<br />
                        Radix UI สำหรับ UI Components<br />
                        Vite สำหรับ Build Tool
                    </Text>
                </Card>
            </Flex>
        </Container>
    )
}

export default Home;
