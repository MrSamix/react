import { Fragment } from 'react';

const company = {
  name: 'ТОВ "ТехноСвіт"',
  location: 'Київ, Україна',
  established: 2010,
  employees: [
    {
      id: 1,
      name: 'Іван Іваненко',
      position: 'CEO',
      email: 'ivan@technosvit.ua',
    },
    {
      id: 2,
      name: 'Олена Петрівна',
      position: 'HR менеджер',
      email: 'olena@technosvit.ua',
    },
    {
      id: 3,
      name: 'Микола Миколайович',
      position: 'Розробник',
      email: 'mykola@technosvit.ua',
    },
  ],
};

function CompanyInfo(){
  return (
    <Fragment>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <h1>{company.name}</h1>
        <p><strong>Місцезнаходження:</strong> {company.location}</p>
        <p><strong>Рік заснування:</strong> {company.established}</p>

        <h2>Співробітники</h2>
        <ul style={{ padding: 0, listStyleType: 'none' }}>
          {company.employees.map(emp => (
            <li
              key={emp.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '4px',
              }}
            >
              <>
                <p><strong>Ім’я:</strong> {emp.name}</p>
                <p><strong>Посада:</strong> {emp.position}</p>
                <p><strong>Email:</strong> {emp.email}</p>
              </>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default CompanyInfo;
