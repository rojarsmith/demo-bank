import React from 'react'
import {Link} from 'gatsby'

const ServiceSidebar = () => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                <li>
                    <Link to="/service-details" className="active">
                        AI & ML 模型開發
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                        資料分析
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                        資料科學
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                        人工智慧
                    </Link>
                </li>
                <li>
                    <Link to="/service-details">
                        資料視覺化
                    </Link>
                </li>
            </ul>

            <div className="download-file">
                <h3>參考文件</h3>

                <ul>
                    <li>
                        <Link to="#">
                            PDF 下載<i className='bx bxs-file-pdf'></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            案例 下載 <i className='bx bxs-file-pdf'></i>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="services-contact-info">
                <h3>聯絡方式</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>電話:</span>
                        <a href="tel:+1 (123) 456 7890">+1 (123) 456 7890</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>地址:</span>
                        台北市信義區基隆路一段888號
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>Email:</span>
                        <a href="askme@jumbofun.fun">askme@jumbofun.fun</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar