import React,{useEffect, useState} from 'react';
import {workedData} from '../../pages/worked/worked-data'
import './worked-content.styles.scss'

const WorkedComponent = ({index}) => {
    const [companyData, setCompanyData] = useState({Points: []});
    useEffect(() => {
        setCompanyData(workedData[index]);

    }, []);
    console.log(companyData);
    return (
        <div className="worked-content-container">
            <div className="worked-content-text">
                <div className="worked-content-position">
                    {companyData.Position}
                </div>
                <div className="worked-content-date">
                    {companyData.date}
                </div>
                <div className="worked-content-point-description">
                    {companyData.PointsDescription}
                </div>
                <div className="worked-content-points">
                    {
                        companyData.Points.map(point => (
                            <div className="worked-content-point">
                                {point}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default WorkedComponent;