import clases from './WordContainer.module.css'
import Words from '../Words/Words'

const WordContainer = () => {
    return (
        <div className={clases.container}>
            <Words/>
        </div>
    )
}

export default WordContainer