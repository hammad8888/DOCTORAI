// // src/components/Common/SpecializationSearch.jsx
// import { useState } from 'react'
// import { Combobox } from '@headlessui/react'
// import { FiChevronDown } from 'react-icons/fi'
// import { SPECIALIZATIONS } from '../../config/constants'

// export default function SpecializationSearch({ value, onChange }) {
//   const [query, setQuery] = useState('')

//   const filteredSpecializations = 
//     query === ''
//       ? SPECIALIZATIONS
//       : SPECIALIZATIONS.filter(spec =>
//           spec.toLowerCase().includes(query.toLowerCase())
//         )

//   return (
//     <Combobox value={value} onChange={onChange}>
//       <div className="relative w-full">
//         <Combobox.Input
//           className="w-full pl-4 pr-8 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-medical-primary"
//           displayValue={(spec) => spec}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Select specialization..."
//         />
//         <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
//           <FiChevronDown className="w-5 h-5 text-gray-400" />
//         </Combobox.Button>
//         <Combobox.Options className="absolute mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
//           {filteredSpecializations.map((spec) => (
//             <Combobox.Option
//               key={spec}
//               value={spec}
//               className={({ active }) => 
//                 `px-4 py-2 cursor-pointer ${
//                   active ? 'bg-medical-primary/10 text-medical-primary' : ''
//                 }`
//               }
//             >
//               {spec}
//             </Combobox.Option>
//           ))}
//         </Combobox.Options>
//       </div>
//     </Combobox>
//   )
// }





























import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { SPECIALIZATIONS } from '../../config/constants';

export default function SpecializationSearch({ value, onChange }) {
  const [query, setQuery] = useState('');

  const filteredSpecializations = 
    query === ''
      ? SPECIALIZATIONS
      : SPECIALIZATIONS.filter(spec =>
          spec.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <Combobox value={value} onChange={onChange}>
      <div className="relative w-full">
        <Combobox.Input
          className="w-full pl-4 pr-8 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-medical-primary"
          displayValue={(spec) => spec}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Select specialization..."
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
          <FiChevronDown className="w-5 h-5 text-gray-400" />
        </Combobox.Button>
        <Combobox.Options className="absolute mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 max-h-60 overflow-auto">
          {filteredSpecializations.map((spec) => (
            <Combobox.Option
              key={spec}
              value={spec}
              className={({ active }) => 
                `px-4 py-2 cursor-pointer ${
                  active ? 'bg-medical-primary/10 text-medical-primary' : ''
                }`
              }
            >
              {spec}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  );
}