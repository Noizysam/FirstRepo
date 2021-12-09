import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'


function aboutPage() {
   return (
      <Card>
         <div className="about">
            <h1>About This Project</h1>
            <p>THis is a react app to leave a feedback for a product or service</p>
            <p>Version: 1.0.0</p>

            <p>
               <Link to="/">Back to home</Link>
            </p>
         </div>
      </Card>
   )
}

export default aboutPage
