import React, { useState } from 'react';

interface BaseTableProps {
    title: string;
    headers: { key: string; label: string; sortable?: boolean }[];
    data: any[];
    renderRow: (item: any) => React.ReactNode;
}

const BaseTable: React.FC<BaseTableProps> = ({ title, headers, data, renderRow }) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    const sortedData = React.useMemo(() => {
        if (sortConfig !== null) {
            return [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    }, [data, sortConfig]);

    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    console.log(sortedData)

    return (<div>
        <div className="w-full bg-white border rounded-lg border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">{title}</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                {headers.map((header) => (
                                    <th key={header.key} className="p-2 whitespace-nowrap cursor-pointer" onClick={() => header.sortable && requestSort(header.key)}>
                                        <div className="font-semibold text-left flex items-center">
                                            {header.label}
                                            {header.sortable && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`ml-1 h-4 w-4 ${sortConfig?.key === header.key ? sortConfig.direction === 'asc' ? 'transform rotate-180' : '' : '' }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/>
                                                </svg>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {sortedData.map((item, index) => (
                                <tr key={index}>{renderRow(item)}</tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>)
}

export default BaseTable;