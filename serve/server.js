const express = require('express') 
const { sequelize } = require('./models')
const passport = require('passport')
const passportConfig = require('./passport')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
const cors = require('cors')


//variable
const PORT = process.env.PORT || 3500
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'ingoo'

// router
const userRouter = require('./routes/user')
const commentRouter = require('./routes/comment')

app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser(COOKIE_SECRET))

app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true,
}))
//http://localhost:3000/user/web7722@gmail.com
sequelize.sync({ force: false })
.then( ()=>{
    console.log('Connect')
} )
.catch( ()=>{
    console.log(' Disconect ')
} )

app.use(passport.initialize()) // [1]. passport 를 미들웨어에 장착. 
passportConfig() // [6]: 모든 전략을 모아둔파일을 실행하기.

app.use('/user',userRouter)
app.use('/comment',commentRouter)

app.listen(PORT,()=>{
    console.log('server start')
})