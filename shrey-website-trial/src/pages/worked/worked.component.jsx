import React, {useState} from 'react'
import './worked.component.scss';
import WorkedComponent from '../../components/worked-content/worked-content.component'
const Worked = () => {

    const [renderElement, setRenderElement] = useState(0);

    const handleClick = (index) => {
        setRenderElement(index);
        console.log(index);
    }
    return (
        <div className="worked-container">
            <div className="worked-nav">

                <div className="worked-nav-item" onClick={() => handleClick(0)}>Elastic</div>
                <div className="worked-nav-item" onClick={() => handleClick(1)}>Hexagon PPM</div>
                <div className="worked-nav-item" onClick={() => handleClick(2)}>Offix</div>
                <div className="worked-nav-item" onClick={() => handleClick(3)}>JP Morgan Chase & Co.</div>
            </div>
            <WorkedComponent index={0} />
        </div>
    )
}

export default Worked;