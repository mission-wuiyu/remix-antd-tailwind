import { Button } from "antd"

export default function Index() {
    return (
        <div>
            Index Route
            <div className="text-green-500 bg-red-500">tailwind</div>
            <Button onClick={() => { console.log('Clicked!') }}>这是来自于Antd的按钮</Button>
        </div>
    )
}