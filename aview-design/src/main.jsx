import React from 'react'
import styled from 'styled-components';
import fasteasy from '../src/assets/fast-and-easy.png';
import flexible from '../src/assets/flexible.png'

const Maincomponent = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #090C32;
`
const Optioncards =  styled.div`
    display: flex;
    flex: wrap;
    justify-content: center;
    align-items: center;
`
const Cards = styled.div`
    margin: 20vh 5vw 5vw 0;
    width: 360px;
    height: 530px;
    border: solid 6px transparent;
    border-radius: 15px;
    background-color: #090C32;
    background-image: linear-gradient(180deg, rgba(9, 12, 50, 1) 0%, rgba(9, 12, 50, 1) 52.08%, rgba(9, 12, 50, 1) 100%),
    linear-gradient(120deg,#FE3688, #73BCFF, #B9DCFF, #FE3688);
    background-origin: border-box;
    background-clip: content-box, border-box;
`
const Overlay = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.075) 52.08%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;

    &:hover {
        background: none;
    }
`
const Imagecontainer = styled.div`
    position: absolute;
    top: 5vh;
    left: 30vw;
`
const Cardtextbox = styled.div`
    
`

function Main() {
  return (
    <Maincomponent>
        <Optioncards>
            <Cards className='fast-and-easy'>
                <Overlay>
                    <Imagecontainer>
                        <img src={fasteasy} />
                    </Imagecontainer>
                </Overlay>
            </Cards>
            <Cards className='flexible'>
                <Overlay>
                    <Imagecontainer>
                        <img src={flexible} />
                    </Imagecontainer>
                </Overlay>
            </Cards>
        </Optioncards>
    </Maincomponent>
  )
}

export default Main