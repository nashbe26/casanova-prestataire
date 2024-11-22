import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import { User } from "./utils/recoil/atoms";
import { useRecoilState } from "recoil";
import { useGetUser } from "utils/functions";
import NotFound from "pages/NotFound";
import { useMediaQuery } from "react-responsive";
import PrescreatPackPage from "pages/PrescreatePack";
import PrespackPage from "pages/PresPack";
const PresMedia = React.lazy(() => import("pages/PresMedia"));
const PresproduitOne = React.lazy(() => import("pages/PresproduitOne"));
const Presbalance = React.lazy(() => import("pages/Presbalance"));
const PresSettings = React.lazy(() => import("pages/PresSettings"));
const Presproduit = React.lazy(() => import("pages/Presproduit"));
const Preshomepageaviabilty = React.lazy(
  () => import("pages/Preshomepageaviabilty"),
);
const Preshomepage = React.lazy(() => import("pages/Preshomepage"));
const Prescreatproduit = React.lazy(() => import("pages/Prescreatproduit"));
const Preslandingpage = React.lazy(() => import("pages/Preslandingpage"));
const PresPHOTO = React.lazy(() => import("pages/PresPHOTO"));
const PresPHOTOOne = React.lazy(() => import("pages/PresPHOTOOne"));
const USERSETTING = React.lazy(() => import("pages/USERSETTING"));
const Homepage = React.lazy(() => import("pages/Homepage"));


const Signup = React.lazy(() => import("pages/Signup"));
const PresSignup = React.lazy(() => import("pages/PresSignup"));


const SignIn = React.lazy(() => import("pages/SignIn"));
const PresSignIn = React.lazy(() => import("pages/PresSignIn"));

const Checkout = React.lazy(() => import("pages/Checkout"));


const CategoryPage = React.lazy(() => import("pages/CategoryPage"));
const ProductDetailPage = React.lazy(() => import("pages/ProductDetailPage"));
const Pres = React.lazy(() => import("pages/Pres"));
const Cart = React.lazy(() => import("pages/Cart"));
const Two = React.lazy(() => import("pages/Two"));
const Four = React.lazy(() => import("pages/Four"));
const LandingpagesThree = React.lazy(() => import("pages/LandingpagesThree"));
const LandingpageContact = React.lazy(() => import("pages/LandingpageContact"));
const LandingpagesSeven = React.lazy(() => import("pages/LandingpagesSeven"));
const LandingpagesSix = React.lazy(() => import("pages/LandingpagesSix"));
const LandingpagesFive = React.lazy(() => import("pages/LandingpagesFive"));
const LandingpagesFour = React.lazy(() => import("pages/LandingpagesFour"));
const Landingpage = React.lazy(() => import("pages/LandingPage"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const PresorderPage = React.lazy(() => import("pages/Presorder"));

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    return <Navigate to="/PresSignIn" />;
  }
  return children;
};

const ProjectRoutes = () => {
  const [loggedIn,setLoggedIn] = useState(null)
  const checkvalidUser= useGetUser()
  const [token,setToken] = useRecoilState(User);
  React.useEffect(() => { 
    console.log(loggedIn);
    
  }, [loggedIn]);
  React.useEffect(() => {
    const fetchUserFromToken = async () => {
     if(!token){
      setLoggedIn(false)
      return
     }
     const user =  await checkvalidUser(token)
     if(user.status!=401){
     await setLoggedIn(true)
     }else{
      setLoggedIn(false)
      return
     }
    };

    fetchUserFromToken();
  }, [token]);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 770px)' })

  if (isTabletOrMobile) {
    // Render a restriction message for mobile users
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          color: "#721c24",
        }}
      >
        <div>
          <h1>Access Restricted</h1>
          <p>This application is not available on mobile devices. Please use a desktop device to access it.</p>
        </div>
      </div>
    );
  }
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/PresSignIn" element={<PresSignIn />} />
          <Route path="/PresSignup" element={<PresSignup />} />
          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/presphotoone"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <PresPHOTOOne />
              </ProtectedRoute>
            }
          />
          <Route
            path="/presphoto"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <PresPHOTO />
              </ProtectedRoute>
            }
          />
          <Route
            path="/preslandingpage"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <Preslandingpage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/prescreatproduit"
            element={
              <ProtectedRoute isLoggedIn={loggedIn}>
                <Prescreatproduit />
              </ProtectedRoute>
            }
          />
     </Routes>
      </Router>
    </React.Suspense>
    /**    <Routes>
          
          <Route path="/" element={isTabletOrMobile ? <Homepage /> : <Landingpage />} />

          <Route path="/SignIn" element={<SignIn /> } />

          <Route path="/Signup" element={ <Signup />} />
          
          <Route path="*" element={<Navigate to="/SignIn" />} />
       
          <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/Signup" />} />

          <Route path="/presphoto/:id" element={<PresPHOTO />} />

          <Route path="/landingpagesfour" element={<LandingpagesFour />} />

          <Route path="/Landingpage" element={<Landingpage />} />

          <Route path="/landingpagesfive" element={<LandingpagesFive />} />

          <Route path="/landingpagessix" element={<LandingpagesSix />} />
          
          <Route path="/landingpagesseven" element={<LandingpagesSeven />} />

          <Route path="/landingpagesthree" element={<LandingpagesThree />} />


          <Route path="*" element={<NotFound />} />

          <Route path="/landingpagesfour" element={<LandingpagesFour />} />

          <Route path="/PresorderPage" element={<PresorderPage />} />

          <Route path="/Checkout" element={<Checkout />} />

          <Route path="/landingpagesfive" element={<LandingpagesFive />} />

          <Route path="/landingpagessix" element={<LandingpagesSix />} />

          <Route path="/landingpagesseven" element={<LandingpagesSeven />} />

          <Route path="/landingpagesthree" element={<LandingpagesThree />} />
          
          <Route path="/cart" element={<Cart />} /> 
          
         
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/category" element={ <CategoryPage />   } />
   
          <Route path="/homepage" element={ <Homepage />} />
          {loggedIn && (
            <>
          <Route path="/Checkout" element={ loggedIn ? <Checkout /> : <Navigate to="/Signup"  />} />
          <Route path="/cart" element={loggedIn ?  <Cart />  : <Navigate to="/Signup"  />} /> 
          <Route path="/productdetailpage/:id" element={loggedIn ?  <ProductDetailPage />  : <Navigate to="/Signup"  />} />
             <Route path="/Dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/Signup" />} />

            <Route path="/usersetting" element={loggedIn ?<USERSETTING />: <Navigate to="/Signup" />} />

            </>
          )}
        </Routes> */
    /*
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingpagesTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/landingpagesfour" element={<LandingpagesFour />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PresorderPage" element={<PresorderPage />} />
          <Route path="/Checkout" element={<Checkout />} />

          
          <Route path="/landingpagesfive" element={<LandingpagesFive />} />
          <Route path="/landingpagessix" element={<LandingpagesSix />} />
          <Route path="/landingpagesseven" element={<LandingpagesSeven />} />
          <Route path="/landingpagesthree" element={<LandingpagesThree />} />
          <Route path="/cart" element={<Cart />} /> 
          
          <Route path="/pres" element={<Pres />} /> 
         
          <Route path="/homepage" element={<Homepage />} /> 
           
          <Route path="/presphotoone" element={<PresPHOTOOne />} />  
          <Route path="/presphoto" element={<PresPHOTO />} /> 
          <Route path="/preslandingpage" element={<Preslandingpage />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/PresSignIn" element={<PressignIn />} /> 
          
          <Route path="/prescreatproduit" element={<Prescreatproduit />} /> 
          <Route path="/preshomepage" element={<Preshomepage />} />
          <Route path="/preshomepageaviabilty" element={<Preshomepageaviabilty />}/>{"not done yet"}
          <Route path="/presproduit" element={<Presproduit />} />
          <Route path="/pressettings" element={<PresSettings />} />
          <Route path="/presbalance" element={<Presbalance />} />
          <Route path="/presmedia" element={<PresMedia />} />
        </Routes>
      </Router>
    </React.Suspense>
 */
       /*
          <Route path="/preslandingpage" element={<Preslandingpage />} />

          <Route path="/PresSignIn" element={<PresSignIn /> } />
          <Route path="/PresSignup" element={ <PresSignup />} />
          <Route path="/pres" element={<Pres />} /> 
          <Route path="/presphotoone" element={<PresPHOTOOne />} />  
          <Route path="/presphoto" element={<PresPHOTO />} /> 
          <Route path="/preslandingpage" element={<Preslandingpage />} /> 
          <Route path="/PresSignIn" element={<PresSignIn />} /> 
          
          <Route path="/prescreatproduit" element={<Prescreatproduit />} /> 
          <Route path="/preshomepage" element={<Preshomepage />} />
          <Route path="/preshomepageaviabilty" element={<Preshomepageaviabilty />}/>
          <Route path="/presproduit" element={<Presproduit />} />
          <Route path="/pressettings" element={<PresSettings />} />
          <Route path="/presbalance" element={<Presbalance />} />
          <Route path="/presmedia" element={<PresMedia />} />
          */
    );
};
export default ProjectRoutes;
