import './grayScale.css'
import Input from '../../components/inputComponent/input'
import Text from '../../components/textComponent/text'
import Button from '../../components/buttonComponent/button'
import { useEffect, useRef, useState } from 'react'
const GrayScale = () => {
    const [cnv, setCnv] = useState('')
    const [display, setDisplay] = useState('')
    const canvasRef = useRef(null)

    useEffect(() => {
        setCnv(canvasRef.current)
    },[])
    const handleOnChange = (files, type) => {
        if(type === 'file'){
            if (files.length === 0) {
                return;
            }
            const file = files[0];
            const fileReader = new FileReader();
            fileReader.onload = () => {
                let image = new Image();
                image.onload = function() {
                    cnv.width = image.naturalWidth
                    cnv.height = image.naturalHeight
                    let cnx = cnv.getContext('2d');
                    cnx.drawImage(image, 0 , 0);
                    setDisplay('displayGray')
                }
                image.src = fileReader.result;
            }
            fileReader.readAsDataURL(file);
        }
    }

    const convert = () => {
        let cnx = cnv.getContext('2d');
        let width = cnv.width;
        let height = cnv.height;
        let imgPixels = cnx.getImageData(0, 0, width, height);

        for(let y = 0; y < height; y++){
            for(let x = 0; x < width; x++){
                let i = (y * 4) * width + x * 4;
                let avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
                imgPixels.data[i] = avg;
                imgPixels.data[i + 1] = avg;
                imgPixels.data[i + 2] = avg;
            }
        }

        cnx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);      
    }
    console.log(cnv,'athil')
    return (
        <div className='containerGray'>
            <div className='buttonContainerGray'>
                <Input style={{display: 'none'}} onChange={handleOnChange} type="file"><Text>Upload an Image</Text></Input>
            </div>   
            <div className={`displayNoneGray ${display}`}>
                <canvas className='maxWidthGray' ref={canvasRef}></canvas>
            </div>   
            <div className={`displayNoneGray ${display}`}>
                <Button onClick={convert}><Text>Convert To GrayScale</Text></Button>
            </div>
        </div>
    )
}

export default GrayScale