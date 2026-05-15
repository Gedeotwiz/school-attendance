/** @format */

import { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    name: string;
    email: string;
    gender: string;
    phone: string;
    location: string;
  }) => void;
};

const StudentModal = ({ open, onClose, onSave }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  if (!open) return null;

  const handleSubmit = () => {
    if (!name || !email || !gender || !phone) return;

    onSave({ name, email, gender, phone, location });

    setName('');
    setEmail('');
    setGender('');
    setPhone('');
    setLocation('');
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center z-50'>
      <div className='bg-white dark:bg-gray-800 p-6 rounded-2xl w-[400px] space-y-4 shadow-xl'>
        <h2 className='text-xl font-bold text-black dark:text-white'>
          Add Student
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Student name'
          className='w-full p-3 border rounded-lg dark:bg-gray-700'
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='w-full p-3 border rounded-lg dark:bg-gray-700'
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone number'
          className='w-full p-3 border rounded-lg dark:bg-gray-700'
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='w-full p-3 border rounded-lg dark:bg-gray-700'
        >
          <option value=''>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className='w-full p-3 border rounded-lg dark:bg-gray-700'
        >
          <option value=''>Select whe they sit</option>
          <option value='[1][1]'>[1][1]</option>
          <option value='[2][1]'>[2][1]</option>
          <option value='[1][1]'>[1][1]</option>
          <option value='[2][1]'>[2][1]</option>
          <option value='[1][1]'>[1][1]</option>
          <option value='[2][1]'>[2][1]</option>
          <option value='[1][1]'>[1][1]</option>
          <option value='[2][1]'>[2][1]</option>
          <option value='[1][1]'>[1][1]</option>
          <option value='[2][1]'>[2][1]</option>
          
        </select>

        <div className='flex justify-end gap-3'>
          <button
            onClick={onClose}
            className='px-4 py-2 rounded bg-gray-400 text-white'
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className='px-4 py-2 rounded bg-blue-500 text-white'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
