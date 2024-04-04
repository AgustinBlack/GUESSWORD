import clases from './Words.module.css'
import Letters from '../Letters/Letters'
import { useState } from 'react'

const Words = () => {
    const [data, setData] = useState({letterOne: '', letterTwo: '', letterThree: '', letterFour: '', letterFive: '' })

    const letterSelected = (e) => {
        if (!data.letterOne.length >= 1) {
            setData({...data, letterOne: `${data.letterOne}` + e.target.innerText})
        } else if (data.letterOne.length >= 1) {
            setData({...data, letterTwo: `${data.letterTwo}` + e.target.innerText})
        } else if (data.letterTwo.length >= 1) {
            setData({...data, letterThree: `${data.letterThree}` + e.target.innerText})
        } else if (data.letterThree.length >= 1) {
            setData({...data, letterFour: `${data.letterFour}` + e.target.innerText})
        } else if (data.letterFour.length >= 1) {
            setData({...data, letterFive: `${data.letterFive}` + e.target.innerText})
        } else {
            console.error('Algo salio mal')
        }
    }

    return (
        <>
        <div className={clases.father}>
            <div className={clases.words}>
                <span className={clases.letter}>{data.letterOne}</span>
                <span className={clases.letter}>{data.letterTwo}</span>
                <span className={clases.letter}>{data.letterThree}</span>
                <span className={clases.letter}>{data.letterFour}</span>
                <span className={clases.letter}>{data.letterFive}</span>
            </div>
            <div className={clases.words}>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
            </div>
            <div className={clases.words}>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
            </div>
            <div className={clases.words}>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
            </div>
            <div className={clases.words}>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
                <span className={clases.letter}></span>
            </div>
        </div>
        <div className={clases.father__letters}>
            <Letters letter='Q' clase='letter' handleClick={letterSelected}/>
            <Letters letter='W' clase='letter' handleClick={letterSelected}/>
            <Letters letter='E' clase='letter' handleClick={letterSelected}/>
            <Letters letter='R' clase='letter' handleClick={letterSelected}/>
            <Letters letter='T' clase='letter' handleClick={letterSelected}/>
            <Letters letter='Y' clase='letter' handleClick={letterSelected}/>
            <Letters letter='U' clase='letter' handleClick={letterSelected}/>
            <Letters letter='I' clase='letter' handleClick={letterSelected}/>
            <Letters letter='O' clase='letter' handleClick={letterSelected}/>
            <Letters letter='P' clase='letter' handleClick={letterSelected}/>
            <Letters letter='A' clase='letter' handleClick={letterSelected}/>
            <Letters letter='S' clase='letter' handleClick={letterSelected}/>
            <Letters letter='D' clase='letter' handleClick={letterSelected}/>
            <Letters letter='F' clase='letter' handleClick={letterSelected}/>
            <Letters letter='G' clase='letter' handleClick={letterSelected}/>
            <Letters letter='H' clase='letter' handleClick={letterSelected}/>
            <Letters letter='J' clase='letter' handleClick={letterSelected}/>
            <Letters letter='K' clase='letter' handleClick={letterSelected}/>
            <Letters letter='L' clase='letter' handleClick={letterSelected}/>
            <Letters letter='L' clase='letter' handleClick={letterSelected}/>
            <Letters letter='Ñ' clase='letter' handleClick={letterSelected}/>
            <Letters letter='Z' clase='letter' handleClick={letterSelected}/>
            <Letters letter='X' clase='letter' handleClick={letterSelected}/>
            <Letters letter='C' clase='letter' handleClick={letterSelected}/>
            <Letters letter='V' clase='letter' handleClick={letterSelected}/>
            <Letters letter='B' clase='letter' handleClick={letterSelected}/>
            <Letters letter='N' clase='letter' handleClick={letterSelected}/>
            <Letters letter='M' clase='letter' handleClick={letterSelected}/>                
        </div>
        </>
    )
}

export default Words