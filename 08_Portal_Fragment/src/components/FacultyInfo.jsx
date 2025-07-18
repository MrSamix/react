import { Fragment } from "react";

const facultyData = {
  name: "Факультет інформаційних технологій",
  groups: [
    {
      name: "Група ІТ-101",
      students: ["Іван Іванов", "Петро Петренко", "Олена Коваленко"]
    },
    {
      name: "Група ІТ-102",
      students: ["Марія Шевченко", "Андрій Сидоренко", "Оксана Бондар"]
    }
  ]
};

function FacultyInfo() {
  return (
    <div>
      <h2>{facultyData.name}</h2>
      <ul>
        {facultyData.groups.map((group, idx) => (
          <li key={idx} style={{textAlign: "left"}}>
            <strong>{group.name}</strong>
            <ul>
              {group.students.map((student, sidx) => (
                <Fragment key={sidx}>
                  <li style={{textAlign: "left"}}>{student}</li>
                </Fragment>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FacultyInfo;
