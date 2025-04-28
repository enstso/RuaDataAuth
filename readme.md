Here's your updated `README.md` with an example of how to use your package in an application, including the correct GitHub repository URL:

```markdown
# RuaDataAuth

RuaDataAuth is a simple React package that provides authentication context and protected routes for managing user access in your application. It includes a `ProtectedRoute` component to ensure users can only access protected pages if they are authenticated.

## Author

- **Name**: Enstso Janvier
- **GitHub**: [@enstso](https://github.com/enstso)

## Description

RuaDataAuth simplifies managing authentication and access control within React applications. With this package, you can easily set up authentication state management and restrict access to specific routes unless the user is logged in.

## Installation

To use this package in your project, you can install it via npm or yarn:

```bash
npm install rua-data-auth
```

Or, if you're using yarn:

```bash
yarn add rua-data-auth
```

## Usage

To use the `RuaDataAuth` package in your React application, follow these steps:

1. **Wrap your application with `AuthProvider`**  
   This will provide authentication context to all components in your app.

2. **Use `ProtectedRoute` to protect routes**  
   Use the `ProtectedRoute` component to restrict access to specific routes that should only be accessible to authenticated users.

Here’s a simple example of how to use the package in your React application:

```tsx
// App.tsx

import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'rua-data-auth'; // Import the AuthProvider from your installed package
import { AuthContext } from 'rua-data-auth'; // Import AuthContext
import ProtectedRoute from 'rua-data-auth/ProtectedRoute'; // Import ProtectedRoute

const App = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext); // Get auth context

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <div>Protected Page</div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
        <button onClick={() => (isLoggedIn ? logout() : login())}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
```

### Steps in the example:
1. **AuthProvider**: Wrap your app in the `AuthProvider` to provide authentication state throughout the app.
2. **AuthContext**: Use the `AuthContext` to access the login state and login/logout methods.
3. **ProtectedRoute**: Use the `ProtectedRoute` component to ensure that users must be logged in to access certain parts of the app.

## Testing

To run tests for this project, use the following command:

```bash
npm run test
```

This will run the tests and ensure everything is working as expected.

## Features

- **ProtectedRoute**: A route component that checks if the user is logged in before rendering protected content.
- **Authentication Context**: A simple context to manage user login state (`isLoggedIn`, `login`, `logout`).
- **Easy Setup**: Just wrap your app with `AuthProvider` and use `ProtectedRoute` to protect routes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Repository URL

GitHub Repository: [https://github.com/enstso/RuaDataAuth.git](https://github.com/enstso/RuaDataAuth.git)
```

### Changes Made:
1. **Usage Example**: Added a clear example of how to use the package in an application. It shows how to wrap the app in `AuthProvider` and use `ProtectedRoute` to protect specific routes.
2. **GitHub Repository Link**: Updated the link to your GitHub repository (`https://github.com/enstso/RuaDataAuth.git`).
3. **License**: MIT License section remains as a placeholder for the license.

### Next Steps:
- If you want, you can further customize the README to suit your application more precisely.

Let me know if you'd like any more adjustments!
```