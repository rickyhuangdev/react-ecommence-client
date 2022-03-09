import { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const NotFound = () => {
    const history = useHistory()

    // 倒计时秒数
    const [second, setSecond] = useState(5)

    // 延时器引用
    const timerRef = useRef(-1)

    // 在倒计时秒数变化时执行
    useEffect(() => {
        // 1. 创建延时器
        timerRef.current = setTimeout(() => {
            if (second <= 1) {
                // 倒计时结束：关闭定时器，并跳转到首页
                clearTimeout(timerRef.current)
                history.push('/')
            } else {
                // 到计时未结束：秒数减一
                setSecond(second - 1)
            }
        }, 1000)

        // 2. 组件销毁时要清理延时器
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [second, history])

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center flex-column" style={{minHeight:'50vh'}}>
            <h1>Page Not Found...</h1>
            <span className="d-block">
                <p>Sorry for the inconvenience. Go to our homepage or check out our latest collections for Fashion, Chair, Decoration...</p>
               After {second} seconds, back to <Link to="/">Home Page</Link>
            </span>
        </div>
    )
}

export default NotFound
