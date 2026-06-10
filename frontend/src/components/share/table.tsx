/** @format */

import { useState } from 'react';

import type { Column } from '../../types';

export interface TableProps<T extends { _id: string }> {
  columns: Column<T>[];
  data: T[];
}


export function Table<T extends { _id: string }>({
  columns,
  data,
}: TableProps<T>) {

  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [ascending, setAscending] = useState(true);
  const [selected, setSelected] = useState<number[]>([]);

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;

    const aVal = a[sortKey];
    const bVal = b[sortKey];

    if (aVal < bVal) return ascending ? -1 : 1;
    if (aVal > bVal) return ascending ? 1 : -1;
    return 0;
  });

  const toggleSort = (key: keyof T) => {
    if (sortKey === key) {
      setAscending(!ascending);
    } else {
      setSortKey(key);
      setAscending(true);
    }
  };

  const toggleSelect = (id: string) => {
  const numericId = Number(id);

  setSelected((prev) =>
    prev.includes(numericId)
      ? prev.filter((i) => i !== numericId)
      : [...prev, numericId]
  );
};

  return (
    <div className='overflow-x-auto bg-white rounded-xl h-[60vh]'>
      <table className='w-full'>
        <thead className='bg-gray-200'>
          <tr>
            <th className='p-2' />

            {columns.map((col, i) => (
              <th
                key={i}
                onClick={() =>
                  col.sortable && col.accessor && toggleSort(col.accessor)
                }
                className='p-3 cursor-pointer text-left'
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {sortedData.map((row) => (
            <tr
              key={row._id}
              className='border-b border-primary'
            >
              <td className='p-2'>
                <input
                  type='checkbox'
                  checked={selected.includes(Number(row._id))}
                  onChange={() => toggleSelect(row._id)}
                />
              </td>

              {columns.map((col, i) => (
                <td
                  key={i}
                  className='p-3'
                >
                  {col.render
                    ? col.render(row)
                    : col.accessor
                      ? (row[col.accessor] as React.ReactNode)
                      : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
