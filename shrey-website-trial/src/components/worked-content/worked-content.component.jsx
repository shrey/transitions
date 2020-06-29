import React,{useEffect, useState} from 'react';
import {workedData} from '../../pages/worked/worked-data'
import './worked-content.styles.scss'
import Fade from 'react-reveal/Fade';


const WorkedComponent = ({index}) => {
    const [companyData, setCompanyData] = useState({Points: []});
    useEffect(() => {
        setCompanyData(workedData[index]);
        console.log(index);
    }, [index]);
    console.log(companyData);
    return (
        <div className="worked-content-container">
            <div className="worked-content-text">
                <Fade delay={200}>
                <div className="worked-content-position">
                    {companyData.Position}
                </div>
                </Fade>
                <Fade delay={300}>
                <div className="worked-content-date">
                    {companyData.date}
                </div>
                </Fade>
                <Fade delay={400}>

                <div className="worked-content-points">
                    {
                        companyData.Points.map(point => (
                            <div className="worked-content-point">
                                {point}
                            </div>
                        ))
                    }
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default WorkedComponent;