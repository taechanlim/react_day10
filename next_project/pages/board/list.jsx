const axios = require('axios')



const List = (props) => {

    return(
        <div>
                <table>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{props.list.map(v=>v.id)}</td>
                        <td>{props.list.map(v=>v.content)}</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </table>
            </div>
    )
}

export async function getServerSideProps(){
    console.log ('hello server')
    // await axios 로 데이터를 받아와서 아래 props로 넘겨주면 OK (글번호,제목,내용,작성자등 받아와서)
    const result = await axios.get('http://localhost:3500/comment/list')
    const list = result.data.result
    
    return{
        props:{
            list:list
        }
    }
}

export default List