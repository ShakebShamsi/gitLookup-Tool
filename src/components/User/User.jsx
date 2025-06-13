import { useState } from 'react';

export default function User() {
    const [username, setUsername] = useState('');
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState('');

    const fetchUserData = async () => {
        try {
            setError('');
            setUserList([]);
            const response = await fetch(`https://api.github.com/search/users?q=${username}`);
            if (!response.ok) throw new Error('No users found');
            const data = await response.json();
            setUserList(data.items); // Array of users
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">🔍 GitHub User Lookup</h1>
                <input
                    type="text"
                    placeholder="Search GitHub users"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
                />
                <button
                    onClick={fetchUserData}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
                >
                    Search
                </button>

                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

                {userList.length > 0 && (
                    <div className="mt-6 space-y-4">
                        {userList.map((user) => (
                            <div
                                key={user.id}
                                className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm"
                            >
                                <img
                                    src={user.avatar_url}
                                    alt={user.login}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">@{user.login}</p>
                                    <a
                                        href={user.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 text-sm hover:underline"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
