//board/view/1
import { useRouter } from "next/router"

const View = (props) => {
    console.log('hello front')
    const router = useRouter()
    return(
        <>
            View페이지임 <h2> {router.query.id} {props.name}</h2>
        </>
    )
}

export function getServerSideProps(context){
    console.log('hello server')
    // await axios 로 데이터를 받아와서 아래 props로 넘겨주면 OK (글번호,제목,내용,작성자등 받아와서)
    console.log(context) //context.query.id 를 쓰면 주소의 마지막숫자를 가져옴(body로 숫자 보내주면 where절 idx로 각 글을 받아올수있을듯)
    return{
        props:{
            name:'hihihi'
        }
    }
}
//넥스트가 getServerSideProps 함수를 만나면 먼저 실행시킨다. 그래서 위 컴포넌트에서 props로 받을수 있다


// router.query.id 는 주소의 맨끝 숫자를 가져와준다
export default View