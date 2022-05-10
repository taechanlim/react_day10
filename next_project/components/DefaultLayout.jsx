import Link from 'next/link' //next도 link를 제공해줍니다.
import {Menu,Row,Col} from 'antd'
import {MailOutlined , AppstoreOutlined, SettingOutlined} from '@ant-design/icons'

const DefaultLayout = ({children}) => {
    return(
        <>
                여기는 헤더임 링크를 걸어주세요. <br />
                <Row justify='end'>
                <Menu theme="dark" mode="horizontal">
                <Col span={6} style={{height:"200px"}}>
                    <Menu.Item icon={<AppstoreOutlined />}><Link href="/">홈으로</Link></Menu.Item>
                    <Menu.Item icon={<SettingOutlined />}><Link href="/about">어바웃으로</Link></Menu.Item>
                    <Menu.Item><Link href="/">아무거나</Link></Menu.Item>
                    <Menu.SubMenu title="게시판">
                        <Menu.Item><Link href="/board/list">리스트</Link></Menu.Item>
                    </Menu.SubMenu>
                    </Col>
                </Menu>
                </Row>
                <Row justify='center'>
                    <Col span={24} style={{background:"red"}}>dasd</Col>
                </Row>
                <Row justify='end'>
                    <Col span={12} style={{background:"black"}}>dasd</Col>
                </Row>
                <Row>
                    <Col span={6} style={{background:"blue"}}>dasd</Col>
                </Row>
                
            <div>
                {children}
            </div>
            <div>
                여기는 풋터다~
            </div>
            
        </>
    )
}



export default DefaultLayout