import React from "react";
const Hero = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="conatiner-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptas minus quae ipsum repellat voluptates alias quo soluta, eum officia, accusamus culpa nemo reiciendis perspiciatis deleniti facilis provident sunt blanditiis.</p>
                <button className="btn btn-primary btn-lg d-flex justify-content-center" type="button">Call To Action</button>
            </div>
        </div>
    );
};
export default Hero;