import React, {useState, useEffect} from 'react'
import './worked.component.scss';
import WorkedComponent from '../../components/worked-content/worked-content.component'
import Fade from 'react-reveal/Fade';

const Worked = () => {

    const [renderElement, setRenderElement] = useState(0);

    const[active,setActive] = useState([true,false,false,false]);

    const spanHandleClick = (index) => {
        var arr = [false,false,false,false];
        arr[index] = true;
        setActive(arr);
    }

    const handleClick = (index) => {
        setRenderElement(index);
        console.log(index);
    }
    return (
        <div className="worked-container">
            <Fade delay={100}>
            <div className="worked-title">
                Some Organisations I've worked for
            </div>

            </Fade>
            <div className="worked-nav">

                <Fade delay={200}>
                <div className="worked-nav-item" onClick={() => handleClick(0)}>
                <span className={active[0]? "worked-active" : null} onClick={() => spanHandleClick(0)}>
                    Elastic
                </span>
                </div>
                </Fade>
                <Fade delay={300}>
                <div className="worked-nav-item" onClick={() => handleClick(1)}>
                <span className={active[1]? "worked-active" : null} onClick={() => spanHandleClick(1)}>
                    Hexagon PPM
                </span>
                </div>
                </Fade>
                <Fade delay={400}>
                <div className="worked-nav-item" onClick={() => handleClick(2)}>
                <span className={active[2]? "worked-active" : null} onClick={() => spanHandleClick(2)}>
                    Offix
                </span>
                </div>
                </Fade>
                <Fade delay={500}>
                <div className="worked-nav-item" onClick={() => handleClick(3)}>
                <span className={active[3]? "worked-active" : null} onClick={() => spanHandleClick(3)}>
                    JP Morgan Chase & Co.
                </span>
                </div>

                </Fade>
            </div>
            <WorkedComponent index={renderElement} />
        </div>
    )
}

export default Worked;