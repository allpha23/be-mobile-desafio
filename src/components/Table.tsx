import '../styles/components/Table.css'
import SVGDown from '../icons/SVGDown';
import SVGEllipse from '../icons/SVGEllipse';
import useAxios from '../hooks/use-axios';
import axiosInstance from '../helper/axios-instance';
import { EmployeerDataResponse } from '../types/employees';
import { useState } from 'react';
import PhoneFormatter from '../helper/phoneFormatter';


const Table = ({search}: {search: string}) => {
  const [showTable, setShowTable] = useState('')

  const { data: employees } = useAxios<EmployeerDataResponse[]>({
    axiosInstance,
    url: 'employees'
  })

  console.log(search)

  const filteredEmployees = search.length > 0 
    ? employees?.filter(employee => {
      return employee.name.includes(search) ||
      employee.job.includes(search) ||
      employee.phone.includes(search)
    })
    : employees

  const handleTableClick = (e : React.MouseEvent<HTMLElement>) => {
    if (showTable == e.currentTarget.id) {
      setShowTable('')
    } else setShowTable(e.currentTarget.id)
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th>
            <SVGEllipse className='circle'/>
            <span className='mobile-job'>CARGO</span>
          </th>
          <th className='th-mobile'>DATA DE ADMISSÃO</th>
          <th className='th-mobile'>TELEFONE</th>
        </tr>
      </thead>
      {filteredEmployees?.map((employee) => (
        <tbody key={employee.id}>
          <tr className={showTable == employee.id ? '' : 'shadow'}> 
            <td><img src={employee.image} alt={employee.name} /></td>
            <td>{employee.name}</td>
            <td
              onClick={(e) => handleTableClick(e)} id={employee.id}
            >
              <SVGDown className='down-icon'/>
              <span className='mobile-job'>{employee.job}</span>
            </td>
            <td className='td-mobile'>{new Date(employee.admission_date).toLocaleDateString()}</td>
            <td className='td-mobile'>{PhoneFormatter(employee.phone)}</td>
          </tr>
          <tr className={showTable == employee.id ? 'shadow' : 'table-disabled'}>
            <td colSpan={3}>
              <div className='more-table'>
                <p>Cargo</p>
                <p>{employee.job}</p>
              </div>
              <div className='more-table'>
                <p>Data de admissão</p>
                <p>{new Date(employee.admission_date).toLocaleDateString()}</p>
              </div>
              <div className='more-table'>
                <p>Telefone</p>
                <p>{PhoneFormatter(employee.phone)}</p>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
