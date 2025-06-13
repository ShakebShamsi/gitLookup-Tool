// import React, { useEffect } from 'react'
// import {useLoaderData} from "react-router-dom";

// function Github() {
//    const data = useLoaderData()
   
//    return (
//       <div className='text-center m-4 p-4 text-3xl bg-gray-600 text-white'>Github: {data.name}
//          <img src={data.avatar_url} width={300} alt="" />
//       </div>
//    )
// }

// export default Github

// export const githubInfoLoader = async () => {
//    const response = await fetch('https://api.github.com/users/ShakebShamsi')
//    return response.json()
// }

import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col items-center p-6">
                    <img
                        src={data.avatar_url}
                        alt={data.name}
                        className="w-32 h-32 rounded-full border-4 border-blue-500"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-800">{data.name || data.login}</h2>
                    <p className="text-gray-500">@{data.login}</p>
                    <p className="mt-2 text-sm text-center text-gray-600">{data.bio || 'No bio available.'}</p>

                    <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <p className="text-gray-700 font-semibold">{data.followers}</p>
                            <p className="text-sm text-gray-500">Followers</p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-semibold">{data.following}</p>
                            <p className="text-sm text-gray-500">Following</p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-semibold">{data.public_repos}</p>
                            <p className="text-sm text-gray-500">Repos</p>
                        </div>
                    </div>

                    {data.location && (
                        <p className="mt-3 text-sm text-gray-600">
                            📍 {data.location}
                        </p>
                    )}

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ShakebShamsi');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
    }
    return response.json();
};
