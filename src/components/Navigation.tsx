import { Link, useLocation } from 'react-router-dom'
import { Flex, Button, Box } from '@radix-ui/themes'
import { IoHome } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'

function Navigation() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { name: 'หน้าหลัก', icon: <IoHome size={18} />, path: '/' },
        { name: 'ประวัติส่วนตัว', icon: <FaUser size={16} />, path: '/profile' },
    ];

    return (
        <Box 
            className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50"
        >
            <Flex gap="4" p="3" justify="center" wrap="wrap">
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} className="no-underline">
                        <Button
                            variant={isActive(item.path) ? 'solid' : 'soft'}
                            size="3"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                transition: 'transform 0.15s, box-shadow 0.15s',
                                boxShadow: isActive(item.path) ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {item.icon}
                            {item.name}
                        </Button>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
}

export default Navigation;
