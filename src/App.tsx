// App.tsx
import { useNavigate } from 'react-router-dom'
function App() {
  const navigate = useNavigate()

  return (
          <div className="bg-background h-screen flex justify-center items-center">
             
            <div className="border-2 border-primary rounded-lg p-8 bg-white shadow-lg max-w-md w-full">
               
              <h1 className="block text-primary text-2xl font-bold">
                Login
              </h1> 
              <form className="mt-4">
                 
                <div className="mb-4">
                   
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                     
                    Username 
                  </label> 
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  /> 
                </div> 
                <div className="mb-6">
                   
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                     
                    Password 
                  </label> 
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  /> 
                </div> 
                <div className="flex items-center justify-between">
                   
                  {/* <Link to="/dashboard"> */} 
                  <button
                    className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={() => navigate('/Dashboard')}
                  >
                     
                    Sign In 
                  </button> 
                  {/* </Link> */} 
                </div> 
              </form> 
            </div> 
          </div>
  );
}

export default App;
