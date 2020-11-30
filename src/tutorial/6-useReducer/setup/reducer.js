// reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      }
    case 'NO_VALUE':
      return { ...state, isModalOpen: true, modalContent: 'please enter value' }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    case 'REMOVE_ITEM':
      const nPeople = state.people.filter((person) => {
        return person.id !== action.payload
      })
      return {
        ...state,
        people: nPeople,
        isModalOpen: true,
        modalContent: 'item removed',
      }
    default:
      throw new Error('no matching action type')
  }
}
