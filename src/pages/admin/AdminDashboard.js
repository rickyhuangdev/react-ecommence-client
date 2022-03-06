import React from 'react';
import AdminNav from "../../components/nav/AdminNav";
import "../../assets/css/admin_dashboard.css"
const AdminDashboard = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container p-5">
                       <section>
                           <div className="pt-0" id="card-stats">
                               <div className="row">
                                   <div className="col m-b-30">
                                       <div className="card ">
                                           <div className="   text-center card-body">
                                               <div className="text-success   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-success"><i
                                                       className="mdi mdi-arrow-up-bold mdi-18px"></i></span></div>
                                                   <h6 className="m-t-5 m-b-0">19%</h6></div>
                                               <div className=" text-center"><h3>$199,580 </h3></div>
                                               <div className="text-overline ">CURRENT FISCAL</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col m-b-30">
                                       <div className="card ">
                                           <div className="   text-center card-body">
                                               <div className="text-danger   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-danger"><i
                                                       className="mdi mdi-arrow-down-bold mdi-18px"></i></span></div>
                                                   <h6 className="m-t-5 m-b-0">32%</h6></div>
                                               <div className=" text-center"><h3>$65,055 </h3></div>
                                               <div className="text-overline ">Returning AVG</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col m-b-30">
                                       <div className="card ">
                                           <div className="   text-center card-body">
                                               <div className="text-warning   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-warning"><i
                                                       className="mdi mdi-arrange-send-to-back mdi-18px"></i></span>
                                                   </div>
                                                   <h6 className="m-t-5 m-b-0">74%</h6></div>
                                               <div className=" text-center"><h3>35 </h3></div>
                                               <div className="text-overline ">on-going Projects</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col m-b-30">
                                       <div className="card ">
                                           <div className="   text-center card-body">
                                               <div className="text-info   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-info"><i
                                                       className="mdi mdi-account-convert mdi-18px"></i></span></div>
                                                   <h6 className="m-t-5 m-b-0">36%</h6></div>
                                               <div className=" text-center"><h3>$899,580 </h3></div>
                                               <div className="text-overline ">Recurring bills</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col d-lg-block d-none m-b-30">
                                       <div className="card ">
                                           <div className="   text-center card-body">
                                               <div className="text-danger   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-danger"><i
                                                       className="mdi mdi-arrow-up-bold mdi-18px"></i></span></div>
                                                   <h6 className="m-t-5 m-b-0">49%</h6></div>
                                               <div className=" text-center"><h3>$19,124 </h3></div>
                                               <div className="text-overline ">server cost</div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col visible-xlg m-b-30">
                                       <div className="card">
                                           <div className="   text-center card-body">
                                               <div className="text-success   ">
                                                   <div className="avatar avatar-sm "><span
                                                       className="avatar-title rounded-circle badge-soft-success"><i
                                                       className="mdi mdi-arrow-up-bold mdi-18px"></i></span></div>
                                                   <h6 className="m-t-5 m-b-0">85%</h6></div>
                                               <div className=" text-center"><h3>$82,580 </h3></div>
                                               <div className="text-overline ">mobile ads</div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
