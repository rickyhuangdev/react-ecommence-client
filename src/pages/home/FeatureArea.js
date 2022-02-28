import React from 'react';
import { BsTruck,BsFillCreditCard2FrontFill,BsChatDots,BsFillTelephoneFill } from "react-icons/bs";
const FeatureArea = () => {
    return (
        <section className="features__area pb-4">
            <div className="container-fluid mx-3">
                <div
                    className="row row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 gx-0">
                    <div className="col">
                        <div className="features__item d-flex bg-white align-items-center p-4">
                            <div className="features__icon mr-20"><BsTruck /></div>
                            <div className="features__content"><h6>FREE DELIVERY</h6><p>For all orders over $120</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="features__item d-flex bg-white align-items-center p-4">
                            <div className="features__icon mr-20"><BsFillCreditCard2FrontFill /></div>
                            <div className="features__content"><h6>SAFE PAYMENT</h6><p>100% secure payment</p></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="features__item d-flex bg-white align-items-center p-4">
                            <div className="features__icon mr-20"><BsChatDots /></div>
                            <div className="features__content"><h6>24/7 HELP CENTER</h6><p>Delicated 24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="features__item features__item-last d-flex bg-white align-items-center p-4">
                            <div className="features__icon mr-20"><BsFillTelephoneFill /></div>
                            <div className="features__content"><h6>FRIENDLY SERVICES</h6><p>30 day satisfaction
                                guarantee</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureArea;
