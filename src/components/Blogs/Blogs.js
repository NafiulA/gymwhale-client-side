import React from 'react';

const Blogs = () => {
    return (
        <div className='min-h-[700px] mb-8'>
            <h3 className='text-4xl my-4 text-center text-slate-800 font-bold'>Questions/Answers</h3>
            <div className='w-11/12 md:w-3/4 mx-auto'>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q1. Difference between authorzation and authentication.</p>
                    <p className='text-xl pt-2'>A: Typically authorzation comes after authentication. Authentication is the process of checking someones identity. For web apps,authentication is usually done using email and password or through verification of some third party application like google. Authorization is the process of verfying what features, files, data current user has access to. For example, some user can only read specific data and some user can both read and write that specific data because they are authorized to do that.</p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2. Why are you using firebase? What other options do you have to implement authentication?</p>
                    <p className='text-xl pt-2'>A: We are currently using firebase for authentication purposes. We can authenticate users to our web apps using firebases authentication service. With their authentication service, we can use email and password, phone , google, facebook, github and many other option to authenticate. There are many other options in current market for providing authentication. Such as, 1. Back4app, 2. Parse, 3. AWS amplify, 4. Backendless, 5. Kuzzle, and many more. </p>
                </div>
                <div className='my-6 p-6 border-2 rounded-xl shadow-lg'>
                    <p className='text-2xl font-semibold' >Q2. What other services does firebase provide other than authentication?</p>
                    <p className='text-xl pt-2'>A: Firebase is Google's application development platform. It is a toolset that helps us to build, improve and grow our app all ina very user friendly way. To build better apps, some services it provides are cloud functions, cloud storage, hosting, machine learing kit, realtime database, etc. To imporve our app's quality, firebase provides services like crashlytics, performance monitoring. And last but not the least to grow our app we can use services like in-app messaging, cloud messaging, user analytics and many more. In one line we can say,firebase toolset accelarates the development journey and help a developer in many ways.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;