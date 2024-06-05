import { DeleteIcon, EditIcon } from '../../icons/Icons'
import InputCategory from '../InputCategory'

function DataTable({ data, rowKey, deleteRow, onEditClick, columns }) {
  // En caso de que no se encuentren datos, se enviara un mensaje correspondiente
  if (!data || data.length === 0) return <p>No hay datos en este momento</p>

  // Esta constante permite obtener las keys de el objeto de datos

  const handleDeleteRow = (id) => {
    if (window.confirm('Seguro que quieres eliminarlo?')) {
      deleteRow(id)
    }
  }

  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((value, key) => {
      return value !== undefined && value !== null ? value[key] : undefined
    }, obj)
  }

  return (
    <section className="my-4 overflow-x-auto bg-white p-4 sm:rounded-lg">
      <table className="w-full table-auto border-collapse border text-left text-sm">
        <thead className="bg-primaryColor/80 text-xs uppercase text-gray-700">
          <tr>
            {columns.map((colName) => (
              <th key={colName} scope="col" className="px-4 py-2">
                {colName}
              </th>
            ))}
            <th scope="col" className="px-4 py-2">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className="border-b bg-white" key={row[rowKey]}>
              {columns.map((columnName) => (
                <td key={columnName} className="px-4 py-2">
                  {/* Se recorre cada columna, para traer sus datos */}
                  {getNestedValue(row, columnName)}
                </td>
              ))}
              <td className="flex flex-row gap-x-2 px-4 py-2">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={() => onEditClick(row)}
                >
                  <InputCategory className="text-primaryColors bg-[#B3E5FC]">
                    <EditIcon />
                    Editar
                  </InputCategory>
                </button>
                <button onClick={() => handleDeleteRow(row[rowKey])}>
                  <InputCategory className="bg-[#FFCDD2] text-[#D32F2F]">
                    <DeleteIcon />
                    Eliminar
                  </InputCategory>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default DataTable
