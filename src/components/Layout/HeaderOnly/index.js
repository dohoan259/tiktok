import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayot({ children }) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayot;