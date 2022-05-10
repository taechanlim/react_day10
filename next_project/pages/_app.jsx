import DefaultLayout from "../components/DefaultLayout"
import 'antd/dist/antd.css'
const App = ({Component,pageProps}) => {
    return(
        <>
            여기는 무조건 실행됨 ^^
            <br />
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
            
        </>
    )
}

export default App