import { DeleteIcon, EditIcon } from '../../icons/Icons'
import InputCategory from '../InputCategory'

function DataTable({ data }) {
  // En caso de que no se encuentren datos, se enviara un mensaje correspondiente
  if (!data) return <p>No hay datos en este momento</p>

  // Esta constante permite obtener las keys de el objeto de datos
  const columns = Object.keys(data[0])

  return (
    <table className="w-full border-collapse border text-sm text-left">
      <thead className="bg-primaryColor/80 text-xs text-gray-700 uppercase">
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
        {data.map((row, index) => (
          <tr className="bg-white border-b" key={index}>
            {columns.map((columnName) => (
              <td key={row.id_proveedor} className="px-4 py-2">
                {/* Se recorre cada columna, para traer sus datos */}
                {row[columnName]}
              </td>
            ))}
            <td className="px-4 py-2 flex flex-row gap-x-2">
              <a href="#" className="font-medium text-blue-600 hover:underline">
                <InputCategory
                  icon={<EditIcon />}
                  title="Editar"
                  className="bg-[#B3E5FC] text-primaryColor"
                />
              </a>
              <button>
                <InputCategory
                  icon={<DeleteIcon />}
                  title="Eliminar"
                  className={'bg-[#FFCDD2] text-[#D32F2F]'}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable
