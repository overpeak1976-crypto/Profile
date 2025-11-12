import { Box, Container, Heading, Text, Card, Flex, Avatar, Badge, Separator } from '@radix-ui/themes'

function Profile() {
    const skills: { name: string; color:
        "blue" | "green" | "purple" | "orange" | "red" | "cyan" | "pink" | "indigo"
    }[] = [
        { name: 'React', color: 'blue' },
        { name: 'Node.js', color: 'green' },
        { name: 'TypeScript', color: 'purple' },
        { name: 'HTML / CSS', color: 'orange' },
        { name: 'Git & GitHub', color: 'red' },
        { name: 'TailwindCSS', color: 'cyan' },
        { name: 'UI/UX Design', color: 'pink' },
        { name: 'Firebase', color: 'indigo' }
    ]

    return (
        <Container size='3' py='6'>
            <Card style={{ padding: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '16px' }}>
                <Flex direction='column' gap='5'>

                    {/* 🧑‍🎓 Header Section */}
                    <Flex align='center' gap='4'>
                        <Avatar
                            size='8'
                            radius='full'
                            fallback='NW'
                            color='blue'
                            src='./public/1.jpg'
                            style={{
                                transition: 'transform 0.2s',
                                cursor: 'pointer',
                                objectFit: 'cover',       // crop รูปเต็ม Avatar
                                objectPosition: 'center', // จัดตำแหน่งกลางหน้า
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.2)' }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                        />
                        <Box>
                            <Heading size='7'>นันทวัฒน์ วิจิตรกูล</Heading>
                            <Text size='3' color='gray'>นักศึกษาวิศวกรรมคอมพิวเตอร์</Text>
                        </Box>
                    </Flex>

                    <Separator size='4' />

                    {/* 💬 About Me Section */}
                    <Box>
                        <Heading size='5' mb='3'>
                            เกี่ยวกับฉัน
                        </Heading>
                        <Text size='3' color='gray'>
                            สวัสดีครับ ผมชื่อ นันทวัฒน์ วิจิตรกูล เป็นนักศึกษาสาขาวิศวกรรมคอมพิวเตอร์ 
                            ที่มีความสนใจด้านการพัฒนาเว็บแอปพลิเคชัน การออกแบบ UI/UX 
                            และเทคโนโลยีใหม่ ๆ ที่ช่วยยกระดับประสบการณ์ผู้ใช้
                        </Text>
                    </Box>

                    <Separator size='4' />

                    {/* 🎓 Education Section */}
                    <Box>
                        <Heading size='5' mb='3'>
                            การศึกษา
                        </Heading>
                        <Card style={{ background: '#f9fafb', padding: '16px' }}>
                            <Flex direction='column' gap='2'>
                                <Heading size='4'>ปริญญาตรี วิศวกรรมศาสตรบัณฑิต</Heading>
                                <Text color='gray'>คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์</Text>
                                <Text color='gray'>มหาลัยธุรกิจบัณฑิตย์</Text>
                                <Text size='2' color='gray'>พ.ศ. 2564 - ปัจจุบัน</Text>
                            </Flex>
                        </Card>
                    </Box>

                    <Separator size='4' />

                    {/* 🧠 Skills Section */}
                    <Box>
                        <Heading size='5' mb='3'>
                            ทักษะและความสามารถ
                        </Heading>
                        <Flex gap='2' wrap='wrap'>
                            {skills.map((skill, index) => (
                                <Badge
                                    key={index}
                                    size='2'
                                    color={skill.color}
                                    style={{
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.2)' }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                                >
                                    {skill.name}
                                </Badge>
                            ))}
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Container>
    )
}

export default Profile;
