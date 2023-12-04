import React from 'react';

const Dashboard = () => {
    return (
        <div className='container ml-3'>
            <h2 className='text-center text-4xl font-semibold text-green-700'>Congratulation! Successfully enrollment done</h2>
            <div className='grid sm:grid-cols-3 mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/F5DMV0b/react-Native.jpg" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            React Native for Android App

                        </h2>
                        <p>React Native is an open-source framework for building mobile applications using JavaScript and React.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/zrdFrHc/flutter.jpg" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Flutter for Android App
                        </h2>
                        <p>Flutter is an open-source UI software development toolkit created by Google.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/1f1KSkn/MERN.webp" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            MERN Stack for Web
                        </h2>
                        <p>The MERN stack is a popular and powerful technology stack for building full-stack web applications. MERN stands for MongoDB, Express.js, React.js, and Node.js—four technologies that work together seamlessly to provide an end-to-end framework for web development.</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img src="https://i.ibb.co/jbq9Y6V/949207101753661-5f26821acf7cc.jpg" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Visual Identity Graphic Design & Motion Graphic Design
                        </h2>
                        <p>Both Visual Identity Graphic Design and Motion Graphic Design play crucial roles in building</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img src="https://i.ibb.co/bQYjVWH/949207101753661-5f26821acf7cc.jpg" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            UI/UX Design
                        </h2>
                        <p>UI (User Interface) design and UX (User Experience) design are two interrelated but distinct aspects</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img src="https://i.ibb.co/7kYQ8QP/pp4ll13f5onw4gqj8ggl.webp" className='h-64 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Frontend Development for Web
                        </h2>
                        <p>Frontend development refers to the process of building the user interface (UI) and user experience (UX) </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">See video</div>
                            <div className="badge badge-outline">Go to Home</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;