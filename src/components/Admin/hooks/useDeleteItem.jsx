import axios from 'axios'

const useDeleteItem = () => {
  const deleteItem = async (url) => {
    try {
      const response = await axios.delete(url)
      return response.data
    } catch (error) {
      console.log('Error eliminado el producto: ', error)
      return null
    }
  }

  return { deleteItem }
}

export default useDeleteItem
