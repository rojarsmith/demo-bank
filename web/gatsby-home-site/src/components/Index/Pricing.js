import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

const Pricing = () => {
    return (
        <div className="membership-levels-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="priceing" /> 
                        Pricing
                    </span>
                    <h2>計費方式</h2>
                    <p>Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world! Make fun for the world!</p>
                </div>

                <div className="membership-levels-table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    <span className="title">方案特點</span>
                                </th>
                                <th>
                                    <span className="price">$15.00</span>
                                    <span className="title">基本方案</span>
                                    <span className="desc">/每月</span>
                                </th>
                                <th>
                                    <span className="price">$35.00</span>
                                    <span className="title">進階方案</span>
                                    <span className="desc">/每月</span>
                                </th>
                                <th>
                                    <span className="price">$65.00</span>
                                    <span className="title">旗艦方案</span>
                                    <span className="desc">/每月</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>模型數量</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        顧問諮詢次數
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        現場教育訓練
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        線上文件資料庫
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        客製化設計
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        假日支援服務
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        資料庫備援
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        資安系統安裝
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link to="#">
                                        每月運作結果分析
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        點選
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        點選
                                    </Link>
                                </td>
                                <td>
                                    <Link to="#" className="select-btn">
                                        點選
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing