import { Children } from "react";

const MainLayout = () => {

    return (
        <div>
            <div>
                <NavBar/>
                {Children}
                </div>
            {/* componente dinámicos vayan aquí */}
            <div>footer</div> 
        </div>
    )
};

export default MainLayout;