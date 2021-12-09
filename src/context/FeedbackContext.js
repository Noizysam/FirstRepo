import {createContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
   const [feedback, setFeedback] = useState([
      {
         id: 1,
         text: 'This is a feedback item 1',
         rating: 10
      },
      {
         id: 2,
         text: 'This is a feedback item 2',
         rating: 7
      },
      {
         id: 3,
         text: 'This is a feedback item 3',
         rating: 3
      },
   ])

   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
   })

   const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')){
			setFeedback(feedback.filter((item) => item.id !== id))
		}
		
	}

   // To add new feedback
   const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

   // Count average rating
   const countAverage = () => {
		if (feedback.length === 0) {
			return 0
		}
		let average = feedback.reduce((a,v) =>  a = a + v.rating , 0 ) / feedback.length
		average = average.toFixed(1).replace(/[.,]0$/, '')
		return average
	}

   // To edit feedback
   const editFeedback = (item) => {
      setFeedbackEdit({
         item,
         edit: true
      })
   }

   // Update feedback item
   const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item))
   }

   return <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      deleteFeedback,
      addFeedback,
      countAverage,
      editFeedback,
      updateFeedback,
   }}>
      {children}
   </FeedbackContext.Provider>
}


export default FeedbackContext