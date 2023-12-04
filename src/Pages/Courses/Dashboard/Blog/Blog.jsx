import React from 'react';
import { FaAngleDoubleRight, FaHashtag } from 'react-icons/fa';

const Blog = () => {
    return (
        <div>
            <h3 className='text-3xl text-center mt-2 font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'>All Blog</h3>
            <div className='w-3/4 border p-8 my-4 mx-auto rounded-xl'>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> What is cors?</h3>
                <p className='flex'><FaAngleDoubleRight className='mt-1 font-semibold text-2xl' />CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain.CORS is essential for enabling secure communication between web applications on different domains while maintaining proper security measures. If CORS is not correctly configured, browsers will block cross-origin requests to prevent potential security vulnerabilities.</p>
            </div>
            <div className='w-3/4 border p-8 my-4 mx-auto rounded-xl'>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> Why are you using firebase?</h3>
                <p className='flex'><FaAngleDoubleRight className=' font-semibold text-2xl' />Firebase provides a secure and easy way for users to sign into their app. Developers can use Firebase Authentication to support email and password login, Google Sign-In, Facebook Login and more. Realtime Database.</p>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> What other options do you have to implement authentication?</h3>
                <p className='flex'><FaAngleDoubleRight className=' font-semibold text-2xl' />In authentication, the user or computer has to prove its identity to the server or client. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='w-3/4 border p-8 my-4 mx-auto rounded-xl'>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> How does the private route work?</h3>
                <p className='flex'><FaAngleDoubleRight className='font-semibold text-2xl' /> Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it.</p>
            </div>
            <div className='w-3/4 border p-8 my-4 mx-auto rounded-xl'>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> What is Node?</h3>
                <p className='flex'><FaAngleDoubleRight className=' font-semibold text-2xl' />Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
                <h3 className='flex text-xl text-center font-bold bg-gradient-to-r from-blue-600 to-pink-600 text-transparent bg-clip-text font-sans'><FaHashtag className='mt-1 text-purple-500' /> How does Node work?</h3>
                <p className='flex'><FaAngleDoubleRight className=' font-semibold text-2xl' />Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. HTTP is a first-class citizen in Node.js, designed with streaming and low latency in mind.</p>
            </div>
        </div>
    );
};

export default Blog;