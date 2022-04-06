
import './MiniPage.css'

export default function MiniPage (props) {

    return (
        <>
            <div onClick={() => props.closeSum()} className="Modal"></div>
            <div className='miniPageUI'>
                {props.children}
            </div>
        </>
    )
}