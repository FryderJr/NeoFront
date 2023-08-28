let authToken = null;

const setAuthToken = (token) => {
    authToken = token;
};

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }
    return response.json();
};

const callApi = async (url, body, apiOptions = {}) => {
    const options = {
        method: body ? 'POST' : 'GET', // Default to POST if body is provided, otherwise GET
        ...apiOptions,
        headers: {
            // Default headers here
            ...(authToken && { Authorization: `Token ${authToken}` }), // Include authorization if token is available
            ...(apiOptions.headers || {}), // Include headers from apiOptions if provided
            // Add 'Content-Type' header for POST requests
            ...(body && { 'Content-Type': 'application/json' }),
        },
        body: body ? JSON.stringify(body) : undefined,
    };

    console.log(options)
    const response = await fetch(url, options);

    if (response.status === 401) {
        const refreshedToken = await refreshToken();

        if (refreshedToken) {
            setAuthToken(refreshedToken);
            options.headers.Authorization = `Token ${refreshedToken}`;
            return callApi(url, body, options);
        } else {
            throw new Error('Failed to refresh token');
        }
    }

    return handleResponse(response);
};

const login = async (username, password) => {
    const response = await callApi(`${process.env.REACT_APP_SERVER}/auth/token/login`, { username, password });
    console.log(response)
    if (response.auth_token) {
        setAuthToken(response.auth_token)
    }

    return response;
};

const refreshToken = async () => {
    // Implement your token refreshing logic here
    // Return the new token if successful, or null if failed
};

const logout = () => {
    setAuthToken(null);
};

export { callApi, login, logout };