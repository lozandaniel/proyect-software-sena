import axiosInstance from '../../../utils/axiosConfig'

const useDeleteItem = () => {
  const deleteItem = async (path) => {
    try {
      const response = await axiosInstance.delete(path)
      return response.data
    } catch (error) {
      console.log('Error eliminado el producto: ', error)
      return null
    }
  }

  return { deleteItem }
}

export default useDeleteItem
