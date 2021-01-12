import AppLayout from '../components/AppLayout';
import React from 'react'
const Home = () => {

    return(
        

        <AppLayout>
            <stlye jsx>
            {`
                body{
                    margin-top: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
                }
            `
            }
        </stlye>
            <div>Hello</div>
        </AppLayout>
    );
}

export default Home;