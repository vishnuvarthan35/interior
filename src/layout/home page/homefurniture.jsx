import React from "react";

export default function HomeFurniture() {
    return (
        <div className="furniture-wrap">
        <div className="container">
            <ul className="furniture-service">
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/bed.png" alt /></div>
                        <h3>Living Room Better</h3>
                    </div>
                </a> </li>
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/office.png" alt /></div>
                        <h3>Office Furniture</h3>
                    </div>
                </a> </li>
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/interior.png" alt /></div>
                        <h3>Dedicated Interior</h3>
                    </div>
                </a> </li>
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/waiting-room.png" alt /></div>
                        <h3>Waiting Room Design</h3>
                    </div>
                </a> </li>
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/bathroom.png" alt /></div>
                        <h3>Bathroom Design</h3>
                    </div>
                </a> </li>
                <li><a href="#">
                    <div className="furniture">
                        <div className="icon"><img src="/asset/images/interior.png" alt /></div>
                        <h3>Interior Furniture</h3>
                    </div>
                </a> </li>
            </ul>
        </div>
    </div>
    );
}