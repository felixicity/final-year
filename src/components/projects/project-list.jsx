
import Header from '../common/header'
import Sidebar from '../common/sidebar'
import Wrapper from './wrapper'


const ProjectList = () => {
    return (
        <div className='dash-body h-screen'>
            <Header />

            <div className="layout flex">
                <Sidebar customClass='w-1/6' />

                <div className="container w-5/6">
                    <Wrapper/>
                </div>
            </div>
        </div>
    )
}

export default ProjectList