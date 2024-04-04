import clases from './Letters.module.css'

const Letters = (params) => {
    const { letter, clase, handleClick } = params

    return (
        <button className={clases[clase]} onClick={handleClick} >{letter}</button>
    )
}

export default Letters