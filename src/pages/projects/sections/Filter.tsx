import { useState } from 'react'

type FilterButtonProps = {
    active: boolean
    label: string
    onClick: () => void
}

const FilterButton = ({ active, label, onClick }: FilterButtonProps) => {
    return (
        <button
            className={[
                'duration-300 px-4 py-2 rounded-md text-sm transition-colors',
                active
                    ? 'bg-[#008900] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            ].join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

type ProjectFilterProps = {
    activeFilter: string
    onFilterChange: (filter: string) => void
}

const Filter = ({ activeFilter, onFilterChange }: ProjectFilterProps) => {
    const filters = ['All', 'Solar', 'Hybrid', 'Geothermal']

    return (
        <div className='flex flex-wrap gap-3 justify-center mb-8'>
            {filters.map((filter) => (
                <FilterButton
                    key={filter}
                    active={activeFilter === filter}
                    label={filter}
                    onClick={() => onFilterChange(filter)}
                />
            ))}
        </div>
    )
}

export default Filter