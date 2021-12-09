import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
   const {feedback, countAverage} = useContext(FeedbackContext)
   return (
      <div className="feedback-stats">
         <h4>{feedback.length} Reviews</h4>
         <h4>Average Rating: {countAverage()}</h4>
      </div>
   )
}


export default FeedbackStats
